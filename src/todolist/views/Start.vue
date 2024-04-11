<script setup>
import { useRouter } from 'vue-router'

let router = useRouter()
let start = () => {
  console.log(router)
  router.push({
    path: '/Home'
  })
}
</script>

<template>
  <button @click="start">开始任务</button>
</template>

<style scoped>

</style>