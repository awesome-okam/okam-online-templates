# ${pkgName}
`${pkgName}` 是基于 `Okam` 框架开发的组件

### 目录

```
.
├── README.md
├── example         // 示例模块
│   └── README.md   // 如何编写示例
├── ...
├── src
│   ├── common          // 公共模块
│   │   ├── img
│   │   └── utils
│   └── avatar          // ... componnet
│       ├── index.vue.  // 默认
│       └── quick       // 可选 快应用-特殊， swan|wx|ant|tt|quick
│           └── index.vue
└── test                // 单测模块
    └── tasks
        └── demo.spec.js
```

### 开发
* components

```
npm i

```

* example

```
cd example

npm run init

npm run dev
npm run dev:wx
npm run dev:ant
npm run dev:quick

```
* test

```
npm run test
```

* commit

```
npm run commit
```

## 测试
- example
- test

## 如何贡献
x

## 讨论
x

## 代码开发规范
fecs: https://github.com/ecomfe/fecs

## 代码提交规范
[what is commitlint](https://github.com/marionebl/commitlint#what-is-commitlint)

### 文档
* [okam 使用教程](https://ecomfe.github.io/okam)
* [百度小程序](https://smartprogram.baidu.com/docs/develop/tutorial/codedir)
* [微信小程序](https://developers.weixin.qq.com/miniprogram/dev/index.html)
* [支付宝小程序](https://docs.alipay.com/mini/developer/getting-started)
* [头条小程序](https://microapp.bytedance.com/docs/framework/)
* [快应用](https://doc.quickapp.cn/)

