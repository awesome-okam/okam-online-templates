<template>
    <view :class="{
            'o-demo': true
        }">
        </view>
    </view>
</template>
<script>
export default {
    options: {
        addGlobalClass: true
    },
    props: {
    },

    data: {
    },

    methods: {

    }
};
</script>
<style lang="stylus">
@import '../common/css/variables.styl'

.o-demo
    color: #ccc
</style>

