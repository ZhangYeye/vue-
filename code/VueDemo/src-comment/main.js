import Vue from 'vue'
import app from './components/app.vue'

// 创建vm对象
new Vue({
  el: '#app',
  render: h => h(app)
})