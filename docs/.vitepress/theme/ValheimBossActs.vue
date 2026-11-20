<script setup>
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'

const acts = [
  {
    id: 'act1',
    num: 'Ⅰ',
    name: '潜伏',
    hp: '100% → 70%',
    widthPct: 30,
    cardsCount: '5 张牌',
    avgWindow: '1.60 s',
    maxWindow: 'Spit 2.19 s',
    minWindow: 'Call 0.92 s',
    deck: ['Slap', 'PierceAOE（改：不可闪）', 'Call（优先）', 'Spit（改：射程 35m）', 'Teleport（全程在手）'],
    change: '从第一秒即可遁地近身与远程吐酸；反风筝底盘在第一幕就到位。'
  },
  {
    id: 'act2',
    num: 'Ⅱ',
    name: '群猎',
    hp: '70% → 30%',
    widthPct: 40,
    cardsCount: '6 张牌',
    avgWindow: '1.62 s',
    maxWindow: 'Spit 2.19 s',
    minWindow: 'Call 0.92 s',
    deck: ['Ⅰ 幕全部 5 张', '+ Bite（穿刺 140 + 毒 100，收招 1.72 s）'],
    change: '补入面板最高单体 Bite（格挡后仍全额推开 8.0 m），保留长窗口 Spit。'
  },
  {
    id: 'act3',
    num: 'Ⅲ',
    name: '困兽',
    hp: '30% → 0%',
    widthPct: 30,
    cardsCount: '6 张牌（交换）',
    avgWindow: '1.46 s',
    maxWindow: 'Bite 1.72 s',
    minWindow: 'Call 0.92 s',
    deck: ['− Spit 退场（下限 0.30）', '+ Rush 优先牌入场（上限 0.30 · 不可挡 · 冷却 25s · 推力 300）'],
    change: '以交换代替堆叠：最舒服的 2.19 s 吐酸退场，每 25 秒强制冲锋（收招仅 1.22 s）压缩输出空档。'
  }
]

const selectedAct = ref('act3')
const activeAct = computed(() => acts.find(a => a.id === selectedAct.value))
const sec71 = withBase('/valheim-boss/full.html#section-7-1')
const sec45 = withBase('/valheim-boss/full.html#section-4-5')
</script>

