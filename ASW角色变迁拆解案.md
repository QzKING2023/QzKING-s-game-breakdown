# 从角色看系列的变迁与格斗游戏的发展

## 高难度厂商 Arc System Works 如何在“更简单”与“保深度”之间找平衡

> **核心结论**：格斗游戏并没有走向“快餐化”。Arc System Works（下称 ASW）这些年面对的问题是：怎样在变得更简单的同时，保住系统的深度。从四个角色的历代变化看，ASW 先后走过“外挂简易模式”和“直接改系统”两条路；基准角色的核心连段确实变容易了，高难角色的核心机制却一直保留；连段的角色限定只在 Guilty Gear 一线被系统性地削减，BlazBlue 正作始终是一款高难度的游戏。
>
> 本文依据五类证据：
>
> - Dustloop Wiki 的帧数表、连段页与系统页（Cargo 数据库导出与页面原文）；
> - 按统一口径对 4 个角色、各代主力连段的逐段拆分；
> - 对 Dustloop 连段页注释的计量统计（含对照角色）；
> - Xrd REV 2、Strive、BBCF 三作游戏文件中的角色脚本（帧顿与攻击等级）；
> - 官方补丁说明与开发者访谈。
>
> **数据基准**：Dustloop 数据于 2026-10-12 读取。Strive 的系统大改以 Ver.2.00（2026-04-08，战斗版本 5.00）为界，数据截至 Ver.2.03（2026-09-24，战斗版本 5.03）。

---

## 0. 结论总览

| # | 结论 | 关键证据 | 章节 |
|---|---|---|---|
| 1 | **ASW 降门槛走过两条路**：BB 正作和 Xrd 是在原有系统旁边**外挂**简易模式；Strive 和 BBTag 是直接**改系统本身** | BBCS 家用版（2010）首次加入 Beginner Mode，Xrd REVELATOR（2016）加入 Stylish；石渡太辅称 Strive“从一开始就按不需要 Stylish 来设计”；BBTag 把 Smart Combo、简化指令做进了系统 | §3、§4、§5 |
| 2 | **基准角色的核心连段执行难度明显下降，Sol 和 Ragna 的下降方式不同** | Sol 的 Core BnB：板中招式数 10 → 7 → 5，板边约 14 → 12~13 → 9，手动延迟 3 → 3~4 → 0，角色限定从“19 人适用名单”变为没有。Ragna 正作的 Core BnB 没有变短（CT 10 → CP Extend 15~17 → CF 13~16），下降体现在最紧窗口放宽（CP Extend ≤6F → CF ≤19F）和 BBTag 的整体简化 | §6.1 |
| 3 | **入门连段不能衡量门槛变化** | 四个角色里，有入门档数据的三人（Sol、Zato、Ragna）历代都有 Very Easy / Easy 的纯取消连段，最难的角色也不例外 | §6.1 |
| 4 | **Strive 的放宽不在帧顿，在缓冲和取消规则** | 从游戏脚本读出：GG 三代帧顿表相同（11~15 帧），Strive 与 Xrd 地面通常技平均帧顿几乎一样；按键缓冲 Xrd 3 帧 → Strive 5 帧；“收招中可取消”从 Xrd 的逐招设定变成 S、H 系的通用规则（Sol c.S 24 → 30 帧，Zato c.S 20 → 29 帧），轻攻击和搓招时限没有变。BBCF 帧顿每级短 3 帧，缓冲靠按住，但收招里留有 1~5 帧取消时间 | §6.2 |
| 5 | **高难角色的核心机制一直保留** | Zato 的槽“维持耗槽、出招耗槽、白槽快回、红槽锁召唤”的结构四代未变；Rachel 的风从 CS 世代到 BBTag 一直是 4 格、空中回得慢或不回。Strive 两次以“槽管理要更谨慎”为由收紧 Eddie 槽回复（1.29、2.03） | §6.4 |
| 6 | **连段的角色限定只在 GG 线明显收窄** | Dustloop 连段页中带角色限定注释的条目：AC+R 31%~40%、Xrd 32%~37%，Strive 降到 3%~8%；Strive 三个角色页的“Works on”栏 405 条里没有一条是非全员。官方 2.00 说明明写统一受创判定是为了消除“只对特定角色成立的连段” | §6.3 |
| 7 | **BB 线的角色限定没有明显变化** | CSE 18%、CP 1.x 22%、CP Extend 10%、CF 22%、BBTag 14%，没有单调趋势；各角色体型不同，受创判定差异历代都在 | §6.3 |
| 8 | **帧数表只能回答“有没有窗口”** | 4 个角色的主力连段几乎全由取消构成，能按帧数表算出窗口的地面目押极少；难点集中在空中追打（只能算上界）和延迟、位置依赖上 | §1.4、§6.1 |
| 9 | **这个平衡点要持续调整** | Strive 2021 年降门槛，1.29（2023）加入 Wild Assault 等系统，2.00（2026-04）回头限制 RC、移除 Wild Assault，2.03 再收紧 Eddie 槽，2026-09 又宣布开发新手向的大型新功能 | §4.4、§7.3 |

---

## 1. 问题与方法

### 1.1 论点

一个常见的说法是：格斗游戏，乃至整个游戏业，正在“快餐化”“简单化”。

本文的立场是：现在真正的问题不是要不要变简单，而是**变简单之后，系统的深度放在哪里**。新玩家的门槛必须降低，否则没有人进场；深度又不能丢，否则老玩家留不下，比赛也没有看头。

ASW 很适合用来观察这个问题。它的两个招牌系列 Guilty Gear（下称 GG）和 BlazBlue（下称 BB）都以系统复杂、操作难度高著称；同时它又在 2010 年代中后期主动尝试降低门槛，并且留下了足够多的版本、数据和开发者表态。

### 1.2 选角：2×2 矩阵

| | 基准角色（下限） | 高难角色（上限） |
|---|---|---|
| GG | Sol Badguy | Zato-1（AC+R 中名为 Eddie） |
| BB | Ragna the Bloodedge | Rachel Alucard |

- **为什么选主角**：贯穿系列，定位是“基本”的角色，不算太难，能反映**门槛**的变化。Sol 与 Ragna 的设计一脉相承：红色、大剑、反英雄主角。巧的是，两人的标志性连段都以 j.D 的空中循环出名（Sol 的 Dustloop、Ragna 的 Driveloop）。
- **为什么加上高难角色**：只看主角，只能证明“变简单了”，证明不了“深度还在”。
- **为什么是 Zato 和 Rachel**：两人都贯穿各代正作（Rachel 还出现在 BBTag），而且难度来源都同时覆盖执行、资源管理和立回三个方面。类型又不同：Zato 是同时操纵两个身体的人偶角色，Rachel 是用风槽操控自己、对手和设置物的牵制型角色。

### 1.3 版本范围

- **GG**：GGXX AC+R（2012）→ Xrd REV 2（2017）→ Strive（2021–）。初代 GG（下称 GGML）与 GGX 只作定性背景。
- **BB**：BBCT（2008）→ CS 世代 → BBCP / CP Extend → BBCF（2015–），外加 BBTag（2018）。

原则上每代取最终版本，因为同一作的不同版本通常没有系统层面的改动。三个例外需要单独交代：

1. **CS 世代缺数据**。BBCS 的帧数页是空页面，BBCS II 没有帧数表，BBCS Extend（下称 CSE）有帧数表但没有地面受创硬直，Rachel 的帧数页还标着“TODO: Correct frame data”。而 Dustloop 对 CSE 的描述是“多项角色平衡调整，并对 BlazBlue 引擎做了大幅修改”，所以也不能拿初版数据顶替。CS 世代在本文中只做定性描述。
2. **Xrd REVELATOR 加入了 Stylish**。它不影响 REV 2 的帧数数据，但在简易模式的时间线上是一个节点。
3. **Strive Ver.2.00 是实打实的系统改动**：限制 Roman Cancel、移除 Wild Assault、加入 Counter Blitz、统一受创判定。原版与 2.00 的差异本身就是论据。

CP 世代以 Dustloop 上 CP Extend 的独立页面（代码 `BBCPE`）为主样本，CP 1.x 的页面只作参照。BBCPE 帧数页自己声明，发生、持续、收招等计时数值大多沿用 CP 1.10 / 1.1。

### 1.4 怎么衡量“难度”

格斗游戏的难度分两层，本文始终分开讨论：

- **执行层**：手上功夫。连段的衔接窗口、指令复杂度、输入缓冲、取消规则。
- **决策层**：脑子里的功夫。资源怎么分配、什么时候用什么系统、对专属机制的理解、立回中的判断。

执行层最容易想到的指标是帧数。但帧数只能笼统地回答“一套连段在帧数上有没有窗口”，回答不了“这套连段难不难”。为此，本文把每套连段拆成一个个衔接，每个衔接归入四类之一：

| 代号 | 类型 | 能否用帧数表计算 |
|---|---|---|
| C | 取消：Gatling、必杀技取消、跳跃取消、RC、FRC 等 | 一般不算窗口，取消的有效时间通常覆盖整段可取消区间 |
| L | 目押：前一招完全结束后，靠命中后的有利帧接上下一招 | 可以：窗口 = 命中有利帧 − 下一招发生 + 1 |
| J | 空中追打：对手浮空后再打中 | 只能算上界：受身不能时间 − 本招剩余硬直 − 下一招发生 + 1。实际窗口还受高度、距离、重力和受创递减影响 |
| D | 延迟、空振、位置依赖：`dl.`、whiff、微冲、特定高度 | 不能 |

