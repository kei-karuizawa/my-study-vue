<script setup>
import { reactive } from 'vue'

const state = reactive({ count: 0 })

// 值得注意的是，reactive() 返回的是一个原始对象的 Proxy，它和原始对象是不相等的：
const raw = {}
const proxy = reactive(raw)

// ----------------------------------------------------------
// 代理对象和原始对象不是全等的。
console.log(proxy === raw) // false
// 只有代理对象是响应式的，更改原始对象不会触发更新。因此，使用 Vue 的响应式系统的最佳实践是 仅使用你声明对象的代理版本。
// 为保证访问代理的一致性，对同一个原始对象调用 reactive() 会总是返回同样的代理对象，而对一个已存在的代理对象调用 reactive() 会返回其本身：
// 在同一个对象上调用 reactive() 会返回相同的代理：
console.log(reactive(raw) === proxy) // true

// 在一个代理上调用 reactive() 会返回它自己
console.log(reactive(proxy) === proxy) // true

// ----------------------------------------------------------
// reactive 不能替换整个对象：
let state1 = reactive({ count: 0 })

// 上面的 ({ count: 0 }) 引用将不再被追踪
// (响应性连接已丢失！)
state1 = reactive({ count: 1 })

// ----------------------------------------------------------
// reactive 对解构操作不友好：当我们将响应式对象的原始类型属性解构为本地变量时，或者将该属性传递给函数时，我们将丢失响应性连接：
const state2 = reactive({ count: 0 })

// 当解构时，count 已经与 state.count 断开连接
let { count } = state2
// 不会影响原始的 state
count++

// 该函数接收到的是一个普通的数字
// 并且无法追踪 state.count 的变化
// 我们必须传入整个对象以保持响应性
callSomeFunction(state.count)
</script>

<template>
  <button @click="state.count++">
    {{ state.count }}
  </button>
</template>

<style scoped>

</style>