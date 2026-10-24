import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'QzKING · 游戏拆解',
  description: 'QzKING2023 的游戏拆解与观察。从游玩体验出发，理解游戏里的规则、选择与反馈，以及这些规则怎样演变。',
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
        activeMatch: '^/(sts|sts-silent|sts-boss|doom|bbcf-ragna|bbcf-rachel|shooting|turn-based|asw|bf6|valheim|valheim-boss|valheim-defence)/',
        items: [
          { text: '《杀戮尖塔》总纲', link: '/sts/', activeMatch: '^/sts/' },
          { text: '《杀戮尖塔》静默猎手', link: '/sts-silent/', activeMatch: '^/sts-silent/' },
          { text: '《杀戮尖塔》反无限 BOSS', link: '/sts-boss/', activeMatch: '^/sts-boss/' },
          { text: 'DOOM 怪物状态机', link: '/doom/', activeMatch: '^/doom/' },
          { text: 'Valheim 防御改造', link: '/valheim-defence/', activeMatch: '^/valheim-defence/' },
          { text: 'Valheim BOSS 拆解', link: '/valheim-boss/', activeMatch: '^/valheim-boss/' },
          { text: 'BBCF 拉格纳拆解案', link: '/bbcf-ragna/', activeMatch: '^/bbcf-ragna/' },
          { text: 'BBCF 雷琪儿拆解案', link: '/bbcf-rachel/', activeMatch: '^/bbcf-rachel/' },
          { text: '射击的进化史', link: '/shooting/', activeMatch: '^/shooting/' },
          { text: '回合制的进化史', link: '/turn-based/', activeMatch: '^/turn-based/' },
          { text: 'ASW 角色变迁', link: '/asw/', activeMatch: '^/asw/' },
          { text: 'BF6 枪械拆解', link: '/bf6/', activeMatch: '^/bf6/' },
          { text: 'Valheim 拆解', link: '/valheim/', activeMatch: '^/valheim/' }
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
