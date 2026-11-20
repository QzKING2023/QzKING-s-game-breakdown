<script setup>
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'

const stages = [
  {
    id: 'acquire',
    num: '01',
    name: '取得',
    subtitle: '运转组件供给收紧',
    widthPct: 100,
    headline: '杂技 白 → 蓝：20 组奖励一次未出现率 16.4% → 53.1%',
    metrics: [
      { label: '20 组普通奖励未出现', val: '16.4% → 53.1%' },
      { label: '25 组普通奖励未出现', val: '10.5% → 45.3%' }
    ],
    detail: '杂技抽弃牌效未动，但稀有度位置改变（A7+ 连续普通战奖励模型，不含精英/商店/事件）。作为共享运转接口，奇巧、收场、小刀与毒防的组装过程同时承压。',
    section: '3-1',
    sectionLabel: '§3.1 杂技升蓝'
  },
  {
    id: 'start',
    num: '02',
    name: '启动',
    subtitle: '精简涨价 × 同手配对约束',
    widthPct: 80,
    headline: 'A6+ 五删 625 → 1000 金；战术配弃牌口同手概率 16.7% / 43.7% / 63.5%',
    metrics: [
      { label: '商店五删累计（A6 起）', val: '625 → 1000 金' },
      { label: '战术同手见 1/3/5 弃牌口', val: '16.7% / 43.7% / 63.5%' }
    ],
    detail: '二代 A6 起商店删牌由 75+25/次涨至 100+50/次（三删 300→450、五删 625→1000）；25 张牌均匀抽 5 且战术已在手时，仍高度依赖弃牌口密度。永久删牌与抽弃筛选同时变贵，过渡牌更难剥离。',
    section: '3-4',
    sectionLabel: '§3.2 / §3.4 配对与精简'
  },
  {
    id: 'payoff',
    num: '03',
    name: '兑现',
    subtitle: '扣除副作用后的有效加费与持续接口',
    widthPct: 62,
    headline: '能量需扣副作用净值；持续毒防减少逐回合重复组装',
    metrics: [
      { label: '血染玫瑰 T 回合付 m 次执迷', val: '净能 T − 2m' },
      { label: '单张基础毒雾至第 5 敌方回合', val: '累计 14 伤' }
    ],
    detail: '二代瓦库首栏名义加费 2/3（一代首 BOSS 遗物三选一模型 81.43%），但须扣除执迷付费或低语耳环首回合自动出牌的次序代价。部署后持续生效的毒雾、灵动减少每回合重复组织输出的压力，但单张毒雾仍有杀速下限。',
    section: '3-3',
    sectionLabel: '§3.3 / §6.2 能量与持续收益'
  },
  {
    id: 'endgame',
    num: '04',
    name: '终局干扰',
    subtitle: '三重 BOSS 规则并行筛选',
    widthPct: 46,
    headline: '女王魂缚 · 实验体技能激怒 · 永世沙漏每 6 牌加凋萎',
    metrics: [
      { label: '女王 · 魂缚', val: '每回合前 3 抽仅可打 1（已抽被锁 60%）' },
      { label: '实验体 · 技能激怒', val: '一阶每技能 +2 力量（A9 起 +3）' },
      { label: '永世沙漏 · 污染计数', val: '跨回合每 6 牌向手加 1 张凋萎' }
    ],
    detail: '女王锁单回合抽牌名额（两张同抽同锁 30%，奇巧自动打出同样受限）；实验体一阶惩罚技能而非能力牌，转阶段清毒但保留已部署能力；沙漏跨回合计数且每 3 回合同步强化自身力量与凋萎伤害，自动施毒不增加出牌数但仍需足够杀速。',
    section: '4-2',
    sectionLabel: '§4.2–4.4 终局 BOSS 筛选'
  }
]

const selected = ref('endgame')
const active = computed(() => stages.find(s => s.id === selected.value))
const link = (sec) => withBase('/sts-silent/full.html#section-' + sec)
</script>

