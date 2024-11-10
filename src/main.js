import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Counter from './study/counter.vue'
import RefStudy from '@/study/ref-study.vue'
import ReactiveStudy from '@/study/reactive-study.vue'
import TodoListHome from '@/todolist/views/Start.vue'
import router from '@/todolist/router'
import '@/mksz285/assets/styles/icon.css'
import mksz285app from '@/mksz285/views/Home.vue'

// 应用实例必须在调用了 .mount() 方法后才会渲染出来。该方法接收一个“容器”参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串。
// .mount() 方法应该始终在整个应用配置和资源注册完成后被调用。同时请注意，不同于其他资源注册方法，它的返回值是根组件实例而非应用实例。
// createApp(App).use(router).mount('#app')
// const app = createApp(App)
// app.use(router); // 使用Vue Router实例
// app.mount('#app');

const app = createApp(mksz285app)
app.mount('#app')
