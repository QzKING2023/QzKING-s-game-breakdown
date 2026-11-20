<script setup>
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'

const phases = [
  { frames: '1–7F', label: '发生', reach: '—', kind: 'startup' },
  { frames: '8–9F', label: '第一套判定', reach: '294 px', kind: 'active-1' },
  { frames: '10–12F', label: '第二套（峰值）', reach: '399 px', kind: 'active-2' },
  { frames: '13–15F', label: '第三套判定', reach: '395 px', kind: 'active-3' },
  { frames: '16–31F', label: '收招（16F）', reach: '—', kind: 'recovery' }
]

const branches = [
  {
    id: 'nocancel',
    label: '不取消收招',
    badge: '−7 ～ 0F',
    title: '负帧只描述不取消的结局，且取决于接触时点',
    summary: '5B 总 31 帧、防御硬直 B = 16 帧。第 8F 最早被防时剩余收招 23F（16 − 23 = −7F）；第 15F 最晚被防时剩余收招 16F（16 − 16 = 0F，五五开）。',
    tracks: [
      {
        name: '最早第 8F 被防（剩余收招 23F）',
        tag: '−7F',
        tagTone: 'warn',
        attPct: 76.7,
        attLabel: '攻方剩余收招 23F',
        defPct: 53.3,
        defLabel: '守方防硬 16F',
        gapStartPct: 53.3,
        gapWidthPct: 23.4,
        gapLabel: '守方先动 7F'
      },
      {
        name: '最晚第 15F 被防（剩余收招 16F）',
        tag: '0F',
        tagTone: 'neutral',
        attPct: 53.3,
        attLabel: '攻方剩余收招 16F',
        defPct: 53.3,
        defLabel: '守方防硬 16F',
        gapStartPct: 53.3,
        gapWidthPct: 0,
        gapLabel: '同时恢复'
      }
    ],
    rows: [
      { route: '5B 最早被防（8F）', b: '16F', s: '不取消', g: '—', m: '−7F（需核对对手 7F 内技距离）' },
      { route: '5B 最晚被防（15F）', b: '16F', s: '不取消', g: '—', m: '0F（双方同时恢复）' }
    ]
  },
  {
    id: 'trueblock',
    label: '取消连防',
    badge: 'G ≤ 0',
    title: '最快取消跳过收招，后续在 16F 防硬结束前命中',
    summary: '按 §3.2 局部时间模型（B = 16F，对手普通技 F = 5F）：空隙 G = S − B ≤ 0 为连防，防守方无法在衔接中按出普通技。',
    tracks: [
      {
        name: '5B > 2C（后续发生 S = 12F）',
        tag: 'G = −4F',
        tagTone: 'good',
        attPct: 40.0,
        attLabel: '2C 发生 12F',
        defPct: 53.3,
        defLabel: '5B 防硬 16F（覆盖至 16F）',
        gapStartPct: 40.0,
        gapWidthPct: 13.3,
        gapLabel: '连防重叠 4F'
      },
      {
        name: '5B > 214A（后续发生 S = 15F）',
        tag: 'G = −1F',
        tagTone: 'good',
        attPct: 50.0,
        attLabel: '214A 发生 15F',
        defPct: 53.3,
        defLabel: '5B 防硬 16F',
        gapStartPct: 50.0,
        gapWidthPct: 3.3,
        gapLabel: '连防 1F'
      }
    ],
    rows: [
      { route: '5B > 2C', b: '16F', s: '12F', g: '−4F', m: '+9F（连防）' },
      { route: '5B > 5C', b: '16F', s: '13F', g: '−3F', m: '+8F（连防）' },
      { route: '5B > 214A', b: '16F', s: '15F', g: '−1F', m: '+6F（连防）' }
    ]
  },
  {
    id: 'frametrap',
    label: '留缝压制',
    badge: 'G > 0',
    title: '留出短缝诱导抢招，或换取慢速中段 / 特殊属性',
    summary: 'G > 0 时对手可开始动作；对 5F 普通技余量 M = B + 5 − S。M > 0 攻方先出判定，M = 0 同时生效，M < 0 守方时间上先出。',
    tracks: [
      {
        name: '5B > 214B（S = 20F，站姿最早）',
        tag: 'G = +4F · M = +1F',
        tagTone: 'accent',
        attPct: 66.7,
        attLabel: '214B 发生 20F',
        defPct: 53.3,
        defLabel: '防硬 16F',
        defActPct: 16.7,
        gapStartPct: 53.3,
        gapWidthPct: 13.4,
        gapLabel: '4F 缝（先于 5F 抢招）'
      },
      {
        name: '5B > 6D（S = 21F，4–20F 脚无敌）',
        tag: 'G = +5F · M = 0F',
        tagTone: 'neutral',
        attPct: 70.0,
        attLabel: '6D 发生 21F',
        defPct: 53.3,
        defLabel: '防硬 16F',
        defActPct: 16.7,
        gapStartPct: 53.3,
        gapWidthPct: 16.7,
        gapLabel: '5F 缝（与 5F 同帧）'
      },
      {
        name: '5B > 6B（中段，S = 24F）',
        tag: 'G = +8F · M = −3F',
        tagTone: 'warn',
        attPct: 80.0,
        attLabel: '6B 发生 24F',
        defPct: 53.3,
        defLabel: '防硬 16F',
        defActPct: 16.7,
        gapStartPct: 53.3,
        gapWidthPct: 26.7,
        gapLabel: '8F 缝（守方 5F 早 3F）'
      }
    ],
    rows: [
      { route: '5B > 214B（最早 / 对蹲拉格纳）', b: '16F', s: '20F / 24F', g: '+4F / +8F', m: '+1F / −3F' },
      { route: '5B > 6D', b: '16F', s: '21F', g: '+5F', m: '0F（同帧，看脚无敌与碰撞）' },
      { route: '5B > 6B', b: '16F', s: '24F', g: '+8F', m: '−3F（慢中段需前置压制铺垫）' }
    ]
  },
  {
    id: 'ib',
    label: 'IB 后空隙扩大',
    badge: 'G +3F · M −3F',
    title: '瞬间防御（IB）把地面防硬减 3 帧，改写短缝与同帧博弈',
    summary: 'IB 使 B 减少 3F（16F → 13F）且保留更近距离：空隙 G 增大 3F，对 5F 普通技的余量 M 减少 3F，原连防或同帧分支随之松动。',
    tracks: [
      {
        name: '5B(IB) > 214A（S = 15F）',
        tag: 'G: −1 → +2F',
        tagTone: 'accent',
        attPct: 50.0,
        attLabel: '214A 发生 15F',
        defPct: 43.3,
        ibCutPct: 10.0,
        defLabel: 'IB 防硬 13F',
        defActPct: 16.7,
        gapStartPct: 43.3,
        gapWidthPct: 6.7,
        gapLabel: '连防拆出 2F 缝'
      },
      {
        name: '5B(IB) > 6D（S = 21F）',
        tag: 'M: 0 → −3F',
        tagTone: 'warn',
        attPct: 70.0,
        attLabel: '6D 发生 21F',
        defPct: 43.3,
        ibCutPct: 10.0,
        defLabel: 'IB 防硬 13F',
        defActPct: 16.7,
        gapStartPct: 43.3,
        gapWidthPct: 26.7,
        gapLabel: '8F 缝（守方早 3F）'
      }
    ],
    rows: [
      { route: '5B(IB) > 214A', b: '13F (−3)', s: '15F', g: '+2F (原 −1)', m: '+3F (原 +6)' },
      { route: '5B(IB) > 214B（最早）', b: '13F (−3)', s: '20F', g: '+7F (原 +4)', m: '−2F (原 +1)' },
      { route: '5B(IB) > 6D', b: '13F (−3)', s: '21F', g: '+8F (原 +5)', m: '−3F (原 0)' },
      { route: '2A(IB) > 214A（另例）', b: '8F (−3)', s: '15F', g: '+7F (原 +4)', m: '−2F (原 +1)' }
    ]
  }
]

