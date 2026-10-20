# QzKING · 游戏拆解

个人游戏研究与拆解网站。使用 VitePress，部署到 GitHub Pages。

## 本地预览

需要 Node.js 24 和 npm。在本目录打开终端：

```sh
npm ci
npm run docs:dev
```

打开终端显示的地址，通常是 `http://127.0.0.1:5173/QzKING-s-game-breakdown/`。

Windows PowerShell 如限制 npm 脚本，可把命令中的 `npm` 换成 `npm.cmd`。

## 更新内容

- 完整文章：编辑根目录对应的 Markdown 文件，例如 `射击的进化史.md`、`回合制的进化史.md`、`ASW角色变迁拆解案.md`、`BF6_Gunplay_拆解案.md`、`Valheim战斗系统拆解案.md`。文章与源文件的对应关系见 `scripts/articles.mjs`。根目录的这些 Markdown 文件是全文唯一的内容来源，不要编辑生成的 `docs/*/full.md`。修改后重新启动预览或运行构建。
- 导读：编辑 `docs/<slug>/index.md`，例如 `docs/turn-based/index.md`、`docs/asw/index.md`。
- 研究资料：`research/` 只保存在本地（已加入 `.gitignore`），不随网站发布。
- BF6 配图：保存在根目录 `BF6_Gunplay_拆解案_assets/`，与文章中的相对路径对应。构建时自动复制到全文与下载目录。
- 个人介绍和联系方式：编辑 `docs/about.md`。
- 首页：编辑 `docs/.vitepress/theme/HomePage.vue`。
- 网站名称、导航和部署子路径：编辑 `docs/.vitepress/config.mts`。
- 页面风格：编辑 `docs/.vitepress/theme/style.css`。

构建时会按 `scripts/articles.mjs` 中的文章列表复制根目录的 Markdown 文件，加入不改变标题文字的章节锚点，并生成 Markdown 下载文件。根目录文件本身不会被改写。版本号与分析数据以文章为准，网站构建不负责核实游戏事实。

BF6 的下载文件与根目录 Markdown 完全一致。离线查看配图时，还需从仓库下载同级的 `BF6_Gunplay_拆解案_assets/` 文件夹；网站的 `downloads/` 下也保留了这些相对图片路径。

以后增加文章，按以下步骤操作：

1. 把全文放在根目录，作为唯一内容来源。
2. 在 `scripts/articles.mjs` 中登记 `slug`、源文件、下载文件名、标题、简介，以及章节数（`sections`；章节从 1 开始编号时另设 `firstSection: 1`）和附录列表（`appendices`）。
3. 在 `docs/<slug>/` 下新建导读 `index.md`。
4. 在 `docs/.vitepress/config.mts` 导航栏的“文章”下拉菜单和首页 `HomePage.vue` 中添加入口，并在 `docs/about.md` 的文章列表中补上一行。

构建时会自动为以下标题加锚点：`## 1. …`（`#section-1`）、`### 1.2 …`（`#section-1-2`）、`### 1. …`（`#section-1`）、`## 第一部 …`（`#part-1`）、`## 结语`（`#conclusion`）、`## 附录 A：…` 或 `## 附录 A …`（`#appendix-A`）。

图片建议放在文章同目录的 `images/` 文件夹，使用 `![说明](./images/文件名.png)` 引用。Valheim 文章添加图片时，使用 `docs/public/images/valheim/` 存图、`![说明](/images/valheim/文件名.png)` 引用，保证生成后的文章可正确引用图片。

## 构建检查

```sh
npm run docs:build
npm run check
npm run docs:preview
```

检查会验证生成页面、站内链接、章节锚点、资源路径及 Markdown 下载文件的完整性。正式上传前建议用手机宽度浏览表格和导航。

当前使用 VitePress 1.6.4，并在 `overrides` 中固定 Vite 6.4.4，以避开其默认 Vite 5 依赖中的已知开发服务器漏洞。升级 VitePress 时可重新评估并移除此覆盖配置。

## 首次部署到 GitHub Pages

目标仓库：<https://github.com/QzKING2023/QzKING-s-game-breakdown>

1. 在仓库的 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。
2. 在本地检查 `git remote -v` 指向上面的仓库。
3. 提交网站源码并推送到 `main`（首次提交若提示身份未知，先配置自己的 Git 用户名与邮箱）：

```sh
git add .
git commit -m "Build personal game breakdown site"
git push -u origin main
```

4. 在 GitHub **Actions** 页等待 `Deploy to GitHub Pages` 成功。
5. 成功后访问 <https://qzking2023.github.io/QzKING-s-game-breakdown/>。

后续向 `main` 提交会自动部署。GitHub Pages 网站是公开展示内容，当前关于页包括本人提供的邮箱及 QQ。

`base` 已配置为 `/QzKING-s-game-breakdown/`。更改仓库名或绑定自定义域名时，需要同步调整该配置。

部署参考：[VitePress 官方指南](https://vitepress.dev/guide/deploy)。
