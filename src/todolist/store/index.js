import { createStore } from 'vuex'

export default createStore({
  state: {
    list: [
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
        complete: true
      }
    ]
  },
  mutations: {
    addTodo(state, todoWantToAdd) {
      state.list.push(todoWantToAdd)
    },
    delTodo(state, todoWantToDelIndex) {
      state.list.splice(todoWantToDelIndex, 1)
    },
    clear(state, afterList) {
      state.list = afterList
    }
  }
})