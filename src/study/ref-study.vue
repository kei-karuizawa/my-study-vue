<script setup>
import { ref } from 'vue'

const count = ref(0)
console.log('object:' + count)  // 返回对象。
console.log('value1:' + count.value)  // 返回对象的 value 值。

count.value++
console.log('value2:' + count.value) // 1.

function increment() {
  count.value++
}
</script>

<template>
  <div>{{ count }}</div>
  <button @click="increment">
    {{ count }}
  </button>
</template>

<style scoped>

</style>