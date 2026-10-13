import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises'
import { articles } from './articles.mjs'

// The root Markdown file remains the only source of truth for the full article.
for (const entry of articles) {
  const source = new URL(`../${entry.source}`, import.meta.url)
  const original = await readFile(source, 'utf8')
  let article = original.replace(/^## (\d+)\. (.+)$/gm, '## $1. $2 {#section-$1}')
    .replace(/^### (\d+)\.(\d+) (.+)$/gm, '### $1.$2 $3 {#section-$1-$2}')
    .replace(/^## 附录 ([A-D])：(.+)$/gm, '## 附录 $1：$2 {#appendix-$1}')
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
