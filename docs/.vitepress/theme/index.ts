import DefaultTheme from 'vitepress/theme'
import HomePage from './HomePage.vue'
import ReadingTools from './ReadingTools.vue'
import DownloadSource from './DownloadSource.vue'
import FtgRouteExplorer from './FtgRouteExplorer.vue'
import Ragna5BTimeline from './Ragna5BTimeline.vue'
import ValheimBossActs from './ValheimBossActs.vue'
import SilentBuildFunnel from './SilentBuildFunnel.vue'
import { h } from 'vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, { 'doc-after': () => h(ReadingTools) }),
  enhanceApp({ app }) {
    app.component('HomePage', HomePage)
    app.component('DownloadSource', DownloadSource)
    app.component('FtgRouteExplorer', FtgRouteExplorer)
    app.component('Ragna5BTimeline', Ragna5BTimeline)
    app.component('ValheimBossActs', ValheimBossActs)
    app.component('SilentBuildFunnel', SilentBuildFunnel)
  }
}
