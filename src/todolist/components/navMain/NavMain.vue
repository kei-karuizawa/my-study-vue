<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'NavMain',
  setup() {
    let list = ref([
      {
        title: '吃饭',
        complete: false
      },
      {
        title: '睡觉',
        complete: false
      },
      {
        title: '敲代码',
        complete: false
      }
    ])
    return {
      list
    }
  }
})
</script>

<template>
  <div v-for="(item, index) in list" :key="index">
    <input type="checkbox" v-model="item.complete">
    {{item.title}}
    <button>删除</button>
  </div>
</template>

<style scoped>

</style>