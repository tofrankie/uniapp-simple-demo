# uniapp-simple-demo

## 快速开始

```bash
$ pnpm install
```

```bash
# mp-weixin
$ pnpm dev:mp-weixin

# h5
$ pnpm dev:h5

# app
$ pnpm dev:app-plus
```

> 编译到微信小程序的话，导入至微信开发工具，使用测试号打开。

> 编译到 App 端的话，使用 HBuilderX 导入 `dist/dev/app`，接着 iOS 模拟器打开。

## uni-app 依赖更新

使用以下命令进行更新，它会将所有平台的依赖重新加上，如果不需要的可以手动移除。

```bash
$ pnpm dlx @dcloudio/uvm
```
