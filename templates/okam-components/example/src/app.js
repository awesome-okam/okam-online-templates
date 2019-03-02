/**
 * @file 小程序入口
 * @author ${author}
 */

'use strict';

export default {
    config: {
        pages: [
            'pages/Home/index',
            'pages/Demo/index'
        ],

        window: {
            navigationBarBackgroundColor: '#211E2E',
            navigationBarTextStyle: 'white',
            backgroundTextStyle: 'light',
            enablePullDownRefresh: true,
            backgroundColor: '#fff'
        },

        networkTimeout: {
            request: 30000
        },

        /* eslint-disable fecs-camelcase */
        _quickEnv: {
            networkTimeout: null,
            package: 'com.okam.demo',
            name: 'okam-quick',
            versionCode: '2',
            icon: '/common/img/okm.png'
        }
        /* eslint-enable fecs-camelcase */
    },
    $promisifyApis: [
    ],

    onShow() {
        console.log('show app...');
    },


    onHide() {
        console.log('hide app...');
    }
};