const selected = ref('nocancel')
const current = computed(() => branches.find(b => b.id === selected.value))
const sec21 = withBase('/bbcf-ragna/full.html#section-2-1')
const sec31 = withBase('/bbcf-ragna/full.html#section-3-1')
const sec32 = withBase('/bbcf-ragna/full.html#section-3-2')
const sec34 = withBase('/bbcf-ragna/full.html#section-3-4')
</script>

<template>
  <section class="viz-card ragna-viz" aria-label="拉格纳 5B 判定伸展时间轴与被防分支对比">
    <header class="viz-head">
      <div>
        <p class="viz-kicker">空间 × 帧时间轴 · 5B（发生 8 / 持续 8 / 收招 16 · 共 31 帧）</p>
        <h3 class="viz-title">5B 第 1–31 帧判定前伸与被防窗口切换</h3>
      </div>
      <span class="viz-pill">峰值前伸 399 px</span>
    </header>

    <div class="viz-section">
      <div class="svg-frame" role="img" aria-label="5B 第 1 至 31 帧时间轴与判定前伸示意：1 至 7 帧发生，8 至 9 帧 294 像素，10 至 12 帧 399 像素，13 至 15 帧 395 像素，16 至 31 帧收招。">
        <svg viewBox="0 0 620 172" xmlns="http://www.w3.org/2000/svg" class="reach-svg">
          <!-- Horizontal gridlines -->
          <line x1="46" y1="24" x2="604" y2="24" class="grid-line" stroke-dasharray="3 3" />
          <line x1="46" y1="68" x2="604" y2="68" class="grid-line" stroke-dasharray="3 3" />
          <line x1="46" y1="112" x2="604" y2="112" class="axis-line" />

          <!-- Y-axis reach ticks -->
          <text x="40" y="28" text-anchor="end" class="svg-tick">400px</text>
          <text x="40" y="72" text-anchor="end" class="svg-tick">200px</text>
          <text x="40" y="115" text-anchor="end" class="svg-tick">0</text>

          <!-- Frame segments along X (46..604 => 558px / 31F = 18px per frame) -->
          <!-- 1-7F Startup: x=46..172 (w=126) -->
          <rect x="46" y="96" width="126" height="16" class="bar-startup" />
          <text x="109" y="88" text-anchor="middle" class="svg-muted">1–7F 发生</text>

          <!-- 8-9F Active 1 (294px => h = 294/400 * 88 = 64.7 => y = 47.3) -->
          <rect x="172" y="47.3" width="36" height="64.7" class="bar-active-1" />
          <text x="190" y="40" text-anchor="middle" class="svg-val">294</text>

          <!-- 10-12F Active 2 (399px => h = 399/400 * 88 = 87.8 => y = 24.2) -->
          <rect x="208" y="24.2" width="54" height="87.8" class="bar-active-2" />
          <text x="235" y="17" text-anchor="middle" class="svg-val-peak">399px</text>

          <!-- 13-15F Active 3 (395px => h = 395/400 * 88 = 86.9 => y = 25.1) -->
          <rect x="262" y="25.1" width="54" height="86.9" class="bar-active-3" />
          <text x="289" y="17" text-anchor="middle" class="svg-val">395</text>

          <!-- 16-31F Recovery: x=316..604 (w=288) -->
          <rect x="316" y="96" width="288" height="16" class="bar-recovery" />
          <text x="460" y="88" text-anchor="middle" class="svg-muted">16–31F 收招（16 帧 · 无攻击判定）</text>

          <!-- Key frame ticks row (y=128) -->
          <text x="46" y="128" text-anchor="start" class="svg-tick">1F</text>
          <text x="172" y="128" text-anchor="middle" class="svg-tick">8F</text>
          <text x="208" y="128" text-anchor="middle" class="svg-tick">10F</text>
          <text x="262" y="128" text-anchor="middle" class="svg-tick">13F</text>
          <text x="316" y="128" text-anchor="middle" class="svg-tick">16F</text>
          <text x="604" y="128" text-anchor="end" class="svg-tick">31F</text>

          <!-- Active bracket marker row (y=142 / text y=162) -->
          <line x1="172" y1="142" x2="316" y2="142" class="bracket-line" />
          <line x1="172" y1="137" x2="172" y2="147" class="bracket-line" />
          <line x1="316" y1="137" x2="316" y2="147" class="bracket-line" />
          <text x="244" y="162" text-anchor="middle" class="svg-accent">持续 8 帧（8–15F · 拦截 / 预置窗口）</text>
        </svg>
      </div>

      <ul class="phase-strip" aria-label="5B 逐段判定一览">
        <li v-for="p in phases" :key="p.frames" :class="'phase-' + p.kind">
          <span class="phase-f">{{ p.frames }}</span>
          <span class="phase-l">{{ p.label }}</span>
          <strong class="phase-r">{{ p.reach }}</strong>
        </li>
      </ul>
    </div>

    <div class="viz-tabs" role="tablist" aria-label="选择 5B 被防后的分支">
      <button
        v-for="(b, idx) in branches"
        :key="b.id"
        type="button"
        role="tab"
        :aria-selected="selected === b.id"
        @click="selected = b.id"
      >
        <span class="tab-num">0{{ idx + 1 }}</span>
        <span class="tab-label">{{ b.label }}</span>
      </button>
    </div>

    <div class="viz-body" aria-live="polite" aria-atomic="true">
      <div class="branch-head">
        <h4>{{ current.title }}</h4>
        <span class="viz-pill">{{ current.badge }}</span>
      </div>
      <p class="branch-summary">{{ current.summary }}</p>

      <div class="track-list">
        <div v-for="t in current.tracks" :key="t.name" class="track-card">
          <div class="track-meta">
            <span class="track-name">{{ t.name }}</span>
            <span class="track-tag" :class="'tone-' + t.tagTone">{{ t.tag }}</span>
          </div>
          <div class="track-bars" aria-hidden="true">
            <div class="bar-row">
              <span class="row-role">攻方</span>
              <div class="bar-rail">
                <div class="seg seg-att" :style="{ width: t.attPct + '%' }">{{ t.attLabel }}</div>
              </div>
            </div>
            <div class="bar-row">
              <span class="row-role">守方</span>
              <div class="bar-rail">
                <div class="seg seg-def" :style="{ width: t.defPct + '%' }">{{ t.defLabel }}</div>
                <div v-if="t.ibCutPct" class="seg seg-ib" :style="{ width: t.ibCutPct + '%' }">IB−3F</div>
                <div v-if="t.defActPct" class="seg seg-jab" :style="{ width: t.defActPct + '%' }">5F抢</div>
              </div>
            </div>
            <div v-if="t.gapWidthPct > 0" class="gap-note">
              <span>窗口关系：</span><strong>{{ t.gapLabel }}</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="compact-rows">
        <div class="compact-row compact-head">
          <span>分支</span>
          <span>防硬 B</span>
          <span>后续 S</span>
          <span>空隙 G</span>
          <span>余量 / 判定</span>
        </div>
        <div v-for="r in current.rows" :key="r.route" class="compact-row">
          <span class="mono-cell">{{ r.route }}</span>
          <span class="num-cell">{{ r.b }}</span>
          <span class="num-cell">{{ r.s }}</span>
          <span class="num-cell">{{ r.g }}</span>
          <span>{{ r.m }}</span>
        </div>
      </div>
    </div>

    <p class="viz-caption">
      图注 · 机制/模型示意（非实机画面）。上轨 5B 伸展来自逐帧碰撞文件，下轨基于 §3.2 局部时间模型（默认对手 5F 普通技，忽略顿帧差与延迟取消）。核对出处：
      <a :href="sec21">§2.1 5B 判定与时间轴</a> ·
      <a :href="sec31">§3.1 负帧分支</a> ·
      <a :href="sec32">§3.2 连防与留缝</a> ·
      <a :href="sec34">§3.4 对手拆解（IB）</a>。
    </p>
  </section>
