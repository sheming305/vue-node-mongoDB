import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import zhuCe from '@/components/zhuce'



Vue.use(Router)
Vue.use(ElementUI)
Vue.prototype.$axios = axios
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/zhuce',
      name: 'zhuCe',
      component: zhuCe
    },
  ]
})
