<script setup>
import { ref } from 'vue'
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