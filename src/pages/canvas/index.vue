<script setup>
import { getCurrentInstance, onMounted } from 'vue'

const instance = getCurrentInstance()

onMounted(() => {
  init()
})

async function init() {
  const canvasQueryResult = await queryElement('.canvas', instance)
  const ctx = canvasQueryResult.node.getContext('2d')

  const metrics = ctx.measureText('Hello World')
  console.log('🚀 ~ init ~ metrics:', metrics)
}

async function queryElement(selector, componentInstance) {
  return new Promise(resolve => {
    uni
      .createSelectorQuery()
      .in(componentInstance)
      .select(selector)
      .fields({
        node: true,
        size: true,
        context: true,
      })
      .exec(([node]) => {
        resolve(node)
      })
  })
}
</script>

<template>
  <canvas id="canvas" class="canvas" canvas-id="canvas" type="2d" />
</template>

<style scoped>
.canvas {
  width: 100%;
  height: 300rpx;
}
</style>