<template>
  <section class="viz-card boss-viz" aria-label="蛊虫之后雾中三幕血量门与推力对称保护效应">
    <header class="viz-head">
      <div>
        <p class="viz-kicker">阶段切换 × 空间对称性 · 蛊虫之后「雾中三幕」纯数据改造</p>
        <h3 class="viz-title">血量门三幕切换与推力 250 → 100 对称保护效应</h3>
      </div>
      <span class="viz-pill">平均收招 1.60 → 1.62 → 1.46 s</span>
    </header>

    <!-- Part 1: Three Acts HP Gate -->
    <div class="viz-block">
      <div class="block-label-row">
        <span class="block-tag">01 · 血量门与输出窗口变化</span>
        <span class="block-hint">点击各幕查看手牌与切换判据</span>
      </div>

      <div class="hp-bar" role="tablist" aria-label="选择雾中三幕阶段">
        <button
          v-for="act in acts"
          :key="act.id"
          type="button"
          role="tab"
          :aria-selected="selectedAct === act.id"
          :style="{ flex: act.widthPct + ' 1 0%' }"
          :class="['hp-seg', 'seg-' + act.id]"
          @click="selectedAct = act.id"
        >
          <span class="seg-top"><strong>{{ act.num }} {{ act.name }}</strong><em>{{ act.hp }}</em></span>
          <span class="seg-win">均收招 {{ act.avgWindow }}</span>
        </button>
      </div>

      <div class="hp-markers" aria-hidden="true">
        <span>100%</span>
        <span>70% · +Bite</span>
        <span>30% · −Spit / +Rush(优先)</span>
        <span>0%</span>
      </div>

      <div class="act-grid">
        <div
          v-for="act in acts"
          :key="act.id"
          class="act-mini"
          :class="{ 'is-active': selectedAct === act.id }"
          @click="selectedAct = act.id"
        >
          <div class="act-mini-top">
            <span class="act-mini-name">{{ act.num }} {{ act.name }}</span>
            <span class="act-mini-hp">{{ act.hp }}</span>
          </div>
          <div class="act-mini-val">{{ act.avgWindow }}</div>
          <div class="act-mini-sub">最长 {{ act.maxWindow }} · 最短 {{ act.minWindow }}</div>
        </div>
      </div>

      <div class="act-detail" aria-live="polite" aria-atomic="true">
        <div class="act-detail-head">
          <strong>{{ activeAct.num }} {{ activeAct.name }}（{{ activeAct.hp }} · {{ activeAct.cardsCount }}）</strong>
          <span class="detail-meta">另含招架窗口 0.25 s → 招架踉跄 1.833 s（×2 伤害）</span>
        </div>
        <div class="deck-chips">
          <span v-for="c in activeAct.deck" :key="c" class="deck-chip">{{ c }}</span>
        </div>
        <p class="detail-text">{{ activeAct.change }}</p>
      </div>
    </div>

    <!-- Part 2: Knockback 250 vs 100 Symmetry -->
    <div class="viz-block viz-block-sep">
      <div class="block-label-row">
        <span class="block-tag">02 · 推力 250 vs 100 对称保护效应（普通难度 · 格挡格 · 300 次/格）</span>
        <span class="block-hint">位移 = m_attackForce ÷ 20 m（格挡按 num2 折算）</span>
      </div>

      <div class="kb-compare">
        <div class="kb-card">
          <div class="kb-head">
            <strong>原版推力 250</strong>
            <span class="kb-dist">未挡 12.5 m · 挡后 8.9–9.8 m</span>
          </div>
          <div class="kb-arena" aria-hidden="true">
            <span class="unit unit-boss">BOSS</span>
            <span class="gap-arrow gap-wide"><span>双向空跑逼近 · 喘息保护</span></span>
            <span class="unit unit-player">玩家</span>
          </div>
          <p class="kb-note">玩家被推远的同时，BOSS 也不得不走回来；格挡格死亡率 <strong>34.0%</strong>，窗口率 <strong>63.4%</strong>。</p>
        </div>

        <div class="kb-card kb-card-mod">
          <div class="kb-head">
            <strong>改后推力 100（Slap / PierceAOE）</strong>
            <span class="kb-dist">未挡 5.0 m · 挡后 3.6–3.9 m</span>
          </div>
          <div class="kb-arena" aria-hidden="true">
            <span class="unit unit-boss">BOSS</span>
            <span class="gap-arrow gap-short"><span>贴脸续攻</span></span>
            <span class="unit unit-player">玩家</span>
          </div>
          <p class="kb-note">双方出手密度同时抬高，高伤高血的 BOSS 交换比占优；格挡格死亡率升至 <strong>66.7%</strong>。</p>
        </div>
      </div>

      <div class="metric-bars">
        <div class="m-row">
          <div class="m-label">
            <span>格挡格 · 窗口率</span>
            <strong class="m-num">63.4% → 76.4% <em>(+13.0 pt)</em></strong>
          </div>
          <div class="m-track" aria-hidden="true">
            <div class="m-fill m-before" style="width: 63.4%"></div>
            <div class="m-fill m-after-pos" style="width: 76.4%"></div>
          </div>
        </div>

        <div class="m-row">
          <div class="m-label">
            <span>格挡格 · 死亡率</span>
            <strong class="m-num m-warn">34.0% → 66.7% <em>(+32.7 pt)</em></strong>
          </div>
          <div class="m-track" aria-hidden="true">
            <div class="m-fill m-before" style="width: 34.0%"></div>
            <div class="m-fill m-after-warn" style="width: 66.7%"></div>
          </div>
        </div>

        <div class="m-footnote">
          <span>格挡格造成伤害：<strong>5073 → 3479</strong>；中间档推力 <strong>180</strong> 时死亡率回落至 <strong>42.0%</strong>。</span>
          <span>对照招架格（开招架踉跄）：窗口率 <strong>66.5% → 81.4%</strong>，造成伤害 <strong>6004 → 12494（+108%）</strong>，180s 未打完 <strong>100% → 0.3%</strong>。</span>
        </div>
      </div>
    </div>

    <p class="viz-caption">
      图注 · 机制/模型示意（非实机画面）。血量带（100→70→30→0%）与手牌等权平均收招窗口来自预制体改造字段；推力对比为普通难度每格 300 次同种子蒙特卡洛模拟，仅作相对比较。核对出处：
      <a :href="sec45">§4.5 原版蛊虫之后</a> ·
      <a :href="sec71">§7.1 雾中三幕方案、旋钮与模拟验证</a>。
    </p>
  </section>
