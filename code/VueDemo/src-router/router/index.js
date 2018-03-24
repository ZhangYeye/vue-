/*
路由器模板
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import about from '../components/about.vue'
import home from '../components/home.vue'
import news from '../components/news.vue'
import message from '../components/message.vue'
import messageDetail from '../components/message-detail.vue'

// 声明使用插件
Vue.use(VueRouter)

// 创建路由器, 配置路由
export default new VueRouter({
  linkActiveClass: 'activeClass', // 指定选中的路由链接的class
  routes: [
    {
      path: '/about',
      component: about
    },
    {
      path: '/home',
      component: home,
      children: [
        {
          // path: '/home/news',
          path: 'news',
          component: news
        },
        {
          path: '',
          redirect: '/home/news'
        },
        {
          path: 'message',
          component: message,
          children: [
            {
              path: 'detail/:id',
              component: messageDetail
            }
          ]
        }
      ]
    },
    {
      path: '/',
      redirect: '/about'
    },
  ]
})