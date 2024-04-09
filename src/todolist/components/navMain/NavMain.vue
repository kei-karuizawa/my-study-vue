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
    let del = (item, index) => {
      console.log(item)
      console.log(index)
    }
    return {
      list,
      del
    }
  }
})
</script>

<template>
  <div v-for="(item, index) in list" :key="index">
    <div class="item">
      <input type="checkbox" v-model="item.complete">
      {{item.title}}
      <button class="del" @click="del(item, index)">删除</button>
    </div>
  </div>
</template>

<style scoped>
.item {
  height: 35px;
  line-height: 35px;
  position: relative;
  width: 160px;
  cursor: pointer;
  button {
    position: absolute;
    right: 20px;
    top: 8px;
    display: none;
    z-index: 99;
  }
  &:hover {
    background: #dddddd;
    button {
      display: block;
    }
  }
}
</style>