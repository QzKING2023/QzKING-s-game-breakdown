<script setup>
import { withBase } from 'vitepress'
</script>

<template>
  <main class="portfolio">
    <section class="intro" aria-labelledby="intro-title">
      <div class="intro-copy">
        <p class="eyebrow">QzKING2023 · 游戏拆解与观察</p>
        <h1 id="intro-title">玩过之后，<br>再看一层。</h1>
        <p class="intro-description">记录游戏里的规则、选择与反馈。<br>从一次战斗的体验，追问系统如何运转。</p>
        <a class="text-link" :href="withBase('/about.html')">关于这个小站 <span aria-hidden="true">↗</span></a>
      </div>
      <div class="field-notes" aria-label="拆解思路：从体验到规则，再到选择与反馈">
        <div class="notes-top"><span>观察笔记</span><span>01 / COMBAT</span></div>
        <p class="notes-question">一次战斗，<br>有哪些看不见的规则？</p>
        <div class="mechanism"><span>体验</span><i aria-hidden="true">→</i><span>规则</span><i aria-hidden="true">→</i><span>选择</span></div>
        <div class="notes-bottom"><span>命中 · 防御 · 资源 · 风险</span><span aria-hidden="true">＋</span></div>
      </div>
    </section>

    <section class="featured" aria-labelledby="bf6-title">
      <div class="section-heading"><p class="eyebrow">拆解案 / CASE STUDY</p><span>02 / 枪械机制</span></div>
      <div class="work-layout">
        <div class="work-cover work-cover-bf6" aria-label="战地风云 6 Gunplay 拆解案的文字封面">
          <span class="cover-label">枪械机制研究</span>
          <div><span class="cover-small">战地风云 6</span><p class="cover-title">BF6<br>GUNPLAY</p><p class="cover-subtitle">枪法、随机，与命中的边界。</p></div>
          <div class="cover-footer"><span>后坐力 / 扩散 / 实战距离</span><span aria-hidden="true">↗</span></div>
        </div>
        <div class="work-copy">
          <div class="tags"><span>第一人称射击</span><span>枪械机制</span><span>实测分析</span></div>
          <h2 id="bf6-title">同样的压枪，<br>为何打出不同的结果？</h2>
          <p>以《战地风云 6》为对象，拆开伤害、射速、随机后坐力与扩散，讨论枪械机制如何影响命中、有效射程与玩家反馈。</p>
          <p class="work-method">原稿结合文件取证、实测录像、数值模拟与版本对照，追问枪法练习与随机性之间的关系。</p>
          <div class="work-actions"><a class="primary-link" :href="withBase('/bf6/')">阅读导读 <span aria-hidden="true">→</span></a><a class="text-link" :href="withBase('/bf6/full.html')">直接阅读全文</a></div>
        </div>
      </div>
    </section>

    <section class="featured" aria-labelledby="work-title">
      <div class="section-heading"><p class="eyebrow">拆解案 / CASE STUDY</p><span>01 / 战斗系统</span></div>
      <div class="work-layout">
        <div class="work-cover" aria-label="Valheim 战斗系统拆解案的文字封面">
          <span class="cover-label">战斗系统研究</span>
          <div><span class="cover-small">英灵神殿</span><p class="cover-title">VALHEIM</p><p class="cover-subtitle">技巧、资源，与风险的边界。</p></div>
          <div class="cover-footer"><span>伤害结算 / 区域遭遇 / 流派差异</span><span aria-hidden="true">↗</span></div>
        </div>
        <div class="work-copy">
          <div class="tags"><span>生存建造</span><span>动作战斗</span><span>系统拆解</span></div>
          <h2 id="work-title">一套完整的战斗循环，<br>为何逐渐失去吸引力？</h2>
          <p>以 Valheim 为对象，从伤害结算、跨区域遭遇和资源成本出发，讨论近战、远程与召唤系之间的风险收益差异。</p>
          <p class="work-method">原稿结合代码分析、预制体数值与遭遇战模拟，沿着游玩中的问题逐层展开。</p>
          <div class="work-actions"><a class="primary-link" :href="withBase('/valheim/')">阅读导读 <span aria-hidden="true">→</span></a><a class="text-link" :href="withBase('/valheim/full.html')">直接阅读全文</a></div>
        </div>
      </div>
    </section>

    <section class="questions" aria-labelledby="questions-title">
      <div class="section-heading"><h2 id="questions-title">这些拆解在追问什么</h2><span>选择一个问题，进入正文</span></div>
      <a :href="withBase('/bf6/full.html#section-3')" class="question-row"><span class="question-number">BF6</span><div><h3>后坐力有多少能练，又有多少只能碰运气？</h3><p>从准星轨迹区分平均上抬与每发随机方向。</p></div><span class="question-arrow" aria-hidden="true">↗</span></a>
      <a :href="withBase('/bf6/full.html#section-5')" class="question-row"><span class="question-number">BF6</span><div><h3>一把枪的有效射程，为什么会是一个分布？</h3><p>看后坐力与扩散怎样共同影响单次扫射。</p></div><span class="question-arrow" aria-hidden="true">↗</span></a>
      <a :href="withBase('/valheim/full.html#section-4-3')" class="question-row"><span class="question-number">01</span><div><h3>难度倍率怎样改变防御的价值？</h3><p>从同一个护甲公式，看格挡与承伤的非线性变化。</p></div><span class="question-arrow" aria-hidden="true">↗</span></a>
      <a :href="withBase('/valheim/full.html#section-5-8')" class="question-row"><span class="question-number">02</span><div><h3>为什么跨入平原，战斗体验突然变了？</h3><p>把装备进入期、敌群组合与刷新规则放在一起观察。</p></div><span class="question-arrow" aria-hidden="true">↗</span></a>
      <a :href="withBase('/valheim/full.html#section-10')" class="question-row"><span class="question-number">03</span><div><h3>流派差异，究竟是输出差异还是交互差异？</h3><p>比较玩家亲自承受攻击，与召唤物承接仇恨的两种打法。</p></div><span class="question-arrow" aria-hidden="true">↗</span></a>
    </section>
    <section class="home-contact"><div><p class="eyebrow">保持交流</p><h2>关于游戏，也关于设计。</h2><p>如果你对拆解中的问题有不同的观察，欢迎聊聊。</p></div><a class="text-link" :href="withBase('/about.html#contact')">联系我 <span aria-hidden="true">↗</span></a></section>
  </main>
</template>
