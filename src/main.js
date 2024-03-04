import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Counter from './study/counter.vue'

// 应用实例必须在调用了 .mount() 方法后才会渲染出来。该方法接收一个“容器”参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串。
// .mount() 方法应该始终在整个应用配置和资源注册完成后被调用。同时请注意，不同于其他资源注册方法，它的返回值是根组件实例而非应用实例。
createApp(Counter).mount('#app')