每套连段另外记录六个帧数以外的维度：限定条件（反击、板边、角色、补正阈值）、确认难度、指令复杂度、资源消耗、失误代价，以及 Dustloop 编者给的难度标注。难度标注由各页编者主观填写，只能在同一作品内部参考。

拆分的结果是：**4 个角色、各代主力连段的衔接几乎全是取消**，能按帧数表算出窗口的地面目押，全部样本里只有一处，而且它来自社区资料、按统一公式其实算不出来。难点集中在空中追打和延迟、位置依赖上，而 Xrd、Strive、BBCT 的帧数数据缺受身不能时间，连空中追打的上界都算不出。所以本文第 6 节的主要证据是衔接构成、连段长度、延迟数和限定条件；帧数窗口只在少数算得出的地方作佐证，并一律注明是上界。

帧数表还漏掉了两项影响手感的因素：帧顿和输入缓冲。§6.2 从游戏文件中读出这两项，单独比较。

**纯粹入门的连段不能用来衡量门槛**。Sol、Zato、Ragna 历代都有 Very Easy 级别的纯取消连段，包括被 Dustloop 称为“可能是本作中最复杂的角色”的 Strive 中的 Zato。真正要看的是 **Core BnB**：角色实际对战中最常使用的、稳定的核心连段。本文的取法是：优先取页面明确称为 BnB、main combo、go-to、most important 的连段，其次取 Core Combos 一节的第一条无资源路线，不取 Beginner 档。

### 1.5 局限

- 我对早期作品没有大量实机经验。执行层的结论依赖 Dustloop 数据，决策层的结论依赖社区共识与官方说明，文中都标明来源。
- Dustloop 大多只收各作的最终版本，看不到代内变化；Strive 页面反映的是 2.00 之后的状态。
- Dustloop 各页面由不同编者在不同年份维护，写法差别很大。注释多少不等于游戏里实际限定多少（详见 §6.3）。
- 所有窗口计算只到上界，未扣受创递减、冲刺帧数和高度影响。
- 游戏文件只有 Xrd REV 2、Strive、BBCF 三作；从中读出的是攻击等级和帧顿修正，帧顿对照表、持续与收招帧仍取自 Dustloop。

---

## 2. 起点：ASW 的“高难度”从哪来

### 2.1 初代与 GGX

初代 GG（1998）的系统还很粗糙。Dustloop 的 GGML 系统页没有 Roman Cancel 和 Burst 的条目，却有一个“Charge Cancel”：通常技可以取消成蓄力动作，松键即结束，“essentially serve to remove all recovery”（基本等于抹掉收招）。这是多数角色无限连的来源。Sol 的标准无限连是 `[f.S/c.S > 5H(1) > 623R > 66]xN`，Dustloop 称其“very lenient”；Zato 的同类无限连 `[c.S > 5H > 22R, 66, c.S]xN` 甚至是这一代 Zato 唯一的 BnB。

初代 Sol 被社区归为“执行门槛友好”的波升型角色。而初代 Zato 还不是人偶型角色，影子不能独立行动，被认为是牵制型角色。

GGX 确立了 Zato 的人偶角色原型：236X 召唤影子，影子靠**反向输入**（松开按键）出招，被打会被强制收回。Dustloop 把执行列为缺点：“Controlling the shadow effectively requires a strong grasp of both Negative Edge inputs and timing its attacks alongside Zato's”。GGX 的帧数表没有命中有利帧和受创硬直，Steam 上也买不到，本文不作数据比较。

### 2.2 GGXX AC+R：复杂度的高点

AC+R 的复杂，不在于哪个系统特别难，而在于系统一层叠一层。

**取消**有四种：Gatling、必杀技取消、跳跃取消、Roman Cancel（RC，50% Tension，攻击须接触对手）。RC 之外还有 FRC（Force Roman Cancel，社区俗称 False Roman Cancel）：只花 25% Tension，空挥也能用，代价是窗口按招固定，“the FRC window is usually very small (2 frames on average)”，而且“will not shift or extend due to hitstops”（不会因打击停顿延后或拉长）。从帧数表读出的数字是：

| 角色 | 招式 | FRC 窗口 | 长度 |
|---|---|---|---|
| Sol | 236P Gun Flame | 14~15F | 2F |
| Sol | j.236K Air Bandit Revolver | 6~8F | 3F |
| Sol | 236[K] Bandit Bringer | 18~20F | 3F |
| Sol | 214K Riot Stamp | 蹬墙后 9~12F | 4F |
| Eddie | 22H Invite Hell | 12~13F | 2F |
| Eddie | 214S Drunkard Shade | 9~10F | 2F |
| Eddie | j.41236S Shadow Gallery | 重新出现后 19~21F | 3F |
| Eddie | 623S Damned Fang | 刺中后第 7~9F | 3F |

Sol 页面称 Gun Flame FRC“is one of Sol's best uses of meter”，窗口是 2 帧。配套的输入技巧（如 FRC 后马上冲刺的 6FRC6）“对某些连段是必需的”。

**资源**同样是叠起来的。Tension 的获取量要先经过 Tension Pulse 的七档倍率（25%~150%）、距离修正、连段段数修正；每用一次 RC、FRC、DAA 或 Force Break，之后 240 帧获取量 −80%。Guard Bar 一槽两用：低于中点时伤害补正最低到约 3%，超过 75% 闪烁时“all hits will be considered Counter Hits”。Burst 槽、隐藏的晕眩值各自独立运转，对手连段越长，Burst 回得越多。

所以打一套连段时，攻方至少要同时顾到：自己的 Tension 与获取惩罚、FRC 窗口、RC 之后是否丢失空中行动（需要 Jump Install）、对手的 Burst（路线要“burst safe”）、对手的 Guard Bar、对手的晕眩值，以及角色专属资源（Sol 的 Dragon Install、Eddie 的影子槽）。

**防守**一侧也是如此。挡同一招有四种方式：普通防御、Instant Block（8 帧窗口，失败后 30 帧内不能再 IB）、Faultless Defense（持续耗 Tension，同时 Tension 获取打折）、Slashback（2 帧窗口，失败后 30 帧不能防御）。另外还有花 50% 的 Dead Angle Attack 和两种颜色的 Burst。Dustloop 的原话是，防守方“must intelligently choose between Instant Block, Faultless Defense, and standard Guard”。

也有例外。即死技在 AC+R 里被专门“上了锁”：先进入 IK 模式，剩余 Tension 变成倒计时，耗尽后开始扣体力。Dustloop 写道：“Instant Kill Mode exists for one reason—to make Instant Kills not match practical in most circumstances.” 可见这时 ASW 已经会给某些系统加限制，只是整体上还在往上叠。

两位角色在这一代的状态：

- **Sol**：回报高，但部分确认偏难。板边 BnB 就是著名的 Dustloop（`5K(1)/c.S > 6P, (delay) 5H > j.D, j.D ▷ j.D, j.D ▷ dash j.S > j.D > dj.S > j.D > SVV > KD`），Dustloop 标 Medium，附一份 19 人的适用名单，并按对手体重规定延迟量，“very light characters, only one rep”。
- **Eddie**：影子槽 8000 点，待机每帧耗 8 点；主动收回进快速回复（286 帧回满，随时可再召唤），影子被打或槽耗尽进慢速回复（445 帧回满，回满前不能召唤）。Eddie 在这一代的成名绝技是不可防循环：多种不同起手最终都能形成不可防的 set，而不同路线之间还能够相互衔接—— Potemkin 还有专用的一条“只要有 Tension 就能循环到对手死亡”的不可防套路。这些路线的共同点是：**都用了 FRC**。

---

## 3. BB 线：在复杂系统旁边“外挂”简易模式（2008–2015）

### 3.1 BBCT（2008）

BBCT 发售时没有简易操作模式。Kotaku 在 2010 年评价 CT 家用版对新手很难，直到 CS 才加入 Beginner Mode。

- **Ragna**：Dustloop 称他“大概是最容易上手的角色”，“combos are simple, low execution, and very damaging”。入门连段 `5B > 5C > 214A~214D` 标 Very Easy；Core 一节的第一条「5D > 6A Link」标 Easy，10 个招式输入，含一处冲刺取消后的目押（`5D dc 6A`），对 Carl、Arakune 板中无效。标志性的 Driveloop 需要反击起手、两处“maximum delay”，并且要“character to character depending on hurtbox size”地调整，标 Hard。
- **Rachel**：风槽配合 5B、3C 快速打掉 Guard Libra，不花 Heat 就能破防；风推动 Pumpkin、George 等飞行道具构成板面上的牵制。Dustloop 没有 CT Rachel 的连段页，现有连段只来自 BlazBlue Fandom 的二手资料，本文只作结构参考。

CT 的帧数数据也有缺口：Rachel 的受创硬直、防御硬直、受身不能时间全空，Ragna 的也大多缺失。CT 基本不能参与窗口比较。

### 3.2 CS 世代（2009–2011）

2010 年 BBCS 家用版首次加入 **Beginner Mode**：单键出必杀，连按出预设连段。CSE 改名为 **Stylish Mode**，竞技中不用。CSE 的 Stylish 还会禁用 Burst。

