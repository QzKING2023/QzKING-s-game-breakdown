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

- 完整文章：编辑根目录的 `Valheim战斗系统拆解案.md`。这是全文唯一的内容来源，不要编辑生成的 `docs/valheim/full.md`。修改原稿后重新启动预览或运行构建。
- 导读：编辑 `docs/valheim/index.md`。
- 个人介绍和联系方式：编辑 `docs/about.md`。
- 首页：编辑 `docs/.vitepress/theme/HomePage.vue`。
- 网站名称、导航和部署子路径：编辑 `docs/.vitepress/config.mts`。
- 页面风格：编辑 `docs/.vitepress/theme/style.css`。

构建时会复制原稿，加入不改变标题文字的章节锚点，并生成 Markdown 下载文件。根目录原稿不会被改写。版本号与分析数据来自原稿，网站构建不负责核实游戏事实。

以后增加文章，可以在 `docs/` 下新建文件夹并加入 `index.md`，在首页和导航添加入口。图片建议放在文章同目录的 `images/` 文件夹，使用 `![说明](./images/文件名.png)` 引用。Valheim 原稿添加图片时，使用 `docs/public/images/valheim/` 存图、`![说明](/images/valheim/文件名.png)` 引用，保证生成后的文章可正确引用图片。

## 构建检查

```sh
npm run docs:build
npm run check
npm run docs:preview
```

检查会验证生成页面、站内链接、章节锚点、资源路径及下载原稿完整性。正式上传前建议用手机宽度浏览表格和导航。

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
