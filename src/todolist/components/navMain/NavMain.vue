<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavMain',
  props: {
    list: {
      type: Array,
      required: false
    }
  },
  emits: ['del'],
  setup(_, ctx) {
    let del = (_, index) => {
      ctx.emit('del', index)
    }
    return {
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