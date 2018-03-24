import Vue from 'vue'
import app from './components3/app.vue'
import './base.css'

// 创建vm对象
new Vue({
  el: '#app',
  render: h => h(app)
})