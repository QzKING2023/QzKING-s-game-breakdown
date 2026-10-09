import DefaultTheme from 'vitepress/theme'
import HomePage from './HomePage.vue'
import ReadingTools from './ReadingTools.vue'
import DownloadSource from './DownloadSource.vue'
import { h } from 'vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, { 'doc-after': () => h(ReadingTools) }),
  enhanceApp({ app }) {
    app.component('HomePage', HomePage)
    app.component('DownloadSource', DownloadSource)
  }
}