系统层面，Burst 从 CT 的“和 Barrier 槽绑定、用后本回合一直处于 Danger 状态”改成图标计数（开局 1 个，每输一回合再得 1 个，整场最多 2 个）；Counter Assault 会让本回合最大 Guard Primer 永久 −1。防御系统的代价从“当下”拉长到“整个回合”。这些数据 Dustloop 注明来自 CS2，CSE 是否有改动无法确认。

两位角色只能定性描述：

- **Ragna**：Dustloop 概述写“Very high damage output with basic BnBs”。但板中站立对手的无资源路线只有入门型的 `5B > 5C > (2C) > (3C) > 收尾`，其余要求蹲姿、Fatal Counter、RC 或特定角色；板边路线按开始前的补正值分成 >64%、>49%、<49% 三条。22C 的有利帧被削到 +4，“makes any typical meterless followup impossible”，只能当收尾用。
- **Rachel**：风槽在这一代有了明确规格：4 格，只在地面回复，在地面待得越久回得越快。D 默认向前吹，方向 + D 可以八方向吹，能影响 Rachel、她的设置物和对手。超必杀 Tempest Dahlia 能回风，Lv1 也能回 2~3 格。社区连段开始用 `(NW)` / `(1-4)` 标出“不用风 / 需几格风”。

### 3.3 BBCP 与 CP Extend（2012–2015）

CP 的系统改动集中在 Burst：Burst 槽改为会回复、跨回合保留；中立时同一个指令变成 **Overdrive**，取代了 Gold Burst。Overdrive 中的连段不能被 Burst。另外新增 **Crush Trigger**（25 Heat）。决策从“这一个 Burst 用在哪”变成“这一槽留着防守，还是开 Overdrive 抢回合”。CP 的 Stylish 会禁用 Rapid Cancel。

**Ragna**：BBCPE 板边连段 `5B > 5C > 623D >> 236C >> 236C > 2C > 5C > 5D > 236D > 2C > 5C > 5D > 22C > 214A >> 214D`（4008 伤害，无前提），15 个招式输入，全程在地面，没有冲刺取消和跳跃取消，Dustloop 原文也没有延迟标记。难点在 Dead Spike（236D）：它必须晚命中，持续最后一帧命中时 `236D > 2C` 的上界是 6F，持续第一帧命中则接不上。

**Rachel**：CP 1.x 的 6A 不再自带浮空，开连段必须先花一格风，而且要在确认前就花，被防就浪费。Dustloop 写她“Extremely reliant on wind”，并建议为了回风“intentionally throw away a chance for a more damaging combo path”。CP Extend 的板边连段 `5B > 5CC dash 6A jc j.C > j.236C land 5B > 6A > 236A 6A > 4B 6A > BBL summon` 则有两个变化：

- 6A 命中后能跳跃取消。BBCPE 角色页写“gained jump cancel properties on hit”，CP 1.x 的帧数表里 6A 没有这一项。这套路线的结构因此与 BBCF 的板边连段几乎相同。
- 这是 BBCPE 连段页 6 条里唯一不用风的一条，改用 50 Heat 的超必杀 Baden Baden Lily 引爆两根杖收尾。其余 5 条分别用 1、2、4 格风。

同一个 `214C 66 5CC` 衔接，在 CP 1.x 数据下上界是 3~10F，在 BBCPE 数据下是 7~14F，原因是 5C 的发生从 17F 改成了 13F。这是 BBCPE 帧数页唯一改过的计时数值。

### 3.4 BBCF（2015–）

CF 在 CP 的基础上继续加：Burst 只能在被打时用，防御中改用 Guard Cancel Overdrive；加入 Active Flow（连续进攻后进入，每回合一次，伤害 +10%，用过 Burst 就失去）和 Exceed Accel。同一条 Burst 槽连着的选项，是 BB 正作里最多的。

简易模式则换了一种态度：CF 的 Stylish 写明“All system mechanic are still available”，只是 SP 键单键出的必杀伤害 −20%，防御时默认开 Barrier。从 CSE 禁用 Burst，到 CP 禁用 RC，再到 CF 系统全开，**外挂模式省掉的是执行，系统层的判断逐渐全数交给了新手自己**。

- **Ragna**：Dustloop 称他“对新手非常友好”，但上限依赖对系统的理解。板中 BnB（13 个招式输入，C4 / J1 / D1）的 `Spin Kick, 5B` 上界约 19F，比 CP 世代的 Dead Spike 晚命中（≤6F）宽得多，代价是 214B~214D 要延迟派生；板边 Core 标 Easy，起手超过两次打击就要改走另一条路线。
- **Rachel**：风 4 格，地面约 220 帧回 1 格，空中慢 7~8 倍，连续 500 帧不用风后加速到 60 帧一格。风可以在任何动作中用 D + 方向打出（受创、防御硬直、受身除外）。CF 恢复了 6A 命中自带浮空，开连段先花风的硬性要求没了。连段页给每条连段列“Starting Wind”和“Net Wind”两列。Strategy 页写道：“managing your wind is ABSOLUTELY CRITICAL”。

### 3.5 小结

BB 正作的门槛靠外挂的“帅气模式”降低，系统本身没有变简单，反而在 Burst 一侧一路加选项。主角本来就容易上手；高难角色的资源管理始终是核心。各角色体型差异大，到 BBCF 仍有大量角色限定连段（见 §6.3）。

---

## 4. GG 线：从“外挂”简易模式到改系统

### 4.1 Xrd REV 2（2017）

Xrd 在系统上做了一处替换：系统页里没有 FRC 了，取而代之的是三色 RC。其中黄 RC 只花 25%，在攻击起手或持续帧前段几乎随时能用，还附带让对手减速，能接出平时接不上的连段。AC+R 里靠 2 帧窗口换来的便宜取消，变成了“什么时候花这 25% 最划算”的判断。石渡太辅事后也说，Xrd 的 RC“自由度太高”。防守一侧，Slashback 从系统页消失，换成 1 帧发动的 Blitz Shield（25%）。

2016 年的 REVELATOR 让 GG 系列首次加入 Stylish：多一个 SP 键出必杀和超必杀，连按自动连段，站着不动自动防中上段。代价是受到的伤害 +20%，部分无敌技用 SP 键出时失去无敌。竞技中不用。

- **Sol**：板中 Core 1 是“Sol's main punish midscreen”，7 个招式输入，Medium，但逐个点名了 13 个要改做法的对手。板边仍是 Dustloop，“Sol's iconic BNB dating back to XX”，12~13 个招式输入，Medium，“The delay on 5H is character specific”。Xrd 的帧数数据没有受身不能时间，两套连段的空中衔接都算不出窗口。
- **Zato**：Zato 按下按键出招，Eddie 松开按键出招，二者“independently and simultaneously”行动；Eddie 不受 Zato 打击停顿的影响。Eddie 槽上限 6000，待机每帧耗 10；Eddie 被打则槽归零变红，约 6 秒回满，期间不能召唤。Dustloop 把“High difficulty”列为缺点，Xrd 的连段页至今是未完成的空壳。

### 4.2 Strive 发售（2021）：刻意不做 Stylish

Strive 是这条线的分界点。石渡在 ArcREVO 2019 的访谈中提到，他此前在 Fami 通说过，这一作“从一开始就按不需要 Stylish 模式来设计”。降门槛的手段从外挂一个模式，变成了改系统本身。

他在 4Gamer 访谈中的说法（据 Jiyuna 英译）：以前的 GG 太受他个人对格斗游戏的想象影响，新玩家很难上手，这一作想“重置”这一点；以前要靠长而难的连段打出伤害，这次要让新手更有机会赢高手，同时“会确保肯练的人得到回报”；Gatling 路线太多会让新手不知道哪条是对的，所以限制了路线；RC 划定了用途，但留了给高手挖掘的空间。他对 Eurogamer 说，改变的主要是“第一印象”，玩深了“一样难”。

具体手段是：连段变短、Gatling 路线受限、单次命中伤害提高、加入 Wall Break。Strive 的训练模式至今没有帧数条，官方计划在 2027 年内加入“直观的帧数显示功能”。

### 4.3 Strive 中的两位角色

**Sol**：主角定位不变，连段和回报结构大幅简化（数据见 §6.1）。板中 Core 2 只有 5 个招式输入，“Sol's main combo route off of non-P or K starters”，Easy；板边 Core 3 有 9 个，“The main combo, now in the corner”，Easy。Core 3 用的是固定最速就能打出的 Clean Hit Fafnir，Wiki 甚至建议玩家不要手动延迟 Fafnir：伤害差距“minuscule”，而掉连段的风险“outweighs the benefits”。但难点并没有全部消失：“only 1 normal can be used before 5K will fail to juggle”，所以“Can be difficult to hit confirm without a Counter Hit”。

**Zato**：可以随时用 214H 召唤、收回 Eddie，236X 召唤的同时直接出招。反向输入仍然保留，但有了明文规则：“Eddie's Negative Edge inputs have the standard 4 frames of input buffer”，同帧松开多键按 P>K>S>H>D 优先，Eddie 的反向输入动作“treated as a link”。降低的是召唤和控制 Eddie 的门槛，核心操作没有被拿掉。Dustloop 称他“Perhaps the most complex character in the roster”；核心连段「"Oppose" Anti-Air Combo」被称为“the core of Zato's sandwich BNBs”，标 Hard，并注明难度标注以熟悉 Eddie 的移动和反向输入为前提。Strive 还带来了新问题：防御时同时按两个攻击键就是 FD，而 Zato 常常按住多个键，会意外进 FD，导致不能后走。

