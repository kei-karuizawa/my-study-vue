<script setup>
import {ref} from 'vue'
import NavHeader from '@/todolist/components/navHeader/NavHeader.vue'
import NavMain from '@/todolist/components/navMain/NavMain.vue'
import NavFooter from '@/todolist/components/navFooter/NavFooter.vue'
// export default defineComponent({
//   name: 'Home',
//   components: {
//     NavHeader,
//     NavMain,
//     NavFooter
//   },
//   setup() {
//
//   }
// })
let num = ref(10)
let name = ref('jack')
let arr = ref(['1', '2', '3'])
</script>

<template>
<!--  <div>-->
<!--    <NavHeader></NavHeader>-->
<!--    <NavMain></NavMain>-->
<!--    <NavFooter></NavFooter>-->
<!--  </div>-->
  <div>
    {{num}}
  </div>
  <div>
    {{name}}
  </div>
  <div>
    {{arr}}
  </div>
  <div>
    {{arr[0]}}
  </div>
</template>

<style scoped>

</style>