</template>

<style scoped>
.boss-viz {
  --accent: var(--ed-case-boss, var(--vp-c-brand-1));
  --warn: var(--ed-case-ragna, #9a484c);
  margin: 28px 0;
  border: 1px solid var(--vp-c-divider);
  border-top: 2px solid var(--accent);
  border-radius: 3px;
  background: var(--ed-surface-elevated, var(--vp-c-bg));
  overflow: hidden;
}
.viz-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px 16px;
  padding: 18px 22px 14px;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}
.viz-kicker {
  margin: 0 0 4px;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-2);
}
.viz-title {
  margin: 0;
  font-family: var(--ed-font-serif, Georgia, serif);
  font-size: 18px;
  font-weight: 600;
  line-height: 1.45;
  color: var(--vp-c-text-1);
}
.viz-pill {
  padding: 2px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 2px;
  background: var(--ed-surface-elevated, var(--vp-c-bg));
  color: var(--accent);
  font-size: 12.5px;
  font-weight: 600;
  line-height: 1.6;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}
.viz-block {
  padding: 18px 22px 20px;
}
.viz-block-sep {
  border-top: 1px solid var(--vp-c-divider);
}
.block-label-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 6px 12px;
  margin-bottom: 12px;
}
.block-tag {
  font-family: var(--ed-font-serif, Georgia, serif);
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}
.block-hint {
  font-size: 12px;
  color: var(--vp-c-text-3, var(--vp-c-text-2));
}
.hp-bar {
  display: flex;
  width: 100%;
  border: 1px solid var(--vp-c-divider);
  border-radius: 2px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
}
.hp-seg {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 3px;
  min-width: 0;
  padding: 10px 12px;
  border: 0;
  border-right: 1px solid var(--vp-c-divider);
  background: transparent;
  color: var(--vp-c-text-2);
  text-align: left;
  cursor: pointer;
  transition: background-color 0.18s ease, color 0.18s ease;
}
.hp-seg:last-child {
  border-right: 0;
}
.seg-act1 { background: color-mix(in srgb, var(--accent) 7%, transparent); }
.seg-act2 { background: color-mix(in srgb, var(--accent) 14%, transparent); }
.seg-act3 { background: color-mix(in srgb, var(--accent) 24%, transparent); }
.hp-seg[aria-selected='true'] {
  color: var(--vp-c-text-1);
  box-shadow: inset 0 -2.5px 0 var(--accent);
}
.seg-top {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 6px;
  font-size: 13px;
  color: var(--vp-c-text-1);
}
.seg-top em {
  font-style: normal;
  font-size: 11.5px;
  color: var(--vp-c-text-2);
  font-variant-numeric: tabular-nums;
}
.seg-win {
  font-size: 11.5px;
  color: var(--accent);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}
.hp-markers {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin: 6px 0 14px;
  font-size: 11.5px;
  color: var(--vp-c-text-3, var(--vp-c-text-2));
  font-variant-numeric: tabular-nums;
}
.act-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-bottom: 12px;
}
.act-mini {
  padding: 11px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 2px;
  background: var(--vp-c-bg-soft);
  cursor: pointer;
  transition: border-color 0.18s ease;
}
.act-mini.is-active {
  border-color: var(--accent);
  background: color-mix(in srgb, var(--accent) 8%, var(--vp-c-bg-soft));
}
.act-mini-top {
  display: flex;
  justify-content: space-between;
  gap: 6px;
  font-size: 12.5px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}
.act-mini-hp {
  font-size: 11.5px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  font-variant-numeric: tabular-nums;
}
.act-mini-val {
  margin-top: 4px;
  font-family: var(--ed-font-serif, Georgia, serif);
  font-size: 20px;
  font-weight: 600;
  color: var(--accent);
  line-height: 1.3;
  font-variant-numeric: tabular-nums;
}
.act-mini-sub {
  margin-top: 3px;
  font-size: 11.5px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}
