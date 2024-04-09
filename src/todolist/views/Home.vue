<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import NavHeader from '@/todolist/components/navHeader/NavHeader.vue'
import NavMain from '@/todolist/components/navMain/NavMain.vue'
import NavFooter from '@/todolist/components/navFooter/NavFooter.vue'

let store = useStore()
let list = computed(() => {
  return store.state.list
})
</script>

<template>
  <div>
    <NavHeader></NavHeader>
    <NavMain></NavMain>
    <NavFooter></NavFooter>
  </div>
</template>

<style scoped>

</style>