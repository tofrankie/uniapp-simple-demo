<script setup>
import { onLoad } from '@dcloudio/uni-app'
import ga from '@tofrankie/miniprogram-ga4'
import { ROUTE } from '@/constants'

onLoad(() => {
  ga.pageView('我的', ROUTE.MINE)
})

function navToIndex() {
  ga.event('我的', '点击-前往首页')
  uni.navigateTo({ url: ROUTE.INDEX })
}
</script>

<template>
  <view>我的</view>

  <button class="btn" @click="navToIndex">前往首页</button>
</template>

<style scoped>
:global(page) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.btn {
  margin: 30rpx auto;
}

.box {
  width: 600rpx;
  height: 600rpx;
  margin: 100rpx auto 0;
  color: #fff;
  background-color: red;
}

.parent-box {
  background-color: #eee;
}

.icon {
  display: block;
  width: 56rpx;
  height: 56rpx;
  margin-right: 4rpx;
}
</style>
