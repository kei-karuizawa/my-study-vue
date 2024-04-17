<script setup>
import { ref } from 'vue'
let isComplete = ref(1)

let clear = () => {
  console.log('clear')
}
defineProps({
  list: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="container">
    <div>
      已完成{{isComplete}} / 全部{{list.length}}
    </div>
    <button v-if="isComplete > 0" class="btn" @click="clear">清除已完成</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  .btn {
    margin-left: 10px;
  }
}
</style>