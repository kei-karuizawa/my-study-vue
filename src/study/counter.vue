<script setup>
import { ref } from 'vue'
// ref 函数：声明响应式状态。
// 要等待 DOM 更新完成后再执行额外的代码，可以使用 nextTick() 全局 API。
const count = ref(0)
const rawHtml = '<span style="color: red">This should be red.</span>'
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>

  <div>
    <p>Using text interpolation: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
  </div>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>