### 4.4 Ver.2.00（2026-04）：回头收紧

Strive 发售后，系统在不断扩充。Ver.1.29（2023）把 Burst 槽变成共用资源，加入 Wild Assault（50%，可从必杀技取消）和 Deflect Shield（50%）。Ver.2.00 的方向反过来。官方说明的理由是：以往更新不断扩充进攻手段和连段，一次命中就可能决定整局；2.00 要让需要冒险或准备的连段才有高回报。

主要改动：

- **限制 RC**：投技空挥、后撤步、无敌 Overdrive 不能 RC；对手不在受创状态时用紫 RC，之后 60 帧伤害和 Tension 获取被压低。官方说法是“limiting the return on Roman Cancel”。
- **移除 Wild Assault**：它“changed into something that required practice and knowledge to use to its full potential”（变成了要靠练习和知识才能用好的东西）。
- **加入 Counter Blitz**：只能在 Counter Hit 减速期间用，花 50% Burst。官方称它“intuitive”，同时要“provide more factors to weigh for players who value battle strategy and management of the Burst gauge”，并且“rewarding decision making based on the situation”。这是全部资料里**唯一一处官方明确说“用判断取代执行”**的地方。
- **统一受创判定**：除少数大体型角色外全部统一，理由是“some combos were only possible on certain characters”，改动“prioritizes the stability and reproducibility of combos”（详见 §6.3）。

两位角色的调整：

- **Sol**：重新调整连段结构，压低中距离连段的最大回报；新增派生技 Sidewinder Ignited；扩充立回手段；CL Fafnir 不再撞墙反弹；删掉 `Bandit Revolver → RRC → j.P → j.P` 这一强力中段择，理由是它超出了 Sol“打投二择”的定位。
- **Zato**：Float 不再耗槽，发射缓冲提前 5 帧，轨迹更容易让 Eddie 绕到对手身后；Pierce 第二段变慢，远距离 2S 反击一下打到墙破的路线没了；Sun Void 后 Eddie 恢复变慢，被防后更难接择。

此后的 Ver.2.03（2026-09-24）又专门放慢了 Eddie 主动收回后的回复，官方理由是“unsummoning Eddie to recover the gauge while sustaining strings allowed players to easily maintain powerful offense for extended periods”，要让槽管理“more critical”。

### 4.5 尚未公开的新手功能

2026-09-29 的 Developer's Backyard Vol.20 中，制作人宫内健宣布正在开发帮助新手和“觉得操作难”的玩家自由操控角色的大型新功能，预计年底公开实机；同时公布 Strive 全球玩家超过 400 万。本文写作时该功能尚未公开，这里只记录事实，不作预测。

---

## 5. BBTag：BB 角色走进简化系统（2018）

### 5.1 设计意图

BBTag 是 BB 角色第一次走进“改过系统”的游戏。森利道对 Kotaku 说，BBTag 要尽可能容易进入：整套操作重置，让所有人站在同一起跑线；整个概念是做一款“容许一点实力差距、依然好玩”的格斗游戏。

具体做法：

- **Smart Combo**：连按 5A / 5B 自动连段；
- 必杀技指令只剩 236、214、22 这类简单方向；
- 每个系统动作都绑在一两个键上；
- **删掉 Rapid Cancel**，连段延伸改靠援护（Active Partner Skill）和 Cross Combo；
- 决策集中到两条队伍资源上：Skill 槽和 Cross 槽。

### 5.2 两位角色

**Ragna**：Dustloop 称他是简单角色，214C 能把几乎任何命中转成完整连段。入门连段 `5AAA > 2C > 214A` 标 Very Easy。板中 Core「Meterless BnB」标 Easy，13 次按键，无角色限定、无位置限定，最紧的 `236A, 5A` 上界 10F，但同样要求 Dead Spike 晚命中，还要“have the opponent at just the right height”。Smart Combo 在这里成了手动连段的零件，而不是替代品。

**Rachel**：Sylpheed 保留下来，但输入变了：没有单独的风键，改成在特定招式之后按住方向。风仍是 4 格，空中不回复，还能吹动双方的搭档。Tempest Dahlia 不再看风格数、也不再回风。攻略要求“确认下段或中段时至少要有一格风”；Dustloop 对她连段的总评是“hard by BBTag standards”，板中的部分连段对 Es、全部 UNI 角色、全部 RWBY 角色无效。角色的特色机制和难度来源都被保留了下来。

### 5.3 Ver.2.0 的思路

森利道、石川辰则在 2019 年的 4Gamer 访谈中说，Ver.2.0 的 Cross Raid、Extra Assault 是给新手加的，同时希望高手也能用出花样；平衡思路是“抬高下限，而不是压低上限”。BBTag 乃至 ASW 这一时期的做法，大体都能用这句话概括。

### 5.4 支线：同一套简化工具

BBTag 常被视作“挪用了 DBFZ 的系统”。两作确实都是 ASW 2018 年的组队作品，都有自动连段、援护和更简单的指令，BBTag 也晚四个月发售。但 DBFZ 公布于 2017-06-11（E3），BBTag 公布于 2017-07-16（Evo），只差一个多月，开发期基本重叠。BBTag 的简化工具大多早有来源：例如连按同一键的自动连段可以追溯到 Persona 4 Arena（2012）和 BB 自己的 Beginner Mode（2010）。

更准确的说法是：DBFZ 和 BBTag 同期，用的是 ASW 这些年积累起来的同一套简化工具，而 BBTag 把它套在 BB 角色上时，保留了角色原有的特色机制。之后的 GBVS（2020）又加入技能键单键出必杀、以冷却时间为代价的做法。

---

## 6. 横向对比：四个角色的难度曲线

### 6.1 执行层：Core BnB

计数口径见 §1.4 与附录 B。“招式输入数”只数攻击、必杀技和派生，不数跳跃取消、冲刺、落地。各页面拆分粒度不同，C 的数量只能在同一角色内部纵向比较。

**Sol Badguy**

| 版本 / 位置 | Core BnB | 招式输入 | 衔接构成 | 最紧可算窗口 | 延迟 | 限定条件 | Dustloop 标注 |
|---|---|---|---|---|---|---|---|
| AC+R 板中 | Universal GV confirm（“One of the most important confirms to know”） | 10 | C5 / J4 / D1 | Clean Hit Sidewinder → j.S：≤ 32 − t F（t 为命中到落地的帧数）；非 Clean Hit 接不上 | 1（连打量控制） | Works on Everyone；但 Sidewinder 循环“every character must be hit at a very specific point on their body” | Medium |
| AC+R 板边 | Dustloop | 约 14 | C8 / J3 / D3 | j.D, j.D：≤3~9F | 3 | 19 人适用名单；按体重调延迟，极轻量级只能 1 轮；起手 ≤3 招 | Medium |
| Xrd 板中 | Core 1（“main punish midscreen”） | 7 | C6 / J1 / D2 | 不可算 | 2 | 点名 13 人要改做法；“214K needs to be delayed on most characters” | Medium |
| Xrd 板边 | Core「Dustloop」 | 12~13 | C7 / J4 / D3 | 不可算 | 3~4 | “The delay on 5H is character specific”；Fafnir 依赖高度和角色 | Medium |
| Strive 板中 | Core 2 | 5 | C3 / J1 / D0 | 不可算 | 0 | 只能 1 个普通技起手；没有反击时难确认 | Easy |
| Strive 板边 | Core 3 | 9 | C5 / J3 / D0 | 不可算 | 0（自动定时） | 板边；起手同上 | Easy |

Sol 的证据比较充分：到 Strive，招式数、手动延迟、角色限定三项同时下降，页面推荐了自动定时的路线。需要补充两点。第一，下降只发生在 Strive：板中的角色限定在 AC+R → Xrd 之间反而增加了（Works on Everyone → 点名 13 人）。第二，Strive 的难点部分转到了确认（“只能 1 个普通技”），确认难度没有统一计量。Xrd、Strive 缺受身不能数据，窗口层面没有可比的数字。

**Ragna the Bloodedge**

| 版本 / 位置 | Core BnB | 招式输入 | 衔接构成 | 最紧可算窗口 | 延迟 | 限定条件 | Dustloop 标注 |
|---|---|---|---|---|---|---|---|
| CT 板中 | Core「5D > 6A Link」 | 10 | C6 / L1 / D1 | `5D dc 6A` 按口径算不出（帧数缺失） | 1（冲刺取消） | 板中对 Carl、Arakune 无效 | Easy |
| CSE 板边 | Corner Only 第一条 | 16 | C4 / J3 / D1 | 不计算（无地面受创硬直） | 1 | 补正 >64% 才能用，另两档各一条路线 | 无 |
| CP Extend 板中 | Spin Kick 路线（角色页：“the go-to move for Ragna's midscreen combos”） | 17 | 以取消为主，J2、D1（按记法估计） | 未算 | 1 | Requires: -- | 无 |
| CP Extend 板边 | Corner Only 第一条 5B 起手 | 15 | C5 / J2 / D0 | `236D > 2C` ≤6F，Dead Spike 须晚命中 | 0 | 22C 要求击倒状态 | 无 |
| CF 板中 | Close-range midscreen combo | 13 | C4 / J1 / D1 | `Spin Kick, 5B` ≤19F | 1（延迟派生） | 连段已用时间长时第二个 j.CD 会掉 | Easy |
| CF 板边 | Core「B/C Starter Corner Combo」 | 约 16 | C3 / J2 / D2 | ≤19F；`236D > dc, 2C` 不可算 | 2 | 起手 ≤2 次打击 | Easy |
| BBTag 板中 | Core「Meterless BnB」 | 13（按键） | C6 / J1 / D1 | `236A, 5A` ≤10F，须晚命中 | 1 | 无角色、位置限定 | Easy |
| BBTag 板边 | Core「Meterless 5A Corner BnB」 | 约 14（按键） | 以取消为主，J1、D1 | 未算 | 1 | 板边 | Easy |

