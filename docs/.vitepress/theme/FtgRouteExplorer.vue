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
        v-for="(route, i) in routes"
        :key="route.id"
        type="button"
        :aria-pressed="selected === route.id"
        @click="selected = route.id"
      ><span class="ftg-btn-idx">0{{ i + 1 }}</span>{{ route.label }}</button>
    </div>
    <div class="ftg-route-content" aria-live="polite" aria-atomic="true">
      <div class="ftg-route-heading">
        <h3>{{ current.title }}</h3>
        <span class="ftg-route-metric">{{ current.metric }}</span>
      </div>
      <ol class="ftg-stages">
        <li v-for="(stage, index) in current.stages" :key="index">
          <p class="ftg-stage-title"><span>{{ index + 1 }}.</span>{{ stage.title }}</p>
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
    <p class="ftg-route-caption">图注 · 路线示意（非实机画面）。图中只表达左右位置关系；5[D] 表示蓄力 D，5D 表示普通 D。</p>
  </section>
</template>

<style scoped>
.ftg-explorer {
  margin: 30px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 3px;
  background: var(--ed-surface-elevated, var(--vp-c-bg));
  overflow: hidden;
}
.ftg-route-buttons {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}
.ftg-route-buttons button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 46px;
  padding: 10px 14px;
  border: 0;
  border-right: 1px solid var(--vp-c-divider);
  font-size: 14px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
  background: transparent;
  cursor: pointer;
  transition: color 0.2s ease, background-color 0.2s ease;
}
.ftg-route-buttons button:last-child {
  border-right: 0;
}
.ftg-btn-idx {
  font-family: var(--ed-font-serif, Georgia, serif);
  font-style: italic;
  font-size: 13px;
  opacity: 0.72;
}
.ftg-route-buttons button[aria-pressed='true'] {
  color: var(--vp-c-text-1);
  background: var(--ed-surface-elevated, var(--vp-c-bg));
  font-weight: 600;
}
.ftg-route-buttons button[aria-pressed='true']::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 2px;
  background: var(--vp-c-brand-1);
}
.ftg-route-buttons button[aria-pressed='true'] .ftg-btn-idx {
  color: var(--vp-c-brand-1);
  opacity: 1;
}
.ftg-route-buttons button:hover {
  color: var(--vp-c-text-1);
}
.ftg-route-buttons button:focus-visible { outline-offset: -3px; }
.ftg-route-content { padding: 24px 24px 22px; }
.ftg-route-heading { display: flex; align-items: baseline; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
.ftg-route-heading h3 {
  flex: 1 1 240px;
  margin: 0;
  font-family: var(--ed-font-serif, Georgia, serif);
  font-size: 19px;
  font-weight: 600;
  line-height: 1.55;
}
.ftg-route-metric {
  padding: 2px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 2px;
  background: var(--vp-c-bg-soft);
  font-size: 12.5px;
  line-height: 1.6;
  color: var(--vp-c-brand-1);
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}
.ftg-stages { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; padding: 0; margin: 22px 0; list-style: none; }
.ftg-stages li {
  min-width: 0;
  margin: 0;
  padding: 15px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 2px;
  background: var(--vp-c-bg-soft);
}
.ftg-stage-title { display: flex; align-items: baseline; gap: 6px; margin: 0; font-size: 13.5px; font-weight: 600; color: var(--vp-c-text-1); }
.ftg-stage-title span {
  font-family: var(--ed-font-serif, Georgia, serif);
  font-style: italic;
  color: var(--vp-c-brand-1);
}
.ftg-stage-position {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;
  height: 76px;
  margin-top: 10px;
  padding: 12px 6px 8px;
  border-bottom: 1.5px solid var(--vp-c-border, var(--vp-c-divider));
}
.ftg-fighter {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 44px;
  border-radius: 10px 10px 2px 2px;
  font-size: 12px;
  font-weight: 600;
}
.ftg-player {
  order: 1;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  border: 1.5px solid var(--vp-c-brand-1);
}
.ftg-dummy {
  order: 2;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg);
  border: 1.5px solid var(--vp-c-text-3, var(--vp-c-text-2));
}
.ftg-crossed .ftg-player { order: 2; }
.ftg-crossed .ftg-dummy { order: 1; }
.ftg-wall {
  order: 3;
  display: flex;
  align-items: center;
  padding-left: 7px;
  height: 54px;
  border-left: 3px double var(--vp-c-text-2);
  font-size: 12px;
  color: var(--vp-c-text-2);
}
.ftg-stage-event { margin: 10px 0 0; color: var(--vp-c-text-2); font-size: 12.5px; line-height: 1.7; }
.ftg-route-notation {
  margin: 18px 0 12px;
  padding: 11px 16px;
  border-left: 2px solid var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
  line-height: 1.85;
  color: var(--vp-c-text-1);
  overflow-wrap: anywhere;
}
.ftg-route-result { margin: 10px 0 0; font-size: 14px; line-height: 1.9; color: var(--vp-c-text-1); }
.ftg-route-caption {
  margin: 0;
  padding: 12px 24px;
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  font-size: 12px;
  line-height: 1.8;
  color: var(--vp-c-text-2);
}
@media (max-width: 639px) {
  .ftg-route-buttons { grid-template-columns: 1fr; }
  .ftg-route-buttons button { border-right: 0; border-bottom: 1px solid var(--vp-c-divider); }
  .ftg-route-buttons button:last-child { border-bottom: 0; }
  .ftg-stages { grid-template-columns: 1fr; }
  .ftg-stages li { display: grid; grid-template-columns: minmax(0, 1fr) 124px; column-gap: 12px; align-items: center; }
  .ftg-stage-title { grid-column: 1; }
  .ftg-stage-position { grid-column: 2; grid-row: 1 / 3; margin-top: 0; }
  .ftg-stage-event { grid-column: 1; }
}
@media (max-width: 360px) {
  .ftg-route-content { padding: 16px; }
  .ftg-stages li { grid-template-columns: minmax(0, 1fr) 108px; padding: 10px; }
  .ftg-stage-position { gap: 6px; }
  .ftg-fighter { width: 35px; font-size: 11px; }
  .ftg-route-caption { padding: 12px 16px; }
}
</style>
