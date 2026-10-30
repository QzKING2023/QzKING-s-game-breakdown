import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'QzKING · 游戏拆解',
  description: '以战斗策划为方向，研究角色招式、敌人行为与资源系统。通过拆解案例与个人原型，展示规则分析、设计取舍与验证。',
  base: '/QzKING-s-game-breakdown/',
  cleanUrls: false,
  srcExclude: ['public/**'],
  head: [['meta', { name: 'theme-color', content: '#f6f5f0' }]],
  themeConfig: {
    siteTitle: 'QzKING / 游戏拆解',
    nav: [
      { text: '首页', link: '/', activeMatch: '^/$' },
      {
        text: '文章',
        activeMatch: '^/(sts|sts-silent|sts-boss|doom|bbcf-ragna|bbcf-rachel|shooting|turn-based|asw|bf6|valheim|valheim-boss|valheim-defence|ftg-demo)/',
        items: [
          { text: '精选案例', items: [
            { text: 'BBCF 拉格纳', link: '/bbcf-ragna/' },
            { text: 'Valheim BOSS 拆解与改造', link: '/valheim-boss/' },
            { text: '静默猎手两代拆解', link: '/sts-silent/' }
          ] },
          { text: '设计实验', items: [
            { text: 'FTG 角色原型：D 系位移与连段选路', link: '/ftg-demo/' }
          ] },
          { text: '更多战斗拆解', items: [
            { text: 'BBCF 雷琪儿', link: '/bbcf-rachel/' },
            { text: 'DOOM 怪物状态机', link: '/doom/' },
            { text: '尖塔反无限 BOSS', link: '/sts-boss/' },
            { text: 'Valheim 防御管线改造', link: '/valheim-defence/' },
            { text: 'BF6 Gunplay', link: '/bf6/' },
            { text: 'Valheim 战斗系统', link: '/valheim/' }
          ] },
          { text: '系列与品类', items: [
            { text: '《杀戮尖塔》两代设计方向', link: '/sts/' },
            { text: 'ASW 角色变迁', link: '/asw/' },
            { text: '射击的进化史', link: '/shooting/' },
            { text: '回合制的进化史', link: '/turn-based/' }
          ] }
        ]
      },
      { text: '拆解方法', link: '/methods', activeMatch: '^/methods' },
      { text: '关于我', link: '/about', activeMatch: '^/about' }
    ],
    sidebar: false,
    outline: { level: [2, 3], label: '本页目录' },
    search: {
      provider: 'local',
      options: { locales: { root: { translations: {
        button: { buttonText: '搜索', buttonAriaLabel: '搜索文章' },
        modal: { displayDetails: '显示详细结果', resetButtonTitle: '清除搜索', backButtonTitle: '返回', noResultsText: '没有找到相关内容', footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' } }
      } } } }
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/QzKING2023' }],
    docFooter: { prev: '上一篇', next: '下一篇' },
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换至浅色',
    darkModeSwitchTitle: '切换至深色',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '返回顶部',
    footer: { message: '从游戏体验出发，追问设计背后的原因。', copyright: 'QzKING2023 · 游戏拆解与观察' }
  },
  markdown: {
    config(md) {
      md.renderer.rules.table_open = () => '<div class="table-scroll" role="region" aria-label="数据表格，可横向滚动" tabindex="0"><table>'
      md.renderer.rules.table_close = () => '</table></div>'
    }
  }
})
