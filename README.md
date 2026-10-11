# 哲么拍 · AI 运镜词典

看到一个镜头，叫得出名字，让 AI 拍得出来。

**在线访问：<https://zhemepai.pages.dev>**

一个学习 AI 视频运镜的镜头词典：

- **105 个运镜**，分景别、机位角度、焦距、运镜、景深与对焦、构图与轴线六类，每个都有同一场景的演示，只换镜头。
- **提示词**：每条附 Seedance / 海螺 H3 可直接复制的中英文提示词（目前多数未经模型实测）。
- **按感觉查**：不知道镜头叫什么，可以从「压迫」「孤独」「恍然大悟」等 16 种感觉反查一整套镜头组合。
- **导演台**：浏览器里的简易 3D 预演，摆白模、调运镜，看镜头和人物、场景的关系，并导出参考视频。
- **成片示例**：白模 → Seedance 成片的对照，以及实际用的提示词和写法说明。

## 本仓库

这里是网站的构建产物（纯静态文件），用于存档和部署，不含源码与制作过程文件。

```
index.html          首页；带 ?view=director 进入导演台
dictionary/         词典、感觉索引、成片合集及演示媒体
assets/  draco/     导演台脚本与解码器
s/<编号>/           分享落地页
_headers            Cloudflare Pages 缓存规则
```

本地预览需要用静态服务器打开（直接双击 index.html 不行），例如：

```bash
npx serve .
```

部署到 Cloudflare Pages：

```bash
npx wrangler pages deploy . --project-name zhemepai --branch main
```

## 作者

X：[@Formulasearch](https://x.com/Formulasearch) · 网站：[rzcthink.top](https://rzcthink.top)

字体与图标的许可证见 `dictionary/LICENSES.txt` 和 `dictionary/fonts/`。其余内容（文字、演示、提示词）版权归作者所有。
