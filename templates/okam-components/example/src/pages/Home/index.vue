<template>
    <view>
        <view class="header">
            <image class="page-img" src="../../common/img/okm.png"></image>
            <view class="title">组件</view>
        </view>
        <view for="item, index in items" :key="item.group" class="group">
            <view class="item">
                <text class="item-desc">{{item.group}}</text>
            </view>
            <view for="subItem in item.list">
                <navigator class="sub-item nav" :url="subItem.path">
                    <text class="sub-item-desc">{{subItem.name}}</text>
                    <image class="sub-item-goto" src="../../common/img/goto.png"></image>
                </navigator>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    config: {
        title: '页面导航'
    },

    components: {
    },

    data: {
        items: [
            {
                group: '测试',
                list: [
                    {
                        path: '/pages/Demo/index',
                        name: 'Demo'
                    }
                ]
            }
        ]
    },

    methods: {
    }
};
</script>

<style lang="stylus">
.header
    margin: 40px 0
    text-align: center
</style>
