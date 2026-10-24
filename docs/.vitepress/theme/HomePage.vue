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
        <div class="intro-links">
          <a class="text-link" :href="withBase('/methods.html')">本站的拆解方法 <span aria-hidden="true">↗</span></a>
          <a class="text-link" :href="withBase('/about.html')">关于这个小站 <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div class="field-notes" aria-label="拆解思路：从体验到规则，再到选择与反馈">
        <div class="notes-top"><span>观察笔记</span><span>01 / COMBAT</span></div>
        <p class="notes-question">一次战斗，<br>有哪些看不见的规则？</p>
        <div class="mechanism"><span>体验</span><i aria-hidden="true">→</i><span>规则</span><i aria-hidden="true">→</i><span>选择</span></div>
        <div class="notes-bottom"><span>命中 · 防御 · 资源 · 风险</span><span aria-hidden="true">＋</span></div>
      </div>
    </section>

    <section class="featured" aria-labelledby="sts-title">
      <div class="section-heading"><p class="eyebrow">系列总纲 / SERIES</p><span>13 / 杀戮尖塔</span></div>
      <div class="work-layout">
        <div class="work-cover work-cover-sts" aria-label="《杀戮尖塔》两代设计方向的文字封面">
          <span class="cover-label">系列总纲</span>
          <div><span class="cover-small">杀戮尖塔 · 一代 / 二代</span><p class="cover-title">SLAY THE<br>SPIRE</p><p class="cover-subtitle">两代方向，与限制的代价。</p></div>
          <div class="cover-footer"><span>构筑取得 / 战斗使用 / 跨案判决</span><span aria-hidden="true">↗</span></div>
        </div>
        <div class="work-copy">
          <div class="tags"><span>卡牌构筑</span><span>两代对照</span><span>跨案判决</span></div>
          <h2 id="sts-title">限制循环的两处改动，<br>是同向的吗？</h2>
          <p>二代在「构筑取得」和「战斗使用」两个环节限制循环：角色的运转工具更难取得，BOSS 要求已经搭起的引擎承担出牌次数、能量或污染成本。总纲把两篇个案并排，给出跨案判决。</p>
          <p class="work-method">沿两篇个案的代码与文件核查、受控计算和官方补丁记录，用同一组指标对照限制发生在哪一阶段。</p>
          <div class="work-actions"><a class="primary-link" :href="withBase('/sts/')">阅读导读 <span aria-hidden="true">→</span></a><a class="text-link" :href="withBase('/sts/full.html')">直接阅读全文</a></div>
        </div>
      </div>
    </section>

    <section class="featured" aria-labelledby="sts-silent-title">
      <div class="section-heading"><p class="eyebrow">拆解案 / CASE STUDY</p><span>12 / 角色拆解</span></div>
      <div class="work-layout">
        <div class="work-cover work-cover-sts-silent" aria-label="静默猎手两代拆解的文字封面">
          <span class="cover-label">角色拆解</span>
          <div><span class="cover-small">杀戮尖塔 · 静默猎手</span><p class="cover-title">THE<br>SILENT</p><p class="cover-subtitle">取得、启动，与持续收益。</p></div>
          <div class="cover-footer"><span>杂技升蓝 / 删牌涨价 / 毒防</span><span aria-hidden="true">↗</span></div>
        </div>
        <div class="work-copy">
          <div class="tags"><span>卡牌构筑</span><span>两代对照</span><span>构筑经济</span></div>
          <h2 id="sts-silent-title">二代改的是「牌」，<br>还是拿到牌的过程？</h2>
          <p>杂技升蓝之后，同一张牌抽弃的手牌数没变，奖励池位置变了。文章从取得、启动、兑现到受干扰后还能做什么，逐层对照两代规则，解释低费持续收益为什么更有吸引力。</p>
          <p class="work-method">读两代本地化文本并核对实现、对照官方补丁，再按现有规则枚举奖励与手牌，做资源账和局部战斗账。</p>
          <div class="work-actions"><a class="primary-link" :href="withBase('/sts-silent/')">阅读导读 <span aria-hidden="true">→</span></a><a class="text-link" :href="withBase('/sts-silent/full.html')">直接阅读全文</a></div>
        </div>
      </div>
    </section>

    <section class="featured" aria-labelledby="sts-boss-title">
      <div class="section-heading"><p class="eyebrow">拆解案 / CASE STUDY</p><span>11 / 敌人设计</span></div>
      <div class="work-layout">
        <div class="work-cover work-cover-sts-boss" aria-label="反无限 BOSS 拆解案的文字封面">
          <span class="cover-label">敌人设计</span>
          <div><span class="cover-small">杀戮尖塔 · 反无限 BOSS</span><p class="cover-title">ANTI-<br>INFINITE</p><p class="cover-subtitle">预算、三阶段，与污染。</p></div>
          <div class="cover-footer"><span>时间吞噬者 / 门扉缔造者 / 永世沙漏</span><span aria-hidden="true">↗</span></div>
        </div>
        <div class="work-copy">
          <div class="tags"><span>卡牌构筑</span><span>敌人设计</span><span>机制对比</span></div>
          <h2 id="sts-boss-title">限制循环之后，<br>还给玩家留下什么？</h2>
          <p>三个 BOSS 都干涉连续出牌，但交给玩家的问题差别很大：一个把出牌次数变成公开预算，一个轮流限制复用与资源，一个让连续出牌产生需要处理的污染。四项判据并排之后，评价并不一样。</p>
          <p class="work-method">逐条核对三条结算链、做固定出牌数的精确计数反事实，再把规则放回完整 BOSS 战检查。</p>
          <div class="work-actions"><a class="primary-link" :href="withBase('/sts-boss/')">阅读导读 <span aria-hidden="true">→</span></a><a class="text-link" :href="withBase('/sts-boss/full.html')">直接阅读全文</a></div>
        </div>
      </div>
    </section>

    <section class="featured" aria-labelledby="rachel-title">
      <div class="section-heading"><p class="eyebrow">拆解案 / CASE STUDY</p><span>10 / 格斗游戏</span></div>
      <div class="work-layout">
        <div class="work-cover work-cover-rachel" aria-label="BBCF 角色拆解案：雷琪儿的文字封面">
          <span class="cover-label">帧级角色拆解</span>
          <div><span class="cover-small">苍翼默示录 神观之梦</span><p class="cover-title">RACHEL<br>ALUCARD</p><p class="cover-subtitle">风、设置，与接近的时机。</p></div>
          <div class="cover-footer"><span>风槽 / 空间控制 / 起攻</span><span aria-hidden="true">↗</span></div>
        </div>
        <div class="work-copy">
          <div class="tags"><span>2D 格斗</span><span>资源管理</span><span>角色对比</span></div>
          <h2 id="rachel-title">同样拥有设置，<br>雷琪儿的打法为何不同？</h2>
          <p>风能同时改变雷琪儿与场上物体的运动。沿着牵制、接近、击倒与起攻，拆开这份协同的收益，再看有限的风槽怎样约束她的连续进攻与脱身。</p>
          <p class="work-method">核对角色脚本、社区帧数与版本改动，并把奈茵、莉琪、μ-12 放进相同局面，比较设置物各自服务于什么打法。</p>
          <div class="work-actions"><a class="primary-link" :href="withBase('/bbcf-rachel/')">阅读导读 <span aria-hidden="true">→</span></a><a class="text-link" :href="withBase('/bbcf-rachel/full.html')">直接阅读全文</a></div>
        </div>
      </div>
    </section>

    <section class="featured" aria-labelledby="doom-title">
      <div class="section-heading"><p class="eyebrow">拆解案 / CASE STUDY</p><span>09 / 敌人设计</span></div>
      <div class="work-layout">
        <div class="work-cover work-cover-doom" aria-label="DOOM 怪物状态机拆解案的文字封面">
          <span class="cover-label">敌人设计研究</span>
          <div><span class="cover-small">DOOM · 1993</span><p class="cover-title">DOOM<br>MONSTERS</p><p class="cover-subtitle">状态表、硬直，与难度的来源。</p></div>
          <div class="cover-footer"><span>状态机 / painchance / 逐 tick 时间线</span><span aria-hidden="true">↗</span></div>
        </div>
        <div class="work-copy">
          <div class="tags"><span>第一人称射击</span><span>敌人设计</span><span>源码取证</span></div>
          <h2 id="doom-title">一张状态表，<br>怎样同时做出「压得住」和「打不过」？</h2>
          <p>18 种怪物共用同一套动作，差异全塞进数据表，其中一个叫 <code>painchance</code> 的数同时决定「你能否打断它」和「它有多难」。逐 tick 跑一遍正面交火，看杂兵怎样被按住、赛博恶魔为什么按不住。</p>
          <p class="work-method">读公开源码的状态表与固定随机表、用独立实现交叉核对地图读数、按伤害事件重放随机表，再用逐 tick 时间线把整场交火跑一遍。</p>
          <div class="work-actions"><a class="primary-link" :href="withBase('/doom/')">阅读导读 <span aria-hidden="true">→</span></a><a class="text-link" :href="withBase('/doom/full.html')">直接阅读全文</a></div>
        </div>
      </div>
    </section>

    <section class="featured" aria-labelledby="ragna-title">
      <div class="section-heading"><p class="eyebrow">拆解案 / CASE STUDY</p><span>08 / 格斗游戏</span></div>
      <div class="work-layout">
        <div class="work-cover work-cover-ragna" aria-label="BBCF 角色拆解案：拉格纳的文字封面">
          <span class="cover-label">帧级角色拆解</span>
          <div><span class="cover-small">苍翼默示录 神观之梦</span><p class="cover-title">RAGNA<br>THE BLOODEDGE</p><p class="cover-subtitle">接触、压制，与吸血的回报。</p></div>
          <div class="cover-footer"><span>中近距离技能 / 贴身压制 / 噬魂剑</span><span aria-hidden="true">↗</span></div>
        </div>
        <div class="work-copy">
          <div class="tags"><span>2D 格斗</span><span>帧级拆解</span><span>全角色对比</span></div>
          <h2 id="ragna-title">怎样取得接触，<br>又怎样把进攻维持下去？</h2>
          <p>拉格纳以优秀的中近距离技能取得接触，在贴身压制中争取命中，把连段转化为伤害、吸血和下一次进攻。逐招检查他的距离、取消与收招风险，看这套打法在哪些条件下成立。</p>
          <p class="work-method">反汇编角色脚本、逐帧解析判定框、与社区帧数表交叉核对，再用帧数加减法做确反、压制空隙与目押窗口的反事实。</p>
          <div class="work-actions"><a class="primary-link" :href="withBase('/bbcf-ragna/')">阅读导读 <span aria-hidden="true">→</span></a><a class="text-link" :href="withBase('/bbcf-ragna/full.html')">直接阅读全文</a></div>
        </div>
      </div>
    </section>

    <section class="featured" aria-labelledby="defence-title">
      <div class="section-heading"><p class="eyebrow">改造案 / REWORK</p><span>07 / 防御管线</span></div>
      <div class="work-layout">
        <div class="work-cover work-cover-defence" aria-label="Valheim 近战防御管线改造的文字封面">
          <span class="cover-label">防御公式改造</span>
          <div><span class="cover-small">英灵神殿</span><p class="cover-title">DEFENCE<br>REWORK</p><p class="cover-subtitle">断崖、靶向，与改动的边界。</p></div>
          <div class="cover-footer"><span>架势阈值 / 格挡残余 / 硬直清零</span><span aria-hidden="true">↗</span></div>
        </div>
        <div class="work-copy">
          <div class="tags"><span>生存建造</span><span>公式改造</span><span>配对模拟</span></div>
          <h2 id="defence-title">只改一条公式，<br>能拆掉死亡断崖吗？</h2>
          <p>把护甲、格挡、架势这条近战防御管线改一遍，用同一台遭遇战模拟器跑出改动前后：困难平均死亡率从 59.1% 压到 44.9%，但断崖没有被消灭。</p>
          <p class="work-method">反编译读结算链、导出预制体与动画时间轴、进程内变异做「改动前 / 逐旋钮 / 改动后」的配对对照，再用九条路全因子搜索量上限。</p>
          <div class="work-actions"><a class="primary-link" :href="withBase('/valheim-defence/')">阅读导读 <span aria-hidden="true">→</span></a><a class="text-link" :href="withBase('/valheim-defence/full.html')">直接阅读全文</a></div>
        </div>
      </div>
    </section>

    <section class="featured" aria-labelledby="boss-title">
      <div class="section-heading"><p class="eyebrow">拆解案 / CASE STUDY</p><span>06 / BOSS 设计</span></div>
      <div class="work-layout">
        <div class="work-cover work-cover-boss" aria-label="Valheim BOSS 拆解案的文字封面">
          <span class="cover-label">BOSS 设计研究</span>
          <div><span class="cover-small">英灵神殿</span><p class="cover-title">VALHEIM<br>BOSS</p><p class="cover-subtitle">牌堆、窗口，与改动的代价。</p></div>
          <div class="cover-footer"><span>招式表 / 阶段 / 反馈 / 改造验证</span><span aria-hidden="true">↗</span></div>
        </div>
        <div class="work-copy">
          <div class="tags"><span>生存建造</span><span>BOSS 设计</span><span>改造验证</span></div>
          <h2 id="boss-title">八个 BOSS，<br>为什么共用一套 AI？</h2>
          <p>拆开 Valheim 的八个 BOSS：它们全部挂在同一套野外 AI 上，难度只靠四组数据字段拧出来。文章最后把第六关的蛊虫之后改造一遍，用遭遇战模拟验证改动前后。</p>
          <p class="work-method">从代码、预制体数值与动画资源还原招式表、阶段与手感，再用重建的遭遇战模拟器做改动前后的相对比较。</p>
          <div class="work-actions"><a class="primary-link" :href="withBase('/valheim-boss/')">阅读导读 <span aria-hidden="true">→</span></a><a class="text-link" :href="withBase('/valheim-boss/full.html')">直接阅读全文</a></div>
        </div>
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
      <a :href="withBase('/sts/full.html#section-4')" class="question-row"><span class="question-number">杀戮尖塔</span><div><h3>二代的角色与 BOSS 改动，是同向的吗？</h3><p>两处限制分别落在构筑形成与战斗使用，普通运转也承担连带成本。</p></div><span class="question-arrow" aria-hidden="true">↗</span></a>
      <a :href="withBase('/sts-silent/full.html#section-3-1')" class="question-row"><span class="question-number">杀戮尖塔 · 猎手</span><div><h3>杂技升蓝，到底改了什么？</h3><p>同一张牌的手牌数没变；20 组普通奖励里一次都没出现的概率从 16.4% 变成 53.1%。</p></div><span class="question-arrow" aria-hidden="true">↗</span></a>
      <a :href="withBase('/sts-boss/full.html#section-7')" class="question-row"><span class="question-number">杀戮尖塔 · BOSS</span><div><h3>把沙漏的污染间隔从六张改成七张，会怎样？</h3><p>污染减少，高频出牌的收益同时被放宽——本篇唯一验证过的改动。</p></div><span class="question-arrow" aria-hidden="true">↗</span></a>
      <a :href="withBase('/doom/full.html#section-3')" class="question-row"><span class="question-number">DOOM</span><div><h3>「压得住」和「打不过」，为什么是同一个数？</h3><p>同一个 <code>painchance</code>，在杂兵身上让霰弹枪每发必断，在赛博恶魔身上只剩三成。</p></div><span class="question-arrow" aria-hidden="true">↗</span></a>
      <a :href="withBase('/doom/full.html#section-5-5')" class="question-row"><span class="question-number">DOOM</span><div><h3>杂兵为什么能被按住，赛博恶魔为什么按不住？</h3><p>把整场交火逐 tick 跑一遍：小恶魔 94～100% 零出手，赛博恶魔必然还手十几次。</p></div><span class="question-arrow" aria-hidden="true">↗</span></a>
      <a :href="withBase('/bbcf-ragna/full.html#section-3')" class="question-row"><span class="question-number">BBCF 拉格纳</span><div><h3>牵制被防后，对手何时能够还手？</h3><p>结合距离、取消和发生，检查拉格纳何时能继续压制，何时会被确反。</p></div><span class="question-arrow" aria-hidden="true">↗</span></a>
      <a :href="withBase('/bbcf-rachel/full.html#section-6')" class="question-row"><span class="question-number">BBCF 雷琪儿</span><div><h3>同样拥有设置，为什么打法不同？</h3><p>比较雷琪儿、奈茵、莉琪和 μ-12 怎样控制空间、取得接触并组织下一次进攻。</p></div><span class="question-arrow" aria-hidden="true">↗</span></a>
      <a :href="withBase('/valheim-defence/full.html#section-3')" class="question-row"><span class="question-number">Valheim 防御</span><div><h3>近战的断崖，是「血量」问题还是「架势」问题？</h3><p>把两个旋钮分别拉到底，靶向性差 4~8 倍。</p></div><span class="question-arrow" aria-hidden="true">↗</span></a>
      <a :href="withBase('/valheim-defence/full.html#section-6')" class="question-row"><span class="question-number">Valheim 防御</span><div><h3>改了防御公式，为什么断崖还在？</h3><p>剩下的死亡格里，玩家死时敌人还剩三成到九成血。</p></div><span class="question-arrow" aria-hidden="true">↗</span></a>
      <a :href="withBase('/valheim-boss/full.html#section-4')" class="question-row"><span class="question-number">Valheim BOSS</span><div><h3>八个 BOSS，难度到底靠什么调？</h3><p>它们共用一套野外 AI，差别只在血量、牌堆、血量门与可挡性。</p></div><span class="question-arrow" aria-hidden="true">↗</span></a>
      <a :href="withBase('/valheim-boss/full.html#section-7-1')" class="question-row"><span class="question-number">Valheim BOSS</span><div><h3>把第六关的 BOSS 改一遍，要付出什么代价？</h3><p>三幕改造让招架重新有回报，也暴露出位移其实是玩家的保护。</p></div><span class="question-arrow" aria-hidden="true">↗</span></a>
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
