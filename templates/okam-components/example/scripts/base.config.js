/**
 * @file Build mini program base config
 * @author ${author}
 *
 * @see https://ecomfe.github.io/okam/#/build/index
 */

'use strict';

const path = require('path');

const DEV_SERVER_PORT = 9090;

module.exports = {
    verbose: false,
    root: path.join(__dirname, '..'),
    output: {
        dir: 'dist',
        depDir: 'src/common'
    },
    component: {
        extname: 'vue',
        template: {
            // vue v- 前缀支持, 默认为 false
            useVuePrefix: true,
            modelMap: {
                'o-search-bar': {
                    event: 'change',
                    prop: 'value',
                    detailProp: 'value'
                }
            },
            // 标签转换配置项
            transformTags: {
            }
        }
    },
    // 此处没用上的功能可自行精简 一些功能不做支持，减少构建层体积
    framework: [
        'data',
        // watch 依赖 data
        'watch',
        // 快应用 不支持 model
        // 'model',
        // 头条 不支持 filter
        'filter'
        // 'behavior',
        // 'broadcast',
        // 'ref'
    ],
    // 快应用 不转 rpx
    designWidth: 1242,
    processors: {
        babel7: {
            extnames: ['js']
        },
        postcss: {
            extnames: ['styl'],
            options: {
                plugins: [
                    'env',
                    [
                        'px2rpx',
                        {
                            // 设计稿尺寸,
                            // 此配置项优先级高于 外层的 `designWidth`
                            // 相同时 内部配置项可以不配置
                            // designWidth: 1242,
                            // 开启 1px 不转
                            noTrans1px: true
                        }
                    ]
                ]
            }
        }
    },

    resolve: {
        alias: {
            '${pkgName}': '${pkgName}/src'
        }
    },

    // 启用开发 Server
    server: {
        port: DEV_SERVER_PORT,
        type: 'connect',
        // 需要安装 mock 中间件 npm i autoresponse --save-dev
        middlewares: [
            // {
            //     name: 'autoresponse',
            //     options: {
            //         post: true,
            //         get: true
            //     }
            // }
        ]
    },

    prod: {
        rules: [
            {
                match: '*.js',
                processors: [
                    ['replacement', {'process.env.NODE_ENV': '"production"'}]
                ]
            }
        ]
    },

    dev: {
        rules: [
            {
                match: /\.(png|jpe?g|gif)(\?.*)?$/,
                processors: {
                    tinyimg: {
                        replaceRaw: true
                    }
                }
            },
            {
                match: '*.js',
                processors: [
                    ['replacement', {
                        // 'https://online.com': 'https://dev.com',
                        'process.env.NODE_ENV': '"development"'
                    }]
                ]
            }
        ]
    },
    test: {
        rules: [
            {
                match: '*.js',
                processors: [
                    ['replacement', {
                        // 'https://online.com': 'https://test.com',
                        'process.env.NODE_ENV': '"development"'
                    }]
                ]
            }
        ]
    }
};
