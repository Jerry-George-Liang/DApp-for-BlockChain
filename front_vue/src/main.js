import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import 'font-awesome/css/font-awesome.min.css'
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-solidity'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-python'

const app = createApp(App)

// 使用Vue Router
app.use(router)

// 全局错误处理
app.config.errorHandler = (err, vm, info) => {
  console.error('全局错误:', err)
  console.info('错误信息:', info)
}

// 挂载应用
app.mount('#app')
