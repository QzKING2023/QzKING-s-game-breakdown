import { readFile, readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import assert from 'node:assert/strict'
import { articles } from './articles.mjs'

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
for (const required of ['index.html', 'about.html', ...articles.flatMap(({ slug }) => [`${slug}/index.html`, `${slug}/full.html`])]) {
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
for (const entry of articles) {
  const original = await readFile(new URL(`../${entry.source}`, import.meta.url))
  const download = await readFile(path.join(root, `downloads/${entry.download}`))
  assert.deepEqual(download, original, `${entry.slug} 下载文件应与原始 Markdown 完全一致`)
  const article = await read(path.join(root, `${entry.slug}/full.html`))
  for (let i = 0; i < (entry.sections ?? 15); i++) assert.ok(article.includes(`id="section-${i}"`), `缺少第 ${i} 节`)
  for (const appendix of entry.appendices ?? ['A', 'B', 'C', 'D']) assert.ok(article.includes(`id="appendix-${appendix}"`), `缺少附录 ${appendix}`)
  assert.ok(article.includes('role="region"') && article.includes('tabindex="0"'), '表格应支持键盘横向滚动')
  for (const [name, alt] of Object.entries(entry.images ?? {})) {
    assert.ok(article.includes(`alt="${alt}"`), `缺少图表说明：${name}`)
    const sourceImage = await readFile(new URL(`../${entry.assetDirectory}/${name}`, import.meta.url))
    const downloadImage = await readFile(path.join(root, 'downloads', entry.assetDirectory, name))
    assert.deepEqual(downloadImage, sourceImage, `下载原稿配图不一致：${name}`)
  }
}
const about = await read(path.join(root, 'about.html'))
assert.ok(about.includes('mailto:Q1625732064@outlook.com') && about.includes('185872494'))
console.log(`检查通过：${pages.length} 个页面，${count} 个站内链接与资源；章节锚点、联系方式、原稿下载完整。`)
