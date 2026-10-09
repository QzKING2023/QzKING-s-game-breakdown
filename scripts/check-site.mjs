import { readFile, readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import assert from 'node:assert/strict'

const root = fileURLToPath(new URL('../docs/.vitepress/dist/', import.meta.url))
const base = '/QzKING-s-game-breakdown/'
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  return (await Promise.all(entries.map(e => e.isDirectory() ? walk(path.join(dir, e.name)) : path.join(dir, e.name)))).flat()
}
const pages = (await walk(root)).filter(f => f.endsWith('.html'))
const cache = new Map()
async function read(file) {
  if (!cache.has(file)) cache.set(file, await readFile(file, 'utf8'))
  return cache.get(file)
}
for (const required of ['index.html', 'about.html', 'valheim/index.html', 'valheim/full.html']) {
  assert.ok(pages.includes(path.join(root, required)), `缺少页面：${required}`)
}
let count = 0
for (const page of pages) {
  const html = await read(page)
  const pageUrl = new URL(base + path.relative(root, page).replaceAll('\\', '/'), 'https://local.test')
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const value = match[1].replaceAll('&amp;', '&')
    const url = new URL(value, pageUrl)
    if (url.origin !== pageUrl.origin) continue
    assert.ok(url.pathname.startsWith(base), `错误的部署路径：${value} in ${page}`)
    let file = path.join(root, decodeURIComponent(url.pathname.slice(base.length)))
    let info
    try { info = await stat(file) } catch { throw new Error(`失效链接：${value} in ${page}`) }
    if (info.isDirectory()) file = path.join(file, 'index.html')
    await stat(file)
    if (url.hash && file.endsWith('.html')) {
      const id = decodeURIComponent(url.hash.slice(1))
      assert.ok((await read(file)).includes(`id="${id}"`), `缺少锚点：${value}`)
    }
    count++
  }
}
const original = await readFile(new URL('../Valheim战斗系统拆解案.md', import.meta.url))
const download = await readFile(path.join(root, 'downloads/valheim-combat.md'))
assert.deepEqual(download, original, '下载文件应与原始 Markdown 完全一致')
const article = await read(path.join(root, 'valheim/full.html'))
for (let i = 0; i <= 14; i++) assert.ok(article.includes(`id="section-${i}"`), `缺少第 ${i} 节`)
assert.ok(article.includes('role="region"') && article.includes('tabindex="0"'), '表格应支持键盘横向滚动')
const about = await read(path.join(root, 'about.html'))
assert.ok(about.includes('mailto:Q1625732064@outlook.com') && about.includes('185872494'))
console.log(`检查通过：${pages.length} 个页面，${count} 个站内链接与资源；章节锚点、联系方式、原稿下载完整。`)
