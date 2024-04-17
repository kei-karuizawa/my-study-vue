<script setup>
// import { useStore } from 'vuex'
import store from '../store'
import { computed, ref } from 'vue'
import NavHeader from '@/todolist/components/navHeader/NavHeader.vue'
import NavMain from '@/todolist/components/navMain/NavMain.vue'
import NavFooter from '@/todolist/components/navFooter/NavFooter.vue'

// let store = useStore()
let list = computed(() => {
  return store.state.list
})
console.log('the-list: ' + list)
let add = (val) => {
  let value = ref()
  value.value = val
}
</script>

<template>
  <div>
    <NavHeader @add='add'></NavHeader>
    <NavMain :list='list'></NavMain>
    <NavFooter :list='list'></NavFooter>
  </div>
</template>

<style scoped>

</style>