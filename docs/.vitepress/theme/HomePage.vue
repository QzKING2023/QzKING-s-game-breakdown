<script setup>
import { withBase } from 'vitepress'
</script>

<template>
  <main class="portfolio">
    <section class="intro" aria-labelledby="intro-title">
      <div class="intro-copy">
        <p class="eyebrow">QzKING2023 · 游戏拆解与观察</p>
        <h1 id="intro-title">玩过之后，<br>再看一层。</h1>
        <p class="intro-description">记录游戏里的规则、选择与反馈。<br>从一次战斗的体验，追问系统如何运转，<br>也追问这些规则是怎样一路变过来的。</p>
        <a class="text-link" :href="withBase('/about.html')">关于这个小站 <span aria-hidden="true">↗</span></a>
      </div>
      <div class="field-notes" aria-label="拆解思路：从体验到规则，再到选择与反馈">
        <div class="notes-top"><span>观察笔记</span><span>01 / COMBAT</span></div>
        <p class="notes-question">一次战斗，<br>有哪些看不见的规则？</p>
        <div class="mechanism"><span>体验</span><i aria-hidden="true">→</i><span>规则</span><i aria-hidden="true">→</i><span>选择</span></div>
        <div class="notes-bottom"><span>命中 · 防御 · 资源 · 风险</span><span aria-hidden="true">＋</span></div>
      </div>
    </section>

    <section class="featured" aria-labelledby="shooting-title">
      <div class="section-heading"><p class="eyebrow">专题研究 / ESSAY</p><span>05 / 射击</span></div>
      <div class="work-layout">
        <div class="work-cover work-cover-shoot" aria-label="射击的进化史的文字封面">
          <span class="cover-label">设计史研究</span>
          <div><span class="cover-small">1978 / 2025</span><p class="cover-title">SHOOTER<br>HISTORY</p><p class="cover-subtitle">命中、随机，与容错的边界。</p></div>
          <div class="cover-footer"><span>街机 / FPS / 掩体射击 / 英雄射击</span><span aria-hidden="true">↗</span></div>
        </div>
        <div class="work-copy">
          <div class="tags"><span>射击游戏</span><span>设计史</span><span>源码取证</span></div>
          <h2 id="shooting-title">扣下扳机之前，<br>结果定了多少？</h2>
          <p>从《太空侵略者》讲到《战地风云 6》，看射击游戏怎样安排随机、后坐力和血量，一次交火的结果又怎样在玩家和系统之间来回划分。</p>
          <p class="work-method">早期作品直接读公开源码，现代作品以官方文件、开发者访谈和本站取证为据，另沿掩体射击与英雄射击两条副线展开。</p>
          <div class="work-actions"><a class="primary-link" :href="withBase('/shooting/')">阅读导读 <span aria-hidden="true">→</span></a><a class="text-link" :href="withBase('/shooting/full.html')">直接阅读全文</a></div>
        </div>
      </div>
    </section>

    <section class="featured" aria-labelledby="turn-based-title">
      <div class="section-heading"><p class="eyebrow">专题研究 / ESSAY</p><span>04 / 回合制</span></div>
      <div class="work-layout">
        <div class="work-cover work-cover-turn" aria-label="回合制的进化史的文字封面">
          <span class="cover-label">设计史研究</span>
          <div><span class="cover-small">1824 / 2026</span><p class="cover-title">TURN<br>BASED</p><p class="cover-subtitle">顺序、次数，与概率的边界。</p></div>
          <div class="cover-footer"><span>兵棋 / 日式 RPG / 战术 / 独立游戏</span><span aria-hidden="true">↗</span></div>
        </div>
        <div class="work-copy">
          <div class="tags"><span>回合制</span><span>设计史</span><span>跨作比较</span></div>
          <h2 id="turn-based-title">世界停下来等你，<br>这条规则变了多少？</h2>
          <p>从 1824 年的普鲁士兵棋讲到 2026 年，看回合制怎样把顺序、次数与概率一步步交给玩家，又怎样把它们收回来。</p>
          <p class="work-method">以开发者访谈、官方手册和规则书为主，沿时间看女神异闻录、轨迹、幽浮三个系列，再从独立游戏看规则被推到极端的样子。</p>
          <div class="work-actions"><a class="primary-link" :href="withBase('/turn-based/')">阅读导读 <span aria-hidden="true">→</span></a><a class="text-link" :href="withBase('/turn-based/full.html')">直接阅读全文</a></div>
        </div>
      </div>
    </section>

    <section class="featured" aria-labelledby="asw-title">
      <div class="section-heading"><p class="eyebrow">拆解案 / CASE STUDY</p><span>03 / 格斗游戏</span></div>
      <div class="work-layout">
        <div class="work-cover work-cover-asw" aria-label="从角色看系列的变迁与格斗游戏的发展的文字封面">
          <span class="cover-label">系列演变研究</span>
          <div><span class="cover-small">GUILTY GEAR / BLAZBLUE</span><p class="cover-title">ASW<br>CHARACTERS</p><p class="cover-subtitle">门槛、深度，与简化的边界。</p></div>
          <div class="cover-footer"><span>连段 / 取消窗口 / 资源机制</span><span aria-hidden="true">↗</span></div>
        </div>
        <div class="work-copy">
          <div class="tags"><span>2D 格斗</span><span>系列演变</span><span>文件取证</span></div>
          <h2 id="asw-title">格斗游戏变简单了，<br>深度去了哪里？</h2>
          <p>以 Sol、Zato、Ragna、Rachel 四个角色的历代变化为线索，看 Arc System Works 怎样降低门槛，又保留了哪些深度。</p>
          <p class="work-method">依据 Dustloop 帧数与连段数据、游戏脚本与碰撞文件和官方补丁说明，把执行难度与决策难度分开比较。</p>
          <div class="work-actions"><a class="primary-link" :href="withBase('/asw/')">阅读导读 <span aria-hidden="true">→</span></a><a class="text-link" :href="withBase('/asw/full.html')">直接阅读全文</a></div>
        </div>
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
          <p>拆开《战地风云 6》的伤害、射速、随机后坐力与扩散，看枪械机制怎样影响命中、有效射程和玩家反馈。</p>
          <p class="work-method">通过文件取证、实测录像、数值模拟和版本对照，检验枪法练习与随机性之间的关系。</p>
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
          <p>从 Valheim 的伤害结算、跨区域遭遇和资源成本出发，比较近战、远程与召唤系之间的风险收益差异。</p>
          <p class="work-method">从代码、预制体数值和遭遇战模拟入手，沿着游玩中遇到的问题逐层展开。</p>
          <div class="work-actions"><a class="primary-link" :href="withBase('/valheim/')">阅读导读 <span aria-hidden="true">→</span></a><a class="text-link" :href="withBase('/valheim/full.html')">直接阅读全文</a></div>
        </div>
      </div>
    </section>

    <section class="questions" aria-labelledby="questions-title">
      <div class="section-heading"><h2 id="questions-title">这些文章在追问什么</h2><span>选择一个问题，进入正文</span></div>
      <a :href="withBase('/shooting/full.html#section-3')" class="question-row"><span class="question-number">射击</span><div><h3>射击游戏是越做越拟真吗？</h3><p>从《德军总部 3D》的距离概率到《毁灭战士》的方向扩散，看随机最早的两种来源。</p></div><span class="question-arrow" aria-hidden="true">↗</span></a>
      <a :href="withBase('/shooting/full.html#section-5')" class="question-row"><span class="question-number">射击</span><div><h3>弹道背得下来，准星为什么还靠不住？</h3><p>从 CS 1.6 的半确定后坐力到 CS:GO 只跟 45% 的视角。</p></div><span class="question-arrow" aria-hidden="true">↗</span></a>
      <a :href="withBase('/shooting/full.html#section-7')" class="question-row"><span class="question-number">射击</span><div><h3>自动回血是从光环开始的吗？</h3><p>从护盾到“无血量”射击，看战斗的账怎样从整关缩到单场交火。</p></div><span class="question-arrow" aria-hidden="true">↗</span></a>
      <a :href="withBase('/turn-based/full.html#section-2')" class="question-row"><span class="question-number">回合制</span><div><h3>回合制是被硬件逼出来的吗？</h3><p>从普鲁士兵棋、D&amp;D 到《巫术》，看回合的粒度怎样被选出来。</p></div><span class="question-arrow" aria-hidden="true">↗</span></a>
      <a :href="withBase('/turn-based/full.html#section-9')" class="question-row"><span class="question-number">回合制</span><div><h3>空之轨迹的方格，后来变成了什么？</h3><p>从按格计算的范围到回合内自由走位，看轨迹怎样一步步放开移动。</p></div><span class="question-arrow" aria-hidden="true">↗</span></a>
      <a :href="withBase('/turn-based/full.html#section-10')" class="question-row"><span class="question-number">回合制</span><div><h3>显示 100% 的射击，为什么还会打空？</h3><p>从 1994 年的弹道到《幽浮 2》的隐藏补偿，看命中率怎样被摊开，又怎样被修饰。</p></div><span class="question-arrow" aria-hidden="true">↗</span></a>
      <a :href="withBase('/asw/full.html#section-6-1')" class="question-row"><span class="question-number">ASW</span><div><h3>主角的核心连段，到底简单了多少？</h3><p>按衔接类型拆开 Sol 与 Ragna 历代的 Core BnB。</p></div><span class="question-arrow" aria-hidden="true">↗</span></a>
      <a :href="withBase('/asw/full.html#section-6-2')" class="question-row"><span class="question-number">ASW</span><div><h3>Strive 的手感变宽松，来自帧顿还是规则？</h3><p>从游戏脚本读出帧顿、输入缓冲与取消窗口。</p></div><span class="question-arrow" aria-hidden="true">↗</span></a>
      <a :href="withBase('/bf6/full.html#section-3')" class="question-row"><span class="question-number">BF6</span><div><h3>后坐力有多少能练，又有多少只能碰运气？</h3><p>从准星轨迹区分平均上抬与每发随机方向。</p></div><span class="question-arrow" aria-hidden="true">↗</span></a>
      <a :href="withBase('/bf6/full.html#section-5')" class="question-row"><span class="question-number">BF6</span><div><h3>一把枪的有效射程，为什么会是一个分布？</h3><p>看后坐力与扩散怎样共同影响单次扫射。</p></div><span class="question-arrow" aria-hidden="true">↗</span></a>
      <a :href="withBase('/valheim/full.html#section-4-3')" class="question-row"><span class="question-number">Valheim</span><div><h3>难度倍率怎样改变防御的价值？</h3><p>从同一个护甲公式，看格挡与承伤的非线性变化。</p></div><span class="question-arrow" aria-hidden="true">↗</span></a>
      <a :href="withBase('/valheim/full.html#section-5-8')" class="question-row"><span class="question-number">Valheim</span><div><h3>为什么跨入平原，战斗体验突然变了？</h3><p>把装备进入期、敌群组合与刷新规则放在一起观察。</p></div><span class="question-arrow" aria-hidden="true">↗</span></a>
      <a :href="withBase('/valheim/full.html#section-10')" class="question-row"><span class="question-number">Valheim</span><div><h3>流派差异，究竟是输出差异还是交互差异？</h3><p>比较玩家亲自承受攻击，与召唤物承接仇恨的两种打法。</p></div><span class="question-arrow" aria-hidden="true">↗</span></a>
    </section>
    <section class="home-contact"><div><p class="eyebrow">保持交流</p><h2>关于游戏，也关于设计。</h2><p>如果你对拆解中的问题有不同的观察，欢迎聊聊。</p></div><a class="text-link" :href="withBase('/about.html#contact')">联系我 <span aria-hidden="true">↗</span></a></section>
  </main>
</template>