<template>
  <section class="viz-card silent-viz" aria-label="静默猎手构筑运转四阶段漏斗图">
    <header class="viz-head">
      <div>
        <p class="viz-kicker">构筑运转漏斗 · 取得 → 启动 → 兑现 → 终局干扰</p>
        <h3 class="viz-title">二代静默猎手四阶段关键约束落点与核对数据</h3>
      </div>
      <span class="viz-pill">四层约束叠加示意</span>
    </header>

    <div class="funnel-body">
      <div class="funnel-list" role="tablist" aria-label="选择漏斗阶段查看说明">
        <button
          v-for="st in stages"
          :key="st.id"
          type="button"
          role="tab"
          :aria-selected="selected === st.id"
          class="funnel-row"
          @click="selected = st.id"
        >
          <div class="funnel-bar-col">
            <div class="funnel-track">
              <div class="funnel-fill" :style="{ width: st.widthPct + '%' }">
                <span class="st-num">{{ st.num }}</span>
                <strong class="st-name">{{ st.name }}</strong>
              </div>
            </div>
            <span class="st-sub">{{ st.subtitle }}</span>
          </div>

          <div class="funnel-data-col">
            <p class="st-headline">{{ st.headline }}</p>
            <div class="st-chips">
              <span v-for="m in st.metrics" :key="m.label" class="st-chip">
                <em>{{ m.label }}</em>
                <strong>{{ m.val }}</strong>
              </span>
            </div>
          </div>
        </button>
      </div>

      <div class="stage-detail" aria-live="polite" aria-atomic="true">
        <div class="stage-detail-top">
          <strong>阶段 {{ active.num }} · {{ active.name }}（{{ active.subtitle }}）</strong>
          <a class="detail-link" :href="link(active.section)">核对 {{ active.sectionLabel }} →</a>
        </div>
        <p class="stage-detail-text">{{ active.detail }}</p>
      </div>
    </div>

    <p class="viz-caption">
      图注 · 机制/模型示意（非实机画面）。漏斗条宽度仅示意逐层约束叠加，不代表真实对局流派淘汰比例；数值均为正文受控模型值（A7+ 普通奖励、25 张均匀抽 5、A6+ 无折扣商店）。核对出处：
      <a :href="link('3-1')">§3.1 杂技升蓝</a> ·
      <a :href="link('3-2')">§3.2 配对概率</a> ·
      <a :href="link('3-4')">§3.4 精简涨价</a> ·
      <a :href="link('4-2')">§4.2–4.4 终局筛选</a>。
    </p>
  </section>
</template>

<style scoped>
.silent-viz {
  --accent: var(--ed-case-silent, var(--vp-c-brand-1));
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
}
.funnel-body {
  padding: 18px 22px 20px;
}
.funnel-list {
  display: grid;
  gap: 10px;
}
.funnel-row {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.58fr);
  gap: 12px 16px;
  align-items: center;
  width: 100%;
  padding: 12px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 2px;
  background: var(--vp-c-bg-soft);
  text-align: left;
  cursor: pointer;
  transition: border-color 0.18s ease, background-color 0.18s ease;
}
.funnel-row:hover {
  border-color: var(--vp-c-border, var(--vp-c-divider));
}
.funnel-row[aria-selected='true'] {
  border-color: var(--accent);
  background: color-mix(in srgb, var(--accent) 8%, var(--vp-c-bg-soft));
}
.funnel-bar-col {
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
}
.funnel-track {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2px;
  background: var(--ed-surface-elevated, var(--vp-c-bg));
  border: 1px solid var(--vp-c-divider);
  border-radius: 2px;
}
.funnel-fill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-height: 30px;
  padding: 3px 8px;
  border-radius: 1px;
  background: color-mix(in srgb, var(--accent) 24%, transparent);
  border: 1px solid color-mix(in srgb, var(--accent) 65%, transparent);
  color: var(--vp-c-text-1);
  white-space: nowrap;
}
.funnel-row[aria-selected='true'] .funnel-fill {
  background: color-mix(in srgb, var(--accent) 34%, transparent);
  border-color: var(--accent);
}
.st-num {
  font-family: var(--ed-font-serif, Georgia, serif);
  font-style: italic;
  font-size: 12.5px;
  color: var(--accent);
}
.st-name {
  font-size: 13px;
  font-weight: 600;
}
.st-sub {
  font-size: 11.5px;
  color: var(--vp-c-text-2);
  text-align: center;
  line-height: 1.45;
}
.funnel-data-col {
  min-width: 0;
}
.st-headline {
  margin: 0 0 7px;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.5;
  color: var(--vp-c-text-1);
}
.st-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.st-chip {
  display: inline-flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 5px;
  padding: 3px 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 2px;
  background: var(--ed-surface-elevated, var(--vp-c-bg));
  font-size: 11.5px;
  line-height: 1.45;
}
.st-chip em {
  font-style: normal;
  color: var(--vp-c-text-2);
}
.st-chip strong {
  color: var(--accent);
  font-variant-numeric: tabular-nums;
}
.stage-detail {
  margin-top: 14px;
  padding: 12px 14px;
  border-left: 2px solid var(--accent);
  background: var(--vp-c-bg-soft);
}
.stage-detail-top {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 6px 12px;
  font-size: 13.5px;
  color: var(--vp-c-text-1);
}
.detail-link {
  font-size: 12.5px;
  font-weight: 500;
  color: var(--accent);
  white-space: nowrap;
}
.stage-detail-text {
  margin: 6px 0 0;
  font-size: 13px;
  line-height: 1.8;
  color: var(--vp-c-text-2);
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
  .funnel-body,
  .viz-caption {
    padding-left: 14px;
    padding-right: 14px;
  }
  .funnel-row {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .st-sub {
    text-align: left;
  }
  .funnel-track {
    justify-content: flex-start;
  }
  .funnel-fill {
    min-width: 116px;
  }
}
</style>