.act-detail {
  padding: 12px 14px;
  border-left: 2px solid var(--accent);
  background: var(--vp-c-bg-soft);
}
.act-detail-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 6px 12px;
  font-size: 13.5px;
  color: var(--vp-c-text-1);
}
.detail-meta {
  font-size: 12px;
  color: var(--vp-c-text-2);
}
.deck-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 8px 0;
}
.deck-chip {
  padding: 2px 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 2px;
  background: var(--ed-surface-elevated, var(--vp-c-bg));
  font-family: var(--vp-font-family-mono);
  font-size: 11.5px;
  color: var(--vp-c-text-1);
}
.detail-text {
  margin: 0;
  font-size: 13px;
  line-height: 1.75;
  color: var(--vp-c-text-2);
}
.kb-compare {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 16px;
}
.kb-card {
  padding: 13px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 2px;
  background: var(--vp-c-bg-soft);
}
.kb-card-mod {
  border-color: color-mix(in srgb, var(--warn) 55%, var(--vp-c-divider));
}
.kb-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 4px 8px;
  font-size: 13px;
  color: var(--vp-c-text-1);
}
.kb-dist {
  font-family: var(--vp-font-family-mono);
  font-size: 11.5px;
  color: var(--vp-c-text-2);
}
.kb-arena {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 12px 0 10px;
  padding: 10px 8px;
  border-bottom: 1.5px solid var(--vp-c-border, var(--vp-c-divider));
  background: var(--ed-surface-elevated, var(--vp-c-bg));
}
.unit {
  flex-shrink: 0;
  padding: 4px 8px;
  border-radius: 2px;
  font-size: 11.5px;
  font-weight: 600;
}
.unit-boss {
  border: 1.5px solid var(--accent);
  color: var(--accent);
  background: color-mix(in srgb, var(--accent) 12%, transparent);
}
.unit-player {
  border: 1.5px solid var(--vp-c-text-2);
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
}
.gap-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 22px;
  border-top: 1px dashed var(--vp-c-border, var(--vp-c-divider));
  border-bottom: 1px dashed var(--vp-c-border, var(--vp-c-divider));
  font-size: 11px;
  color: var(--vp-c-text-2);
  text-align: center;
}
.gap-wide {
  flex: 1 1 auto;
}
.gap-short {
  flex: 0 0 88px;
  border-color: var(--warn);
  color: var(--warn);
  font-weight: 600;
}
.kb-note {
  margin: 0;
  font-size: 12.5px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}
.kb-note strong {
  color: var(--vp-c-text-1);
}
.metric-bars {
  display: grid;
  gap: 12px;
  padding: 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 2px;
  background: var(--vp-c-bg-soft);
}
.m-label {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 4px 10px;
  font-size: 13px;
  color: var(--vp-c-text-1);
  margin-bottom: 6px;
}
.m-num {
  font-variant-numeric: tabular-nums;
}
.m-num em {
  font-style: normal;
  font-size: 12px;
  color: var(--vp-c-text-2);
}
.m-warn,
.m-warn em {
  color: var(--warn);
}
.m-track {
  position: relative;
  height: 14px;
  border-radius: 2px;
  background: var(--ed-surface-elevated, var(--vp-c-bg));
  border: 1px solid var(--vp-c-divider);
  overflow: hidden;
}
.m-fill {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
}
.m-after-pos {
  background: color-mix(in srgb, var(--accent) 45%, transparent);
  border-right: 2px solid var(--accent);
}
.m-after-warn {
  background: color-mix(in srgb, var(--warn) 45%, transparent);
  border-right: 2px solid var(--warn);
}
.m-before {
  z-index: 2;
  background: color-mix(in srgb, var(--vp-c-text-2) 32%, transparent);
  border-right: 2px solid var(--vp-c-text-1);
}
.m-footnote {
  display: grid;
  gap: 4px;
  padding-top: 8px;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 12px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}
.m-footnote strong {
  color: var(--vp-c-text-1);
}
.viz-caption {
  margin: 0;
  padding: 12px 22px;
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  font-size: 12px;
  line-height: 1.8;
  color: var(--vp-c-text-2);
}
.viz-caption a {
  color: var(--accent);
}
@media (max-width: 639px) {
  .viz-head,
  .viz-block,
  .viz-caption {
    padding-left: 14px;
    padding-right: 14px;
  }
  .hp-bar {
    flex-direction: column;
  }
  .hp-seg {
    flex: none !important;
    border-right: 0;
    border-bottom: 1px solid var(--vp-c-divider);
  }
  .hp-seg:last-child {
    border-bottom: 0;
  }
  .hp-markers {
    flex-wrap: wrap;
    row-gap: 2px;
  }
  .act-grid,
  .kb-compare {
    grid-template-columns: 1fr;
  }
}
</style>
