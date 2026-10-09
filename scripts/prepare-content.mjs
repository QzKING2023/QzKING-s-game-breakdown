import { readFile, writeFile, mkdir } from 'node:fs/promises'

// The author's Markdown remains the only source of truth for the full article.
const source = new URL('../Valheim战斗系统拆解案.md', import.meta.url)
const original = await readFile(source, 'utf8')
const article = original.replace(/^## (\d+)\. (.+)$/gm, '## $1. $2 {#section-$1}')
  .replace(/^### (\d+)\.(\d+) (.+)$/gm, '### $1.$2 $3 {#section-$1-$2}')
  .replace(/^## 附录 ([A-D])：(.+)$/gm, '## 附录 $1：$2 {#appendix-$1}')
await mkdir(new URL('../docs/valheim/', import.meta.url), { recursive: true })
await mkdir(new URL('../docs/public/downloads/', import.meta.url), { recursive: true })
await writeFile(new URL('../docs/valheim/full.md', import.meta.url), `---
title: Valheim 战斗系统拆解案 · 全文
description: 从伤害结算、区域遭遇与资源成本，分析 Valheim 战斗系统中的风险与收益。
outline: [2, 3]
pageClass: full-article
---

[← 返回导读](./) · <DownloadSource />

${article}`)
await writeFile(new URL('../docs/public/downloads/valheim-combat.md', import.meta.url), original)
console.log('已从原稿生成全文页面及下载文件。')
