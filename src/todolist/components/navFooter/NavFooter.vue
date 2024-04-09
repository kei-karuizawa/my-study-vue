<script setup>
import { ref } from 'vue'
let isComplete = ref(1)
let all = ref(3)
</script>

<template>
  <div>
    <div>
      已完成{{isComplete}} / 全部{{all}}
    </div>
    <button v-if="isComplete > 0">清除已完成</button>
  </div>
</template>

<style scoped>

</style>