Ragna 的下降方式和 Sol 不同。正作的 Core BnB 没有变短，CSE 之后反而更长；“按补正值 / 连段时长切换路线”的要求从 CSE 到 CF 一直存在。下降体现在两处：一是最紧窗口放宽，CP Extend 的 Dead Spike 晚命中只有 ≤6F，CF 板中的 Spin Kick 后续宽到 ≤19F，标注也都是 Easy；二是选定的 Core 条目里角色限定消失了（CT 有，CP Extend、CF、BBTag 没有）。BBTag 才把指令整体压缩，但晚命中、打到合适高度这类要求仍在。另外，CT 的 Ragna 起点就很低，正作内部本来没有多少下降的空间。

**高难角色（对照）**

| 角色 | 版本 | 主力连段 | 要点 |
|---|---|---|---|
| Zato | AC+R | Shadow Gallery 循环（“Big damage”，Medium） | 每轮 24% 影子槽，满槽约 4 轮；“Difficulty depends on the opponent's air hurtbox”，板边要对 8 名角色换做法 |
| Zato | AC+R | Vice 板边三重中段 → 不可防（Medium） | FRC 窗口 3F；页面说 FRC“makes it consistent accross the cast and is easier than learning the character specific timing” |
| Zato | Xrd REV 2 | Dustloop 页面是空壳，无法按标准定义 | 社区指南的带 Eddie 连段，要在“拿伤害”和“收回再召唤拿起身压制”之间按对手二选一 |
| Zato | Strive | Oppose 对空核心连段（Hard） | C5 / D3，另有 2 处松键衔接（目押或延迟视情况）；两次 Leap 按字面就是整条 Eddie 槽 |
| Rachel | CP 1.x | “go-to BnB path” | `214C 66 5CC` 上界 3~10F；风要在确认前就花 |
| Rachel | CP Extend | 板边（不用风） / 板中（1 格风） | 上界 7~14F / 13~19F；D 各 3 处 |
| Rachel | CF | 板中 Basic / 板边 Basic | `4B → 5CC` 上界 21~24F；D 4 / 5 处；起始风 2 / 1 格 |
| Rachel | BBTag | Combo Theory 板中 / 板边 | Lobelia 后追打封顶 23F；D 4 / 2 处；风 2 / 1 格 |

高难角色这一侧，很窄的固定帧窗口在减少：Zato 的 2~3F FRC 只出现在 AC+R，Rachel 最紧的上界从 CP 1.x 的 3F 一路放宽到 CF 的 21F。但延迟、高度、出风时机这类衔接并没有减少。BBCF Rachel 的连段页里，“立刻”“尽量晚”“尽量高”“贴地”这类说法的密度，在同作 6 个连段页中最高；最优收尾被称为“dropped frequently even at high level”，原因写的是“height/distance/character specific”。页面也说她的连段“actually not that difficult, but may be unintuitive to new players”。BBCF Rachel“仍然有很多窄窗口”的体感，有充分的文本支持；只是这种“窄”多是相对于对手高度、出风和落地的时机，而不是帧数表上的固定窗口，目前没法用帧数量化。

### 6.2 帧顿、输入缓冲与取消窗口

前面的衔接分析没有计入两项不出现在帧数表里的因素：**帧顿**（命中瞬间双方定格的帧数）和**输入缓冲**（按键被系统记住、之后几帧内仍然有效的时长）。帧顿期间可以预输入取消，帧顿结束后立刻执行，所以帧顿越长，从“看到命中”到“必须输入下一招”的时间越多；缓冲越长，目押和“尽快出招”越宽松。

这一节的数据部分来自本机游戏文件。Xrd REV 2、Strive、BBCF 三作的角色脚本（BBScript）经解包、解密、解压后反汇编，逐招读出攻击等级和帧顿的例外修正；攻击等级与帧顿的对照表、持续与收招帧仍取自 Dustloop（各作的通用脚本没有取到，详见附录 B）。Strive 的资源包里保留了历代战斗版本的脚本，因此还能比较发售版、2.00 前最后一版、2.00 和现行版。

**帧顿**

| 作品 | 攻击等级 → 帧顿 | 地面通常技平均帧顿（脚本） |
|---|---|---|
| AC+R | Lv1~5：11~15 | —（无游戏文件） |
| Xrd REV 2 | Lv0~4：11~15 | Sol 13.4 / Zato 13.0 |
| Strive | Lv0~4：11~15 | Sol 13.8 / Zato 13.0（发售版与现行版相同） |
| BBCF | Lv0~5：**8~13** | Ragna 11.2 / Rachel 9.7 |

GG 三代的帧顿表完全相同，Strive 与 Xrd 的平均帧顿也几乎一样；Strive 从发售版到现行版，Sol、Zato 的地面通常技里只有 Sol 6S 降了一级。BBCF 同一等级比 GG 短 3 帧，Rachel 还有几招被单独压短（3C 8 帧、6C 3 帧）。

**取消窗口**

帧顿结束后还能取消多久，可以直接从脚本里读出来。三作的通常技都在招式开头登记取消选项，命中后开放；关闭点是脚本中的 `recoveryState` 指令。社区对 Xrd 引擎的逆向注释写明，Gatling 在命中后的帧顿中、或“until you call recoveryState”为止都有效，持续帧结束（`attackOff`）并不关闭窗口。把 `recoveryState` 之前的动画帧逐帧累加，再用碰撞文件（判定框）标出哪几帧有攻击判定，就能得到“持续帧结束后，收招里还有几帧可以取消”。按这个方法算出的发生帧与 Dustloop 帧数表几乎逐招一致，说明时间轴没有算错。

结果是：

- **Strive** 的 S、H 系通常技脚本里没有 `recoveryState`，P、K 系有。这正好对应 Dustloop 的规则：S、H 系整个收招都能取消，P、K 系受限。
- **Xrd** 是逐招设定：Sol c.S 收招后还有 10 帧、6P 16 帧、2D 20 帧可以取消，f.S、2S 只有 2 帧；Zato 的通常技多为 3~4 帧。
- **BBCF** 也会延伸到收招里：Ragna 5B、2B、3C 各 3 帧，5C、2C 各 2 帧，2D 8 帧；Rachel 5B 1 帧，6A 5 帧，5C 4 帧。Dustloop 的 Ragna 页把 5A、5B、5C、2A、2B 标为“Can late chain”（帧顿结束后过一会儿再派生），与此吻合。

把“命中后仍能输入取消的帧数”记为 W（假设在第一个持续帧命中，不含缓冲和反应时间）。AC+R 没有游戏文件，按 Dustloop 的“only during their active frames”计算：

| 确认点 | AC+R | Xrd REV 2 | Strive |
|---|---|---|---|
| Sol c.S | 14 | 24 | **30** |
| Sol 6P / f.S | 15（6P） | 31（6P） | 28（f.S） |
| Sol 2K | — | — | 14~16 |
| Zato 5P | 14 | 17 | 14~18 |
| Zato c.S | 17 | 20 | **29** |
| Zato 2K | — | 17 | 13~17 |

BBCF 的对应值：Ragna 5B 21、5C 17，Rachel 5B 16、6A 20。

Strive 的 P、K 系给的是区间：小的值按 Dustloop 的“只能在持续帧取消”计算，大的值按脚本中 `recoveryState` 的位置计算（持续帧后 2~5 帧）。两者相差 2~5 帧，可能是 Dustloop 的写法较粗，也可能是 `recoveryState` 在 Strive 里的作用与 Xrd 不完全相同，所以这里保留区间。

所以 Xrd → Strive 的变化，与其说是“放宽”，不如说是“统一”。Xrd 已经允许不少招式在收招中取消，但每招长短不一，玩家要逐招记；Strive 改成“S、H 系整个收招都能取消”的通用规则，再加上持续帧变长（c.S 2 帧 → 6 帧），Sol c.S 从 24 帧变成 30 帧，Zato c.S 从 20 帧变成 29 帧。P、K 系没有变宽，Zato 甚至略窄，这和 Strive Sol Core 2 的说明对得上：“only 1 normal can be used before 5K will fail to juggle … Can be difficult to hit confirm without a Counter Hit”。确认难度集中到了轻攻击起手这一处。BBCF 的帧顿虽短，但收招里留了几帧取消时间，确认窗口（16~21 帧）与 Xrd 的 Zato 同档。AC+R 的数字只按 Dustloop 的文字规则算，可能偏低（Sol 的帧数页另有标注“delayed cancel”的例外）。

