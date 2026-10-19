// Root Markdown files and their assets are the only sources for full articles.
export const articles = [
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
