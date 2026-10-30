<script setup>
import { withBase } from 'vitepress'

const featured = [
  {
    id: 'ragna', number: '01', area: '角色与招式', title: 'BBCF · 拉格纳', slug: 'bbcf-ragna',
    question: '怎样取得接触，又怎样把进攻维持下去？',
    work: '核对角色脚本、判定框与社区帧数，沿牵制、命中、取消和收招，比较拉格纳与对手各自的选择。',
    finding: '招式的价值要连同距离、取消路线和对手的应对来看；负帧并不直接等于容易被惩罚。',
    boundary: '帧数推演与社区资料交叉核对；局部算例不代表整体对局胜率。',
    evidence: [{ label: '攻防选择与压制出口', section: '3' }, { label: '参数取舍与实际改动', section: '5' }]
  },
  {
    id: 'boss', number: '02', area: '敌人与遭遇', title: 'Valheim · BOSS 拆解与改造', slug: 'valheim-boss',
    question: '怎样让一场 BOSS 战形成不同阶段的考验？',
    work: '拆解八个 BOSS 的行为、招式与窗口，为蛊虫之后设计「雾中三幕」，用遭遇模型比较改动的收益与代价。',
    finding: '减少击退也可能增加玩家受到连续攻击的风险。改造需要同时考虑输出窗口与生存空间。',
    boundary: '改造经过模型验证，尚未实机验证；模拟结果用于相对比较。',
    evidence: [{ label: '行为结构与招式设计', section: '4' }, { label: '雾中三幕：方案与验证', section: '7-1' }]
  },
  {
    id: 'silent', number: '03', area: '资源与构筑', title: '杀戮尖塔 · 静默猎手两代拆解', slug: 'sts-silent',
    question: '一张牌的数值没变，角色的玩法为何变了？',
    work: '对照两代规则、实现与官方补丁，把角色运转分成取得、启动、兑现与抗干扰，计算组件和资源的成本。',
    finding: '卡牌的奖励池位置、删牌成本与敌人约束，会共同改变构筑的可行性；单卡强度不能解释全部变化。',
    boundary: '冻结版本下的机制分析与局部计算，不推定全体玩家的流派占比或胜率。',
    evidence: [{ label: '组件取得与资源成本', section: '3' }, { label: '设计方向与成败判据', section: '6' }]
  }
]
const experiments = [
  {
    slug: 'ftg-demo', title: 'FTG 角色原型：D 系位移与连段选路',
    question: '简化位移攻击的输入，怎样保留连段选路？',
    description: '把位移攻击集中到 D 系，以墙距与起手条件组织双换边搬运、抵墙短线和版边保位。',
    status: '八样本路线已完成机器验证；操作宽容度与真人体验待验收。',
    repository: 'https://github.com/QzKING2023/personal-ftg-demo'
  }
]
const groups = [
  { title: '角色与敌人', items: [
    { slug: 'bbcf-rachel', title: 'BBCF · 雷琪儿', description: '风与设置物怎样协同，有限资源如何约束接近与起攻。' },
    { slug: 'doom', title: 'DOOM · 怪物状态机', description: '状态表与受击硬直如何同时塑造压制感和敌人难度。' },
    { slug: 'sts-boss', title: '杀戮尖塔 · 反无限 BOSS', description: '三种限制循环的方式，各自给玩家留下什么应对空间。' }
  ] },
  { title: '规则与系统', items: [
    { slug: 'valheim-defence', title: 'Valheim · 近战防御管线改造', description: '修改防御公式，用配对模拟追踪死亡断崖与改造的边界。' },
    { slug: 'bf6', title: '战地风云 6 · Gunplay', description: '结合实测与数值模型，分析后坐力、扩散和有效射程。' },
    { slug: 'valheim', title: 'Valheim · 战斗系统', description: '难度倍率、装备成长与资源成本怎样改变近战的风险收益。' }
  ] }
]
const essays = [
  { slug: 'sts', title: '《杀戮尖塔》两代设计方向', description: '连接角色与 BOSS 两案，比较限制构筑取得和战斗使用的代价。' },
  { slug: 'asw', title: '从角色看 ASW 系列变迁', description: '四个角色跨版本的变化：如何降低门槛，又保留深度。' },
  { slug: 'shooting', title: '射击的进化史', description: '命中、随机与容错：一次交火的结果如何在玩家和系统之间划分。' },
  { slug: 'turn-based', title: '回合制的进化史', description: '顺序、次数与概率：回合怎样成为玩家可以操纵的资源。' }
]
const guide = (slug) => withBase('/' + slug + '/')
const evidenceLink = (slug, section) => withBase('/' + slug + '/full.html#section-' + section)
</script>

