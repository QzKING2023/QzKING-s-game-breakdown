<script setup>
import { computed, ref } from 'vue'

const routes = [
  {
    id: 'carry',
    label: '中板搬运',
    title: '两次穿过对手，继续向墙推进',
    metric: '2 次换边',
    route: '… → 236C → 5[D]，5B → 6D → 空中段 → 弹地追击 → 214C~C',
    result: '5[D] 与 6D 各完成一次换边，最后以普通倒地收尾。',
    stages: [
      { title: '进入 D 系', event: '双方前方仍有搬运空间', crossed: false, wall: false },
      { title: '5[D] 穿过', event: '第一次换边', crossed: true, wall: false },
      { title: '6D 再穿过', event: '第二次换边，转入空中段', crossed: false, wall: false }
    ]
  },
  {
    id: 'wall',
    label: '抵墙短线',
    title: '抵墙后缩短路线，留在场内侧',
    metric: '0 次换边',
    route: '… → 236C → 5[D]，5B → 214C~C',
    result: '墙约束截断穿越，蓄力 D 后直接接收尾；玩家留在场内侧。',
    stages: [
      { title: '接近墙边', event: '沿用搬运路线的前缀', crossed: false, wall: true },
      { title: '5[D] 抵墙', event: '未穿过对手，不换边', crossed: false, wall: true },
      { title: '直接收尾', event: '5B → 214C~C，普通倒地', crossed: false, wall: true }
    ]
  },
  {
    id: 'corner',
    label: '原版边保位',
    title: '用两轮普通 D 连接，守住原来的墙',
    metric: '倒地墙距 0–12 px',
    route: '… → 236C(1) → 5D，5B → 5C → 236C(1) → 5D，5B → 2C',
    result: '两次普通 5D 均不换边；2C 扫倒收尾，首次实际倒地仍在原墙边。',
    stages: [
      { title: '原版边起手', event: '玩家位于场内侧', crossed: false, wall: true },
      { title: '两轮普通 5D', event: '保持原侧，零换边', crossed: false, wall: true },
      { title: '2C 扫倒', event: '首次倒地保住原墙', crossed: false, wall: true }
    ]
  }
]

const selected = ref('carry')
const current = computed(() => routes.find(route => route.id === selected.value))
</script>

<template>
  <section class="ftg-explorer" aria-label="按墙距查看连段路线">
    <div class="ftg-route-buttons" aria-label="选择场景">
      <button
        v-for="route in routes"
        :key="route.id"
        type="button"
        :aria-pressed="selected === route.id"
        @click="selected = route.id"
      >{{ route.label }}</button>
    </div>
    <div class="ftg-route-content" aria-live="polite" aria-atomic="true">
      <div class="ftg-route-heading">
        <h3>{{ current.title }}</h3>
        <span class="ftg-route-metric">{{ current.metric }}</span>
      </div>
      <ol class="ftg-stages">
        <li v-for="(stage, index) in current.stages" :key="index">
          <p class="ftg-stage-title"><span>{{ index + 1 }}</span>{{ stage.title }}</p>
          <div class="ftg-stage-position" :class="{ 'ftg-crossed': stage.crossed }" aria-hidden="true">
            <span class="ftg-fighter ftg-player">玩家</span>
            <span class="ftg-fighter ftg-dummy">木桩</span>
            <span v-if="stage.wall" class="ftg-wall">墙</span>
          </div>
          <p class="ftg-stage-event">{{ stage.event }}</p>
        </li>
      </ol>
      <p class="ftg-route-notation">{{ current.route }}</p>
      <p class="ftg-route-result">{{ current.result }}</p>
    </div>
    <p class="ftg-route-caption">路线示意 · 非实机画面。图中只表达左右关系；5[D] 表示蓄力 D，5D 表示普通 D。</p>
  </section>
</template>

<style scoped>
.ftg-explorer {
  margin: 28px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 5px;
  overflow: hidden;
}
.ftg-route-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 12px;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}
.ftg-route-buttons button {
  flex: 1 1 125px;
  min-height: 44px;
  padding: 9px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 3px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
  cursor: pointer;
}
.ftg-route-buttons button[aria-pressed='true'] {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  font-weight: 650;
}
.ftg-route-buttons button:hover { border-color: var(--vp-c-brand-1); }
.ftg-route-buttons button:focus-visible { outline-offset: 2px; }
.ftg-route-content { padding: 20px; }
.ftg-route-heading { display: flex; align-items: flex-start; flex-wrap: wrap; gap: 12px; }
.ftg-route-heading h3 { flex: 1 1 240px; margin: 0; font-size: 18px; line-height: 1.65; }
.ftg-route-metric {
  padding: 4px 9px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 3px;
  font-size: 13px;
  line-height: 1.6;
  color: var(--vp-c-brand-1);
  white-space: nowrap;
}
.ftg-stages { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; padding: 0; margin: 20px 0; list-style: none; }
.ftg-stages li { min-width: 0; margin: 0; padding: 12px; background: var(--vp-c-bg-soft); }
.ftg-stage-title { display: flex; align-items: center; gap: 8px; margin: 0; font-size: 13px; font-weight: 600; }
.ftg-stage-title span { color: var(--vp-c-brand-1); }
.ftg-stage-position { display: flex; align-items: flex-end; justify-content: center; gap: 9px; height: 75px; padding: 12px 0; border-bottom: 2px solid var(--vp-c-divider); }
.ftg-fighter { display: flex; align-items: center; justify-content: center; width: 42px; height: 43px; border-radius: 12px 12px 3px 3px; font-size: 12px; font-weight: 600; }
.ftg-player { order: 1; color: var(--vp-c-brand-1); background: var(--vp-c-brand-soft); border: 2px solid var(--vp-c-brand-1); }
.ftg-dummy { order: 2; color: var(--vp-c-text-2); border: 2px solid var(--vp-c-text-2); }
.ftg-crossed .ftg-player { order: 2; }
.ftg-crossed .ftg-dummy { order: 1; }
.ftg-wall { order: 3; display: flex; align-items: center; padding-left: 6px; height: 55px; border-left: 4px solid var(--vp-c-text-2); font-size: 12px; color: var(--vp-c-text-2); }
.ftg-stage-event { margin: 9px 0 0; color: var(--vp-c-text-2); font-size: 12px; line-height: 1.7; }
.ftg-route-notation { margin: 16px 0 10px; padding-left: 12px; border-left: 3px solid var(--vp-c-brand-1); font-family: var(--vp-font-family-mono); font-size: 13px; line-height: 1.9; overflow-wrap: anywhere; }
.ftg-route-result { margin: 10px 0 0; font-size: 14px; line-height: 1.9; }
.ftg-route-caption { margin: 0; padding: 12px 20px; border-top: 1px solid var(--vp-c-divider); font-size: 12px; line-height: 1.8; color: var(--vp-c-text-2); }
@media (max-width: 600px) {
  .ftg-stages { grid-template-columns: 1fr; }
  .ftg-stages li { display: grid; grid-template-columns: minmax(0, 1fr) 120px; column-gap: 10px; align-items: center; }
  .ftg-stage-title { grid-column: 1; }
  .ftg-stage-position { grid-column: 2; grid-row: 1 / 3; }
  .ftg-stage-event { grid-column: 1; }
}
@media (max-width: 360px) {
  .ftg-route-content { padding: 14px; }
  .ftg-stages li { grid-template-columns: minmax(0, 1fr) 108px; padding: 10px; }
  .ftg-stage-position { gap: 6px; }
  .ftg-fighter { width: 35px; font-size: 11px; }
  .ftg-route-caption { padding: 12px 14px; }
}
</style>
