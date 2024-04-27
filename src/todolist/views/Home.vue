<script setup>
import store from '../store'
import { computed, ref } from 'vue'
import NavHeader from '@/todolist/components/navHeader/NavHeader.vue'
import NavMain from '@/todolist/components/navMain/NavMain.vue'
import NavFooter from '@/todolist/components/navFooter/NavFooter.vue'

let list = computed(() => {
  return store.state.list
})
console.log('the-list: ' + list)
let add = (val) => {
  let value = ref()
  value.value = val
  if (list.value.some(item => {
    return value.value === item.title
  })) {
    alert('任务已存在！')
  } else {
    store.commit('addTodo', {
      title: value.value,
      complete: false
    })
  }
}
let del = (val) => {
  store.commit('delTodo', val)
  console.log(val)
}
let clear = () => {
  let afterList = []
  list.value.forEach(item => {
    if (item.complete === false) {
      afterList.push(item)
    }
  })
  store.commit('clear', afterList)
}
</script>

<template>
  <div>
    <NavHeader @add='add'></NavHeader>
    <NavMain :list='list' @del='del'></NavMain>
    <NavFooter :list='list' @clear='clear'></NavFooter>
  </div>
</template>

<style scoped>

</style>