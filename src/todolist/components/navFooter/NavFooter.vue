<script setup>

import { computed } from 'vue'

let isComplete = computed(() => {
  return props.list.filter((item) => {
    return item.complete === true
  }).length
})

let clear = () => {
  emits('clear')
}
const props = defineProps({
  list: {
    type: Array,
    required: true
  }
})
const emits = defineEmits(['clear'])
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