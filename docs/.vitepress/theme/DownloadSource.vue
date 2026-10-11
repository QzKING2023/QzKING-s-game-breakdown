<script setup>
import { withBase } from 'vitepress'
defineProps({
  href: { type: String, default: '/downloads/valheim-combat.md' },
  filename: { type: String, default: 'Valheim战斗系统拆解案.md' }
})
</script>

<template>
  <a :href="withBase(href)" :download="filename">下载 Markdown 原稿</a>
</template>