</template>

<style scoped>
.ragna-viz {
  --accent: var(--ed-case-ragna, var(--vp-c-brand-1));
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
.viz-section {
  padding: 18px 22px 16px;
}
.svg-frame {
  width: 100%;
  overflow: hidden;
}
.reach-svg {
  width: 100%;
  height: auto;
  display: block;
}
.grid-line {
  stroke: var(--vp-c-divider);
  stroke-width: 1;
}
.axis-line {
  stroke: var(--vp-c-border, var(--vp-c-divider));
  stroke-width: 1.5;
}
.bar-startup {
  fill: var(--vp-c-bg-soft);
  stroke: var(--vp-c-border, var(--vp-c-divider));
  stroke-width: 1;
}
.bar-active-1 {
  fill: var(--accent);
  fill-opacity: 0.45;
  stroke: var(--accent);
  stroke-width: 1;
}
.bar-active-2 {
  fill: var(--accent);
  fill-opacity: 0.88;
  stroke: var(--accent);
  stroke-width: 1;
}
.bar-active-3 {
  fill: var(--accent);
  fill-opacity: 0.68;
  stroke: var(--accent);
  stroke-width: 1;
}
.bar-recovery {
  fill: var(--vp-c-bg-soft);
  stroke: var(--vp-c-divider);
  stroke-width: 1;
}
.bracket-line {
  stroke: var(--accent);
  stroke-width: 1.25;
}
.svg-tick {
  font-size: 11px;
  fill: var(--vp-c-text-3, var(--vp-c-text-2));
  font-variant-numeric: tabular-nums;
}
.svg-muted {
  font-size: 11.5px;
  fill: var(--vp-c-text-2);
}
.svg-val {
  font-size: 11.5px;
  font-weight: 600;
  fill: var(--vp-c-text-1);
  font-variant-numeric: tabular-nums;
}
.svg-val-peak {
  font-size: 12px;
  font-weight: 700;
  fill: var(--accent);
  font-variant-numeric: tabular-nums;
}
.svg-accent {
  font-size: 11.5px;
  font-weight: 600;
  fill: var(--accent);
}
.phase-strip {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 8px;
  margin: 12px 0 0;
  padding: 0;
  list-style: none;
}
.phase-strip li {
  margin: 0;
  padding: 8px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 2px;
  background: var(--vp-c-bg-soft);
  display: flex;
  flex-direction: column;
  gap: 2px;
  line-height: 1.45;
}
.phase-strip li.phase-active-2 {
  border-color: var(--accent);
}
.phase-f {
  font-family: var(--vp-font-family-mono);
  font-size: 11.5px;
  color: var(--vp-c-text-2);
}
.phase-l {
  font-size: 12px;
  color: var(--vp-c-text-1);
}
.phase-r {
  font-size: 12.5px;
  color: var(--accent);
  font-variant-numeric: tabular-nums;
}
.viz-tabs {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border-top: 1px solid var(--vp-c-divider);
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}
.viz-tabs button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-height: 44px;
  padding: 9px 10px;
  border: 0;
  border-right: 1px solid var(--vp-c-divider);
  background: transparent;
  color: var(--vp-c-text-2);
  font-size: 13px;
  line-height: 1.4;
  cursor: pointer;
  transition: color 0.18s ease, background-color 0.18s ease;
}
.viz-tabs button:last-child {
  border-right: 0;
}
.tab-num {
  font-family: var(--ed-font-serif, Georgia, serif);
  font-style: italic;
  font-size: 12.5px;
  opacity: 0.72;
}
.viz-tabs button[aria-selected='true'] {
  color: var(--vp-c-text-1);
  background: var(--ed-surface-elevated, var(--vp-c-bg));
  font-weight: 600;
}
.viz-tabs button[aria-selected='true']::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 2px;
  background: var(--accent);
}
.viz-tabs button[aria-selected='true'] .tab-num {
  color: var(--accent);
  opacity: 1;
}
.viz-tabs button:hover {
  color: var(--vp-c-text-1);
}
.viz-body {
  padding: 20px 22px 18px;
}
.branch-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px 12px;
}
.branch-head h4 {
  margin: 0;
  font-family: var(--ed-font-serif, Georgia, serif);
  font-size: 16.5px;
  font-weight: 600;
  line-height: 1.5;
  color: var(--vp-c-text-1);
}
.branch-summary {
  margin: 8px 0 16px;
  font-size: 13.5px;
  line-height: 1.8;
  color: var(--vp-c-text-2);
}
.track-list {
  display: grid;
  gap: 12px;
  margin-bottom: 16px;
}
.track-card {
  padding: 12px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 2px;
  background: var(--vp-c-bg-soft);
}
.track-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 6px 10px;
  margin-bottom: 10px;
}
.track-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}
.track-tag {
  padding: 1px 8px;
  border-radius: 2px;
  font-family: var(--vp-font-family-mono);
  font-size: 11.5px;
  font-weight: 600;
  border: 1px solid var(--vp-c-divider);
  background: var(--ed-surface-elevated, var(--vp-c-bg));
  color: var(--vp-c-text-1);
}
.tone-warn,
.tone-accent {
  border-color: var(--accent);
  color: var(--accent);
}
.tone-good {
  border-color: var(--ed-case-silent, var(--vp-c-brand-1));
  color: var(--ed-case-silent, var(--vp-c-brand-1));
}
.track-bars {
  display: grid;
  gap: 6px;
}
.bar-row {
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  align-items: center;
  gap: 8px;
}
.row-role {
  font-size: 11.5px;
  color: var(--vp-c-text-2);
}
.bar-rail {
  display: flex;
  align-items: stretch;
  min-height: 24px;
  background: var(--ed-surface-elevated, var(--vp-c-bg));
  border: 1px solid var(--vp-c-divider);
  border-radius: 2px;
  overflow: hidden;
}
.seg {
  display: inline-flex;
  align-items: center;
  padding: 0 7px;
  font-size: 11px;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-variant-numeric: tabular-nums;
}
.seg-att {
  background: color-mix(in srgb, var(--accent) 22%, transparent);
  border-right: 2px solid var(--accent);
  color: var(--vp-c-text-1);
  font-weight: 500;
}
.seg-def {
  background: color-mix(in srgb, var(--vp-c-text-2) 16%, transparent);
  border-right: 1.5px solid var(--vp-c-text-2);
  color: var(--vp-c-text-1);
}
.seg-ib {
  background: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 3px,
    color-mix(in srgb, var(--accent) 26%, transparent) 3px,
    color-mix(in srgb, var(--accent) 26%, transparent) 6px
  );
  border-right: 1px dashed var(--accent);
  color: var(--accent);
  font-weight: 600;
  padding: 0 4px;
}
.seg-jab {
  background: color-mix(in srgb, var(--vp-c-brand-1) 24%, transparent);
  border-right: 1.5px solid var(--vp-c-brand-1);
  color: var(--vp-c-text-1);
  font-weight: 600;
  padding: 0 5px;
}
.gap-note {
  margin-top: 2px;
  padding-left: 42px;
  font-size: 12px;
  color: var(--vp-c-text-2);
}
.gap-note strong {
  color: var(--vp-c-text-1);
}
.compact-rows {
  border: 1px solid var(--vp-c-divider);
  border-radius: 2px;
  overflow: hidden;
  font-size: 12.5px;
}
.compact-row {
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) 64px 72px 72px minmax(0, 1.75fr);
  gap: 8px;
  padding: 8px 12px;
  border-top: 1px solid var(--vp-c-divider);
  align-items: baseline;
  line-height: 1.55;
  color: var(--vp-c-text-1);
}
.compact-head {
  border-top: 0;
  background: var(--ed-table-header, var(--vp-c-bg-soft));
  font-size: 12px;
  font-weight: 600;
  color: var(--vp-c-text-2);
}
.mono-cell {
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
}
.num-cell {
  font-variant-numeric: tabular-nums;
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
  .viz-section,
  .viz-body,
  .viz-caption {
    padding-left: 14px;
    padding-right: 14px;
  }
  .phase-strip {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .phase-strip li:last-child {
    grid-column: 1 / -1;
  }
  .viz-tabs {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .viz-tabs button:nth-child(2n) {
    border-right: 0;
  }
  .viz-tabs button:nth-child(-n+2) {
    border-bottom: 1px solid var(--vp-c-divider);
  }
  .compact-head {
    display: none;
  }
  .compact-row {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 4px 10px;
  }
  .compact-row > span:first-child,
  .compact-row > span:last-child {
    grid-column: 1 / -1;
  }
  .compact-row > span:first-child {
    font-weight: 600;
  }
  .compact-row > span:nth-child(2)::before {
    content: '防硬 B ';
    color: var(--vp-c-text-2);
  }
  .compact-row > span:nth-child(3)::before {
    content: '后续 S ';
    color: var(--vp-c-text-2);
  }
  .compact-row > span:nth-child(4)::before {
    content: '空隙 G ';
    color: var(--vp-c-text-2);
  }
  .gap-note {
    padding-left: 0;
  }
}
</style>
