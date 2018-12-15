// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

//在主入口文件里面测试触发一下异步actions里面的获取所有用户信息列表的函数
store.dispatch('GET_USERLIST').then(res => {
  console.log('获取所有用户数据', store.state.userList) //可以拿到所有的数据
})



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
