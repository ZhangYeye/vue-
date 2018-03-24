import Vue from 'vue'
import app from './components/app.vue'
import router from './router' // 会自动加载router文件夹下的index.js

// 创建vm对象
new Vue({
  el: '#app',
  render: h => h(app),
  router // 配置路由器
})