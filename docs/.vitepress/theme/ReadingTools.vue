<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'
const route = useRoute()
const progress = ref(0)
const visible = ref(false)
function update() {
  const available = document.documentElement.scrollHeight - window.innerHeight
  progress.value = available > 0 ? Math.min(100, Math.max(0, window.scrollY / available * 100)) : 0
  visible.value = window.scrollY > 650
}
function backToTop() {
  window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
}
watch(() => route.path, () => { progress.value = 0; visible.value = false })
onMounted(() => { update(); window.addEventListener('scroll', update, { passive: true }); window.addEventListener('resize', update) })
onUnmounted(() => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update) })
</script>

<template>
  <div class="reading-progress" :style="{ width: progress + '%' }" aria-hidden="true"></div>
  <button v-if="visible" class="back-top" @click="backToTop" aria-label="返回文章顶部">↑ 返回顶部</button>
</template>