**输入缓冲**

| 作品 | 按键缓冲 | 236 类指令的逐步时限 | 来源 |
|---|---|---|---|
| AC+R | 未记载（只记载起身 1 帧、受身 2 帧的预输入） | 未记载 | Dustloop |
| Xrd REV 2 | 3 帧（含当前帧）；松键同为 3 帧 | 2(5) 3(10) 6(10) | bbscript 配置文件中的社区逆向注释 |
| Strive | 5 帧；Eddie 的松键同为 5 帧 | 2(5) 3(10) 6(9) | Dustloop |
| BBCF | 按住攻击键时每帧重复输入，最多 4 帧 | 未记载 | Dustloop |

Xrd → Strive，按键缓冲从 3 帧增加到 5 帧，搓招的逐步时限几乎没变，Strive 放宽的只是按键时机。BBCF 的缓冲是另一种思路：不是按下后记住几帧，而是“提前按住”才生效。Dustloop 的原话是，提前按住，“that 1F link usually becomes a 4F link”，“some combos rely on Advanced Input to work at all”。玩家要先知道“得按住”，这本身就是一条知识门槛。

**小结**：GG 三代的帧顿没有变。Xrd 到 Strive 的放宽靠的是缓冲（3 → 5 帧）、更长的持续帧，以及把“收招中可取消”从逐招设定改成 S、H 系的通用规则；轻攻击的确认窗口和搓招时限都没有变。Ver.2.00 的“收紧”也没有动帧顿。BBCF 的帧顿每一级比 GG 短 3 帧、缓冲要靠按住，但收招里留有几帧取消时间，确认窗口与 Xrd 同档，BB 的难度并不主要来自“确认时间更短”。

### 6.3 角色限定：GG 收窄，BB 不变

较旧的格斗游戏（尤其是 ASW 的游戏）的连段常常“只对某些角色成立”：对手的体重、受创判定、空中受创判定不同，同一套连段的延迟量、能打几轮、能不能接上都会变。这类限定是门槛的一部分：玩家不光要会打，还要记住对谁怎么打。

为了看这类门槛的跨代变化，本文统计了 Dustloop 连段页中带角色限定注释的条目比例。范围是四个研究角色的全部可得连段页，另取同作的对照角色（GG：Ky、Potemkin、May；BB：Jin、Noel、Hakumen、Taokaka），避免只看四个角色造成偏差。一个连段条目算 1 条；关键词识别“does not work on”“only works on”“character specific”“weight”“hurtbox”、其他角色名等，以及编者填写的“Works on”栏。人工抽查 40 条，精确率约 88%。

| 版本 | 研究角色 | 对照角色 |
|---|---|---|
| AC+R | 40%（62 / 154） | 31%（89 / 289） |
| Xrd REV 2 | 37%（63 / 170） | 32%（54 / 167） |
| Strive（2.00 后页面） | **3%**（12 / 347） | **8%**（34 / 441） |
| BBCSE | 18%（21 / 116） | — |
| BBCP 1.x | 22%（16 / 74） | — |
| BBCP Extend | 10%（7 / 69） | 0%（0 / 50） |
| BBCF | 22%（73 / 335） | 21%（150 / 719） |
| BBTag | 14%（10 / 71） | 14%（17 / 122） |

（BBCT 的样本太小，Ragna 页只有 13 条，未列入。）

**GG 线的下降有三个方向一致的证据**：

1. **计数**：研究角色和对照角色都从三到四成降到个位数。Strive 条目的说明平均反而更长（研究角色每条约 284 字符，AC+R 208、Xrd 218），所以这不是“说明写得少”造成的。
2. **编者填写的“Works on”栏**：AC+R Sol 页 58 条中 29 条不是全员（含“TBD (Lightweights)”这类按体重分档的写法），Xrd Sol 页 84 条中 36 条；Strive 的 Sol、Zato、Ky 三页共 405 条，**没有一条**不是全员。
3. **系统层与官方表态**：AC+R 有 6 档重力修正（Dustloop：“Also known as "weight"”，“only for combos”），Xrd 有 5 档体重，两作的受创判定都因角色而异。Strive 2.00 把受创判定并成两档，官方说明原话：

> “Previously, due to the differing hurtboxes between characters, some combos were only possible on certain characters, or could connect unexpectedly under certain conditions. This made for unstable combos that could not be consistently recreated.”
>
> “This change prioritizes the stability and reproducibility of combos.”

这段话也说明，2.00 之前的 Strive 同样存在角色限定问题；Dustloop 页面只能反映 2.00 之后的状态。

**BB 线没有趋势**：CSE 18%、CP 1.x 22%、CP Extend 10%、CF 22%、BBTag 14%。CF 的 Ragna 页是 31%，是 BB 研究角色里最高的（主要来源是 Nightkasu：这是每个角色都有单独路线的角色限定连）。

BB 各作的受创判定差异一直存在；CF 和 BBTag 统一的只是 Combo Rate（CF 全员 60%、BBTag 全员 80%），它只影响伤害，不影响连段能否成立。

Rachel 页的比例看起来偏低（CF 6%），但她的角色限定大量写在长篇说明里，例如一条路线“does not work on: Arakune, Carl, Es, Hakumen, Jin, Nine, Noel, Tager, Taokaka, Lambda, Mu, Nu”，按条目计数会低估。各角色体型不同，到 BBCF 仍有大量角色限定，这一点没有随代数改变。

**位置和时机的要求也没有减少**。两条线的板边连段占比各作都在 20%~40% 之间波动；GG 线标注距离、高度要求的注释反而上升（研究角色 8% → 19% → 33%），一部分来自 Strive 的 Clean Hit 新加的高度要求。标注“延迟”的条目也没有减少（GG 研究角色 27% → 44% → 41%）。所以能确定的只是：**GG 线把“角色差异”这一类门槛系统性地削减了**；至于执行难度是否被判断取代，数据看不出来。

这组计量的局限要说清楚：Dustloop 各页由不同编者维护，CP Extend 页几乎只有记法（平均每条 177 字符），BBCT 的部分页面是旧粉丝 wiki 的原样搬运；旧作注释少可能让旧作的限定被低估，Strive 模板默认填“Everyone”又可能让 Strive 的限定被低估。条目比例反映的是页面构成，不是实战中遇到限定的频率。

### 6.4 决策层：资源与判断

**Zato 的影子槽 / Eddie 槽**

| | AC+R | Xrd REV 2 | Strive（2.00 后，含 2.03） |
|---|---|---|---|
| 上限 | 8000 点 | 6000 | 3000 HP |
| 维持消耗 | 每帧 8（满槽待机约 1000 帧） | 每帧 10（约 600 帧） | 每帧 3（约 1000 帧） |
| 单招占槽 | 12%~30%（`]H[` 等除外） | 11%~35%（`]D[` 100%） | Pierce 1/3、Leap 1/2、Oppose 打完耗光 |
| 主动收回 | 快速回复，286 帧回满 | 白槽，快速回复 | 白槽；2.03 起变慢 |
| 被打 | 影子被打 → 慢速回复，445 帧，回满前不能召唤；本体被打 → 快速回复 | Eddie 被打 → 红槽，约 6 秒，期间不能召唤 | Eddie **或 Zato** 被打 → 红槽，273 帧，回满前或用 Sun Void 前不能召唤 |
| 召唤 / 收回 | 236X，在场时再输 236X 收回 | 同左 | 214H 召唤 / 收回；236X 召唤并出招 |
| 反向输入缓冲 | 页面未记载 | 页面未记载 | 标准 4 帧，按目押处理 |

操作门槛确实在降：收回改成单独的 214H（以前在场时再输 236X 收回，要一直按住键，否则松键会先触发 Eddie 的招式），反向输入有了明文缓冲，Float 不再耗槽。槽的结构却四代未变：维持耗槽、出招耗槽、主动收回快回、被打进入锁召唤的慢回。Strive 甚至把本体被打也算进红槽。单招占槽的比例变大，一条槽只够两三次 Eddie 攻击，每次松键都更像一次决定。官方还两次以槽管理为由收紧回复：1.29 延长槽归零后的冷却，说要“更小心地管理”；2.03 放慢主动收回后的回复，要让槽管理“more critical”。

**Rachel 的风**

| | BBCT | BBCSE | BBCP | BBCF | BBTag |
|---|---|---|---|---|---|
| 格数 | 资料缺（按格消耗） | 4 | 4 | 4 | 4 |
| 回复 | 资料缺 | 只在地面，越久越快 | 只在地面；Overdrive 中加快 | 地面约 220 帧 / 格，空中慢 7~8 倍 | 慢，空中不回 |
| 输入 | D | 方向 + D，八方向 | 同左 | 同左，任何动作中可出 | 特定招式后按住方向 |
| 补风超必杀 | 无 | Tempest Dahlia，Lv1 回 2~3 格 | Tempest Dahlia | 回 2 格 | 不再回风 |
| 社区连段标注 | 无 | `(NW)` / `(1-4)` | Requirements: N wind | Starting / Net Wind | 方向记号 |

风的规格从 CS 世代到 BBTag 基本没变；变的是“怎么出风”和“风能做什么”。风能影响的对象越来越多：CP 的 Pumpkin 只靠风发动，CF 的 Lotus 附着后 5D 变成追踪风、Ivy 被风吹动后伤害提高，BBTag 能吹动双方搭档。主力连段用风一直是 0~2 格，没有变多；社区的记账方式却从“需几格”变成了“起始 + 净值”。

