import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises'
import { articles } from './articles.mjs'

const partNumbers = { 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9 }

// The root Markdown file remains the only source of truth for the full article.
for (const entry of articles) {
  const source = new URL(`../${entry.source}`, import.meta.url)
  const original = await readFile(source, 'utf8')
  let article = original.replace(/^## (\d+)\. (.+)$/gm, '## $1. $2 {#section-$1}')
    .replace(/^### (\d+)\.(\d+) (.+)$/gm, '### $1.$2 $3 {#section-$1-$2}')
    .replace(/^### (\d+)\. (.+)$/gm, '### $1. $2 {#section-$1}')
    .replace(/^## 第([一二三四五六七八九])部 (.+)$/gm, (_, n, rest) => `## 第${n}部 ${rest} {#part-${partNumbers[n]}}`)
    .replace(/^## 结语$/gm, '## 结语 {#conclusion}')
    .replace(/^## 附录 ([A-D])([：\s])(.+)$/gm, '## 附录 $1$2$3 {#appendix-$1}')
  await mkdir(new URL(`../docs/${entry.slug}/`, import.meta.url), { recursive: true })
  await mkdir(new URL('../docs/public/downloads/', import.meta.url), { recursive: true })
  if (entry.assetDirectory) {
    // Keep the source file's relative images usable both on the site and in downloads.
    for (const target of [`docs/${entry.slug}`, 'docs/public/downloads']) {
      const destination = new URL(`../${target}/${entry.assetDirectory}/`, import.meta.url)
      await mkdir(destination, { recursive: true })
      for (const name of Object.keys(entry.images)) {
        await copyFile(new URL(`../${entry.assetDirectory}/${name}`, import.meta.url), new URL(name, destination))
      }
    }
    for (const [name, alt] of Object.entries(entry.images)) {
      article = article.replace(`src="${entry.assetDirectory}/${name}"`, `src="./${entry.assetDirectory}/${name}" alt="${alt}" loading="lazy"`)
    }
  }
  await writeFile(new URL(`../docs/${entry.slug}/full.md`, import.meta.url), `---
title: ${entry.title}
description: ${entry.description}
outline: [2, 3]
pageClass: full-article
---

[← 返回导读](./) · <DownloadSource href="/downloads/${entry.download}" filename="${entry.source}" />

${article}`)
  await writeFile(new URL(`../docs/public/downloads/${entry.download}`, import.meta.url), original)
  console.log(`已从源文件生成 ${entry.slug} 全文页面及下载文件。`)
}
