import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import loGin from '@/components/login'
import userlist from '@/components/user/userlist'
import usermain from '@/components/user/usermain'
import userpassword from '@/components/user/userpassword'


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
      component: Index,
      redirect:'/userlist',
      children:[
         {
          path: '/userlist',
          name: 'userlist',
          component: userlist
        },
         {
          path: '/usermain',
          name: 'usermain',
          component: usermain
        },
         {
          path: '/userpassword',
          name: 'userpassword',
          component: userpassword
        },
      ]
    },
    {
      path: '/loGin',
      name: 'loGin',
      component: loGin
    },
  ]
})
