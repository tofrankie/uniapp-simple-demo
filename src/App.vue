<script setup>
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app'
import ga from '@tofrankie/miniprogram-ga4'

onLaunch(() => {
  console.log('App Launch')

  ga.config('xxx', 'xxx', {
    debug: true,
    api: uni,
  })
})

onShow(() => {
  console.log('App Show')
})

onHide(() => {
  console.log('App Hide')
})
</script>

<style>
/* 每个页面公共css */
</style>