**通用系统**

| | 取消类资源 | Burst | 简易操作 |
|---|---|---|---|
| AC+R | RC 50%；FRC 25%，窗口平均约 2 帧 | Blue / Gold | 无 |
| Xrd REV 2 | 三色 RC，黄 RC 25% 几乎随时可用 | Blue / Gold；新增 Burst Overdrive | REVELATOR 起有 Stylish（受伤 +20%） |
| Strive 2.00 前 | 四色 RC，均 50% | 1.29 起与 Wild Assault、Deflect Shield 共用一条槽 | 刻意不做 Stylish |
| Strive 2.00 后 | RC 加用途限制 | 移除 Wild Assault，加入 Counter Blitz | 同上；新手功能开发中 |
| BBCT | Rapid Cancel 50 Heat | 与 Barrier 绑定，用后本回合处于 Danger | 无 |
| BBCS / CSE | 同上 | 图标计数，整场最多 2 个 | Stylish，禁用 Burst |
| BBCP / CPE | 同上；新增 Crush Trigger | 会回复；中立时为 Overdrive | Stylish，禁用 RC |
| BBCF | 同上 | 只能被打时用；Guard Cancel Overdrive、Active Flow | Stylish，系统全开 |
| BBTag | 无 Rapid Cancel | Cross Burst（花队伍资源） | Smart Combo、简化指令内置 |

两条线的走向不同。GG 一线是先把执行门槛换成判断，再收窄判断的范围：AC+R 用 2 帧窗口把便宜的取消锁起来，Xrd 用黄 RC 把它变成随时可用的 25% 选项，Strive 2.00 再明文限制 RC 的用途，并用 Counter Blitz 取代“需要练习和知识”的 Wild Assault。BB 一线反而一路往上加：Burst 从和 Barrier 绑在一起的一次性赌注，变成会回复、要和 Overdrive、Active Flow 抢同一条槽的资源。BBTag 才第一次拿掉执行型的取消。

“难度从执行转向决策”**不能作为全文结论**。它在系统层有一处官方表态（Counter Blitz），在 Zato 的槽规则上有两次官方收紧作佐证；但 §6.1~§6.3 的数据显示，延迟、位置这类执行要求并没有减少，Strive Zato 的核心连段仍标 Hard，BBCF Rachel 的时机要求仍然很多。Zato 的资源账在 Strive 其实比 AC+R 简单（AC+R 有两套影子、Exhaustion 溢出槽和 FRC）；如果按“要记住的规则数”算，Strive 的决策负担并不更重，按“每个动作的代价”算才更重。

### 6.5 汇总表：下限与上限

| 角色 | 版本 | 执行难度（核心连段） | 角色限定 | 资源与判断 |
|---|---|---|---|---|
| Sol | AC+R | 板中 10 招、板边约 14 招；板边 j.D 上界 3F 起 | 19 人适用名单，按体重调延迟 | 连段不耗资源；FRC、Burst 安全路线是额外的知识 |
| Sol | Xrd REV 2 | 板中 7 招、板边 12~13 招；窗口不可算 | 点名 13 人；5H 延迟因角色而异 | 按高度和角色在两条板边路线间选择 |
| Sol | Strive | 板中 5 招、板边 9 招；无手动延迟 | 无；改成“只能 1 个普通技”的计数规则 | 确认要靠单下 c.S 或反击 |
| Ragna | BBCT | 10 招，含冲刺取消后的目押 | 对 Carl、Arakune 无效 | 不耗资源 |
| Ragna | BBCSE | 板边 16 招 | 按补正值分三条路线，另有多条角色限定路线 | 板中常要花 RC |
| Ragna | CP Extend | 板中 17 招、板边 15 招；Dead Spike 晚命中 ≤6F | 选定条目无 | 不耗资源 |
| Ragna | BBCF | 13~16 招；Spin Kick 后续 ≤19F | 选定条目无，但全页 31% 带角色限定 | 按起手长度切换路线 |
| Ragna | BBTag | 13~14 次按键；≤10F 且须晚命中 | 无 | Skill 槽 |
| Zato | AC+R | 影子循环 Medium；不可防 FRC 2~3F | 板边按角色分版本 | 影子槽每轮 24%；Tension 补槽 |
| Zato | Xrd REV 2 | 页面空壳，Dustloop 无可用数据 | 部分对手不建议用收回体系 | 按对手在伤害和起身压制间二选一 |
| Zato | Strive | 核心连段 Hard，延迟 3 处、松键衔接 2 处 | 少；部分优化路线标“character specific” | 两次 Leap 耗整条槽；本体被打也进红槽 |
| Rachel | CP 1.x / CP Extend | 上界 3~10F → 7~14F | 部分路线对 Hakumen、Arakune 无效 | 风确认前先花，或用 50 Heat 收尾 |
| Rachel | BBCF | 上界 21~24F；延迟 4~5 处；大量“立刻 / 尽量高”要求 | 大量写在长说明里 | 按起始风量和净风量选路线 |
| Rachel | BBTag | 封顶 23F；延迟 2~4 处 | 成组的角色限定 | 确认时至少留 1 格风；空中不回风 |

---

## 7. 综合：深度留在了哪里

### 7.1 两条路的比较

**外挂简易模式**（BB 的 Beginner / Stylish、Xrd 的 Stylish）不碰原系统，代价是它和竞技层是割裂的：Xrd 的 Stylish 要背受伤 +20% 和失去无敌的惩罚，BB 的 Stylish 在竞技中不用。它的演变也说明了一件事：CSE 禁用 Burst，CP 禁用 RC，CF 系统全开。外挂模式能省掉的是执行，系统层的判断最终还是要交给新手。

**直接改系统**（Strive、BBTag）让所有人在同一套规则里玩，新手和高手的差距从“会不会某个操作”变成“同一个操作用得好不好”。代价是平衡点一旦放错就要回头改：Strive 1.29 加入的 Wild Assault 本想做成直观的系统，结果“required practice and knowledge”，2.00 只能移除。

### 7.2 两条线的不同结果

GG 一线改了系统，角色限定也跟着收窄。Sol 的核心连段在 Strive 变短、去掉手动延迟、去掉大部分角色限定；Strive 2.00 再用统一受创判定把“只对特定角色成立的连段”系统性地清掉。从游戏文件看，Strive 并没有加长帧顿，放宽来自 5 帧缓冲，以及把 Xrd 逐招不同的收招取消统一成 S、H 系的通用规则，而轻攻击确认和搓招时限保持原样。

BB 正作保留了体型差异和角色限定，难度基本维持。Ragna 的核心连段在正作里没有变短，变化主要是最紧窗口放宽；真正的简化集中在 BBTag。BBTag 的 Rachel 依然被称为“hard by BBTag standards”，Ragna 的手动连段依然要求晚命中和合适的高度。

两条线有一个共同点：**高难角色的核心机制都被完整保留**。Zato 的槽结构、反向输入，Rachel 的 4 格风、空中回复限制，从各自登场到最新作都在。降低的是“不出错”的门槛（收回键、输入缓冲、出风输入），不是这些角色的玩法本身。

### 7.3 平衡点要持续调整

Strive 是最直接的例子：

| 时间 | 方向 | 事件 |
|---|---|---|
| 2021 | 降门槛 | 发售：刻意不做 Stylish，连段变短、Gatling 受限、单次伤害提高 |
| 2023（1.29） | 加系统 | Wild Assault、Deflect Shield 加入，Burst 槽成为共用资源；同时延长 Eddie 槽归零后的冷却 |
| 2026-04（2.00） | 收回报 | 限制 RC，移除 Wild Assault，加入 Counter Blitz，统一受创判定 |
| 2026-09（2.03） | 收资源 | 放慢 Eddie 主动收回后的回复 |
| 2026-09（公布） | 再降门槛 | 新手向的大型新功能开发中 |

五年里，开发者在“让新手进场”和“让肯练的人得到回报”之间来回调整了好几次。玩家群体和版本内容一变，简单与深度之间的平衡点就要重新找。

### 7.4 结论的适用边界

- 本文只覆盖 ASW 的两个系列、四个角色。
- CS 世代缺帧数数据；BBCT 的帧数数据大面积缺失，Rachel 的 CT 连段只有二手资料；Xrd Zato 的连段页是空壳。
- Strive 仍在变化，新手功能公开后，本文对“改系统”这条路的判断可能需要补充。
- 窗口计算只到上界；Xrd、Strive 缺受身不能时间，窗口层面的跨代比较基本缺失。
- 角色限定的计量依赖 Dustloop 注释，页面风格不同，且只能看到各页的现行版本。
- 帧顿与缓冲的比较只覆盖有游戏文件的三作；取消窗口的终点按脚本中 `recoveryState` 的位置推断，依据是社区对 Xrd 引擎的逆向注释，BBCF 与 Strive 沿用同一解释；这一解释与 Strive S、H 系和 P、K 系的规则差别、Dustloop 的“late chain”标注都吻合，但 Strive P、K 系按此推断比 Dustloop 的说法多 2~5 帧，正文保留区间。Xrd 的缓冲数据也来自社区逆向注释。

---

## 8. 未决问题