<template>
  <main class="portfolio">
    <section class="portfolio-intro" aria-labelledby="intro-title">
      <p class="eyebrow">QzKING2023 / 战斗设计研究</p>
      <h1 id="intro-title">从一次交手，<br>理解设计的取舍。</h1>
      <div class="intro-bottom">
        <p>以战斗策划为方向，研究角色、对手与资源。<br>从游戏体验出发，用规则、数据与验证说明设计判断。</p>
        <div class="intro-links">
          <a class="primary-link" href="#selected">先看三篇代表作 <span aria-hidden="true">↓</span></a>
          <a class="text-link" :href="withBase('/about.html#contact')">联系我 <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
    <section id="selected" class="selected-work" aria-labelledby="selected-title">
      <div class="section-heading"><div><p class="eyebrow">精选案例 / SELECTED WORK</p><h2 id="selected-title">三个切口，看战斗怎样运转</h2></div><span>01 — 03</span></div>
      <nav class="case-shortcuts" aria-label="按设计能力阅读代表作">
        <a v-for="item in featured" :key="item.id" :href="'#case-' + item.id"><span>{{ item.number }}</span><strong>{{ item.area }}</strong><span aria-hidden="true">↓</span></a>
      </nav>
      <article v-for="item in featured" :id="'case-' + item.id" :key="item.id" class="selected-case" :class="'case-' + item.id" :aria-labelledby="item.id + '-title'">
        <div class="case-summary">
          <p class="case-category">{{ item.number }} / {{ item.area }}</p>
          <h3 :id="item.id + '-title'">{{ item.title }}</h3>
          <p class="case-question">{{ item.question }}</p>
          <a class="text-link" :href="guide(item.slug)">阅读案例导读 <span aria-hidden="true">→</span></a>
        </div>
        <div class="case-detail">
          <dl><div><dt>分析与设计工作</dt><dd>{{ item.work }}</dd></div><div><dt>关键判断</dt><dd>{{ item.finding }}</dd></div></dl>
          <div class="evidence-links"><a v-for="entry in item.evidence" :key="entry.section" :href="evidenceLink(item.slug, entry.section)">{{ entry.label }} <span aria-hidden="true">↗</span></a></div>
          <p class="case-boundary"><span>验证边界</span>{{ item.boundary }}</p>
        </div>
      </article>
    </section>
    <section id="experiments" class="design-experiments" aria-labelledby="experiments-title">
      <div class="section-heading"><div><p class="eyebrow">设计实验 / PROTOTYPES</p><h2 id="experiments-title">把设计问题做成原型</h2></div><span>01 项</span></div>
      <article v-for="item in experiments" :key="item.slug" class="experiment-card" :aria-labelledby="item.slug + '-title'">
        <div class="experiment-summary"><p class="case-category">个人项目 / Godot</p><h3 :id="item.slug + '-title'">{{ item.title }}</h3><p>{{ item.question }}</p></div>
        <div class="experiment-detail"><p>{{ item.description }}</p><p class="experiment-status">{{ item.status }}</p><div class="experiment-links"><a class="text-link" :href="guide(item.slug)">查看设计与验证 <span aria-hidden="true">→</span></a><a class="text-link" :href="item.repository" target="_blank" rel="noopener noreferrer">项目仓库 <span aria-hidden="true">↗</span></a></div></div>
      </article>
    </section>
    <section id="more" class="article-library" aria-labelledby="more-title">
      <div class="section-heading"><div><p class="eyebrow">继续阅读 / MORE CASES</p><h2 id="more-title">更多战斗拆解</h2></div><span>06 篇</span></div>
      <div class="library-groups"><div v-for="group in groups" :key="group.title" class="library-group"><h3>{{ group.title }}</h3>
        <a v-for="item in group.items" :key="item.slug" class="library-item" :href="guide(item.slug)"><div><h4>{{ item.title }}</h4><p>{{ item.description }}</p></div><span aria-hidden="true">↗</span></a>
      </div></div>
    </section>
    <section id="series" class="article-library" aria-labelledby="series-title">
      <div class="section-heading"><div><p class="eyebrow">系列与品类 / CONTEXT</p><h2 id="series-title">把个案放回更长的变化中</h2></div><span>04 篇</span></div>
      <div class="essay-grid"><a v-for="item in essays" :key="item.slug" class="library-item" :href="guide(item.slug)"><div><h3>{{ item.title }}</h3><p>{{ item.description }}</p></div><span aria-hidden="true">↗</span></a></div>
    </section>
    <section class="home-contact" aria-labelledby="contact-title"><div><p class="eyebrow">方法与交流</p><h2 id="contact-title">每个判断，都有依据与边界。</h2><p>文件事实、规则计算、模型结果与作者判断，在文章中分别说明。</p></div><div class="contact-links"><a class="text-link" :href="withBase('/methods.html')">了解拆解方法 ↗</a><a class="text-link" :href="withBase('/about.html')">关于我与联系方式 ↗</a></div></section>
  </main>
</template>
