import Vue from 'vue'
import VueResource from 'vue-resource'
import app from './components/app.vue'

// 声明使用插件
Vue.use(VueResource) // 内部调用VueResource.install()给vm/组件对象添加属性$http

// 创建vm对象
new Vue({
  el: '#app',
  render: h => h(app)
})