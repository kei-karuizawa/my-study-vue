<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'navHeader',
  setup() {
    let value = ref('')
    let enter = () => {
      console.log(value.value)
    }
    return {
      value,
      enter
    }
  }
})
</script>

<template>
  <div>
    <input
        placeholder="请输入任务名称"
        v-model="value"
        @keydown.enter="enter"
    />
  </div>
</template>

<style scoped>
input {
  margin-bottom: 10px;
}
</style>