- CS 世代的帧数数据，可用 Steam 版 CS Extend 的训练模式实测补齐。
- BBCPE 帧数页的计时数值大多沿用 CP 1.10，CP Extend 的实际帧数有待实测。
- Strive 新手功能公开后，是否改变本文对“改系统”路线的判断。
- 石渡太辅 4Gamer 访谈的日文原文核对；Fami 通“不需要 Stylish”原访谈的出处。
- BBCT 的风槽规则、Burst 次数；Xrd 中 Zato 本体被打时 Eddie 进白槽还是红槽；Strive 2.03 白槽回复的新数值。
- 确认难度（能看几下、退路是否安全）还没有统一的计量方法；§6.2 的取消窗口只是其中“时间”这一面。
- 三作通用脚本中的缓冲与帧顿常量，可进一步从可执行文件或通用脚本核对。

---

## 附录 A：版本与数据来源

| 系列 | 版本 | Dustloop 代码 | 帧数数据可用性 |
|---|---|---|---|
| GG | 初代 | GGML | 有命中有利帧；只作定性背景 |
| GG | GGX | GGX | 无命中有利帧和受创硬直；Steam 无售 |
| GG | XX AC+R | GGACR（Zato 页名为 Eddie） | 命中有利帧字段为空，用“被防有利帧 + 受创硬直 − 防御硬直”推算；有受身不能时间和 FRC 窗口 |
| GG | Xrd REV 2 | GGXRD-R2 | 无命中有利帧、无受身不能时间 |
| GG | Strive | GGST | 有命中有利帧；无受身不能时间。部分条目未随 2.00 更新（残留 Wild Assault 等），引用时已避开 |
| BB | CT | BBCT | 大多缺防御硬直；Rachel 的硬直与受身不能全空 |
| BB | CS Extend | BBCSE | 无地面受创硬直；Rachel 页标“TODO: Correct frame data” |
| BB | CP 1.x | BBCP | 有受创硬直；作参照 |
| BB | CP Extend | BBCPE | 有受创硬直；计时数值大多沿用 CP 1.10 / 1.1 |
| BB | CF | BBCF | 有受创硬直与受身不能时间 |
| BB | BBTag | BBTag | 有受创硬直与受身不能时间 |

Steam 在售（2026-10-12）：GG 系列有 GUILTY GEAR（1998）、X2 #Reload、XX AC+R、Xrd SIGN、Xrd REV 2、Strive；BB 系列有 CT、CS Extend、CP Extend、CF、BBTag。没有 GGX。

## 附录 B：连段拆分方法与原始数据

**命中有利帧**：GGML、Strive 直接读取；AC+R、BBCF、BBTag 用“被防有利帧 + （地面受创硬直 − 防御硬直）”推算；CSE 不计算。

**窗口公式**：

- 目押（L）：窗口 = 命中有利帧 − 下一招发生 + 1；≤0 表示接不上。
- 空中追打（J）：上界 = 受身不能时间 − 本招命中后剩余硬直 − 下一招发生 + 1。剩余硬直在持续第一帧命中时为（持续 − 1）+ 收招，在持续最后一帧命中时为收招，因此结果常写成区间。设置物、飞行道具命中后的追打一律按 J 处理，上界写成命中帧的函数。
- 所有上界都未扣受创递减、冲刺帧数和高度影响。

**跨角色比较的限制**：各页面拆分粒度不同，C 的数量只能在同一角色内部比较；Zato 的松键衔接在 AC+R 记为延迟、在 Strive 按 Dustloop 说明记为目押或延迟，L 的数量不能跨版本比较；Rachel 的“出风”一律记为 D，她的 D 数天然偏高。

**帧顿与缓冲（§6.2）**：

- Xrd REV 2（v2.11）：`SOL_DAT_SF.upk`、`ZAT_DAT_SF.upk` 按 gdkchan/GGXrdRevelatorDec 的算法解密，再解 LZO1X 压缩块，从包体切出 BBScript。
- Strive：用 repak 和社区公开的 AES 密钥，只从 `pakchunk0-WindowsNoEditor.pak` 解出 Sol、Zato 的 `BBS_*.uexp`；取目录 `100`（发售版）、`409`（2.00 前最后一版）、`500`（2.00）和无编号的现行版。目录编号与战斗版本的对应关系按命名推断。
- BBCF：`char_rg_scr.pac`、`char_rc_scr.pac` 去掉 `DFASFPAC` 头后 zlib 解压，再拆 FPAC 容器。
- 三作脚本用 super-continent/bbscript v1.5.8 反汇编，逐个状态读取攻击等级与 `hitstop`、`shortHitstop`、`enemyHitstopAddition` 等修正；脚本中的攻击等级与 Dustloop Cargo 逐招核对一致。
- 三作的通用脚本没有取到，所以“攻击等级 → 帧顿”对照表取自 Dustloop；持续、收招帧取自 Dustloop；碰撞文件只用来定位攻击判定所在的帧，以计算取消窗口（见下）。Eddie、Rachel 设置物等独立物体的脚本没有提取。
- 取消窗口的终点：逐帧累加脚本中 `recoveryState` 之前的动画帧数，得到它所在的帧；判定框取自碰撞文件（BBCF 的 `char_*_col.pac`，Xrd 包体内的 FPAC，Strive 的 `COL_*.uexp`，均为 JONB 格式，读取每帧的攻击判定数量）。由此算出的发生帧与 Dustloop 帧数表几乎逐招一致。计算脚本与逐招结果随研究资料保存。
- 取消窗口 W = 帧顿 + （`recoveryState` 所在帧 − 1 − 发生帧）；脚本中没有 `recoveryState` 的招式（Strive S、H 系）W = 帧顿 + 持续 − 1 + 收招；AC+R 按 Dustloop 规则 W = 帧顿 + 持续 − 1。假设在第一个持续帧命中，不含缓冲与反应时间。

**原始数据**：帧数取自 Dustloop Cargo 数据库导出；连段、角色、系统页取自 Dustloop 页面原文（2026-10-12）。逐段拆分表、注释计量脚本与逐条结果、游戏文件解析工具与逐招帧顿数据随研究资料保存。

## 附录 C：参考来源

**官方**

- Guilty Gear -Strive- Ver.2.00 更新公告（2026-04-08）：<https://www.guiltygear.com/ggst/en/news/post-2851>
- Guilty Gear -Strive- Ver.2.03 更新公告（2026-09-24）：<https://www.guiltygear.com/ggst/en/news/post-5223>
- Developer's Backyard Vol.20（2026-09-29）：<https://www.guiltygear.com/ggst/en/news/post-5297>
- BBCF Rachel 官方说明书：<https://www.blazblue.jp/cf/manual-ps4/character/rachel.html>
- BBTag 在 Evo 2017 公布：<https://www.arcsystemworks.com/blazblue-cross-tag-battle-announced-at-evo-2017>

**访谈与报道**

- 石渡太辅 4Gamer 访谈英译（Jiyuna，2019-12）：<https://jiyunajp.wordpress.com/2019/12/01/guilty-gear-strive-daisuke-ishwatari-interview-while-protecting-the-spirit-of-guilty-gear-we-aim-to-broaden-the-field-of-players-who-can-enjoy-the-game>
- 石渡太辅 ArcREVO 2019 访谈视频：<https://www.youtube.com/watch?v=iusmy9mITvM>
- 石渡太辅 Eurogamer 访谈：<https://www.eurogamer.net/with-guilty-gear-strive-daisuke-ishiwatari-aims-to-make-one-of-the-most-complex-fighting-games-around-finally-accessible>
- 森利道 Kotaku 报道（2018）：<https://kotaku.com/blazblue-cross-tag-battle-is-dead-simple-by-design-1826579397>
- 森利道、石川辰则 4Gamer 访谈英译（2019-11）：<https://blazblue.wiki/wiki/4Gamer_BlazBlue:_Cross_Tag_Battle_Interview_with_MORI_Toshimichi_and_ISHIKAWA_Tatsunori>（日文原文：<https://www.4gamer.net/games/402/G040206/20191119085/>）
- Kotaku，BBCS Beginner Mode（2010）：<https://kotaku.com/blazblues-new-beginner-mode-is-a-button-mashers-dream-5606556>
- Siliconera，Xrd REVELATOR Stylish：<https://www.siliconera.com/guilty-gear-xrd-revelators-stylish-educational-looks-good>
- DBFZ 自动连段与 P4A 的渊源（Dagon Dogs）：<https://dagondogs.com/2018/03/14/dragon-ball-fighterz-2018-in-depth-review>

**工具**

- super-continent/bbscript（v1.5.8，含 `ggrev2.ron`、`ggst.ron`、`bbcf.ron` 配置）：<https://github.com/super-continent/bbscript>
- gdkchan/GGXrdRevelatorDec：<https://github.com/gdkchan/GGXrdRevelatorDec>
- trumank/repak（v0.2.3）：<https://github.com/trumank/repak>

**社区资料**

- Dustloop Wiki：角色页 `https://www.dustloop.com/w/<代码>/<角色名>`，其下 `/Frame_Data`、`/Combos`；系统页 `<代码>/Mechanics`、`<代码>/Controls`。本文用到的代码见附录 A。
- BlazBlue Fandom Wiki（BBCT Rachel 连段，二手资料）。
- Zato Discord 新手指南（prk`）、EventHubs Xrd REV 2 Zato 指南（Xrd Zato 的补充资料）。
