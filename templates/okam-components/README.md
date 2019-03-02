# Okam-ui
`Okam UI` 是一款基于 `Okam` 框架开发的组件

## intro

[小程序组件支持](http://agroup.baidu.com/okam/file/view/211486)

## 快速开始

### 前期准备

```
.
├── README.md
├── docs                // 文档模块
│   ├── example         // 示例模块
│   │   └── README.md   // 如何编写示例
│   ├── md              // 示例模块
│   └── README.md       // 如何编写文档
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

### dev
* components

```
npm i

```

* example

```
cd docs/example

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

* docs

```
npm i docsify-cli -g

cd docs

docsify serve

visit http://localhost:3000/
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

