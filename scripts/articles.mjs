// Root Markdown files and their assets are the only sources for full articles.
export const articles = [
  {
    slug: 'ftg-demo',
    source: 'FTG_Demo_角色设计实验.md',
    download: 'ftg-demo.md',
    title: 'FTG 角色原型：D 系位移与连段选路 · 全文',
    description: '用 D 系组织位移攻击，在双换边搬运、抵墙短线与版边保位之间选路；从八样本机器回放与一次调参，看角色方案怎样落地。',
    sections: 7,
    appendices: ['A', 'B']
  },
  {
    slug: 'sts',
    source: 'STS_两代设计方向.md',
    download: 'sts-overview.md',
    title: '《杀戮尖塔》两代设计方向 · 全文',
    description: '把静默猎手与反无限 BOSS 两篇个案并排：二代的限制分别作用于构筑取得与战斗使用，普通运转也承担连带成本。',
    sections: 6,
    appendices: ['A']
  },
  {
    slug: 'sts-silent',
    source: 'STS_静默猎手拆解案.md',
    download: 'sts-silent-hunter.md',
    title: '静默猎手两代拆解 · 全文',
    description: '二代怎样改变静默猎手的构筑选择：从取得到启动，对照官方目标与补丁记录，检查抽弃供给、精简经济与持续收益。',
    sections: 9,
    appendices: ['A', 'B']
  },
  {
    slug: 'sts-boss',
    source: 'STS_反无限BOSS拆解案.md',
    download: 'sts-anti-infinite-boss.md',
    title: '反无限 BOSS 拆解案 · 全文',
    description: '时间吞噬者、门扉缔造者与永世沙漏怎样限制循环，又各自给玩家留下多少应对空间。',
    sections: 9,
    appendices: ['A', 'B']
  },
  {
    slug: 'doom',
    source: 'DOOM怪物状态机拆解案.md',
    download: 'doom-monster-state-machine.md',
    title: 'DOOM 怪物状态机拆解案 · 全文',
    description: '读公开源码的状态表与固定随机表，拆解 DOOM 的怪物如何用同一张表同时做出「压得住」与「打不过」。',
    sections: 9,
    appendices: ['A', 'B']
  },
  {
    slug: 'bbcf-ragna',
    source: 'BBCF_Ragna拆解案.md',
    download: 'bbcf-ragna.md',
    title: 'BBCF 角色拆解案：拉格纳 · 全文',
    description: '拆解拉格纳如何以优秀的中近距离技能取得接触，再把贴身压制转化为伤害、吸血与下一次进攻，以及这套打法的代价。',
    sections: 8,
    appendices: ['A', 'B']
  },
  {
    slug: 'bbcf-rachel',
    source: 'BBCF_Rachel拆解案.md',
    download: 'bbcf-rachel.md',
    title: 'BBCF 角色拆解案：雷琪儿 · 全文',
    description: '拆解雷琪儿如何用风协调本体与设置物，把空间控制转化为接近和起攻，并比较她与奈茵、莉琪、μ-12 的打法差异。',
    sections: 8,
    appendices: ['A', 'B']
  },
  {
    slug: 'shooting',
    source: '射击的进化史.md',
    download: 'shooting-evolution.md',
    title: '射击的进化史 · 全文',
    description: '从太空侵略者讲到战地风云 6，沿命中与随机、容错与记账两条线，看一次交火的结果怎样一步步被交给玩家或系统。',
    sections: 11,
    firstSection: 1,
    appendices: ['A', 'B', 'C']
  },
  {
    slug: 'turn-based',
    source: '回合制的进化史.md',
    download: 'turn-based-evolution.md',
    title: '回合制的进化史 · 全文',
    description: '从普鲁士兵棋讲到 2026 年，沿时间看回合制怎样把顺序、次数与概率交给玩家，再看女神异闻录、轨迹、幽浮三个系列和独立游戏的做法。',
    sections: 17,
    firstSection: 1,
    appendices: ['A', 'B', 'C']
  },
  {
    slug: 'asw',
    source: 'ASW角色变迁拆解案.md',
    download: 'asw-character-evolution.md',
    title: '从角色看系列的变迁与格斗游戏的发展 · 全文',
    description: '以 Sol、Zato、Ragna、Rachel 四个角色的历代变化，分析 Arc System Works 如何在降低门槛与保留系统深度之间取舍。',
    sections: 9,
    appendices: ['A', 'B', 'C']
  },
  {
    slug: 'valheim',
    source: 'Valheim战斗系统拆解案.md',
    download: 'valheim-combat.md',
    title: 'Valheim 战斗系统拆解案 · 全文',
    description: '从伤害结算、区域遭遇与资源成本，分析 Valheim 战斗系统中的风险与收益。'
  },
  {
    slug: 'valheim-boss',
    source: 'Valheim_BOSS拆解案.md',
    download: 'valheim-boss.md',
    title: 'Valheim BOSS 拆解案 · 全文',
    description: '拆解 Valheim 八个 BOSS 如何共用一套野外 AI 制造难度，并把第六关的蛊虫之后改造一遍、用遭遇战模拟验证改动前后。',
    sections: 9,
    appendices: ['A', 'B', 'C', 'D']
  },
  {
    slug: 'valheim-defence',
    source: 'Valheim_近战防御管线改造.md',
    download: 'valheim-defence.md',
    title: 'Valheim 近战防御管线改造 · 全文',
    description: '只改近战防御公式（护甲、格挡、架势），能不能拆掉困难难度的死亡断崖？用同一台遭遇战模拟器跑出改动前后。',
    sections: 11,
    appendices: ['A', 'B', 'C', 'D']
  },
  {
    slug: 'bf6',
    source: 'BF6_Gunplay_拆解案.md',
    download: 'bf6-gunplay.md',
    title: '战地风云 6 Gunplay 拆解案 · 全文',
    description: '结合文件取证、实测录像与数值模型，分析战地风云 6 的后坐力、扩散和枪法反馈。',
    assetDirectory: 'BF6_Gunplay_拆解案_assets',
    images: {
      'aim_paths.png': 'M433 与 VCR-2 的实测准星轨迹与后坐力拟合',
      'mag_sd.png': '弹匣间横向离散与全宽、±V 两种随机模型的比较',
      'paths_build.png': 'VCR-2 常用配装连续射击的准星轨迹',
      'spread_vs_pred.png': '实测弹着点水平离散与扩散预测值的比较',
      'engage_dist.png': '两局 AI 对局交战距离的上界分布',
      'weekly_reviews.png': 'Steam 周好评率与版本变化',
      'players_monthly.png': 'Steam 月均在线人数变化'
    }
  }
]
