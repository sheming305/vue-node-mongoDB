import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import {
  promises
} from 'fs';
Vue.use(Vuex)

//状态管理
const state = {
  //将登陆用户数据存入本地存储 
  userInfo: JSON.parse(localStorage.getItem('userInfo') || sessionStorage.getItem('userInfo')),
  //用户数据列表
  userList: []
}

//主要用来操作state
const mutations = {
  //保存用户数据
  SAVE_USERINFO(state, userInfo) {
    console.log('函数被触发')

    // 先把数据存入本地存储
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
    sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
    //更新数据
    state.userInfo = userInfo
    // console.log('复制后的用户信息为:',state.userInfo)
  },
  //获取所有用户列表数据
  GET_USERLIST(state, userList) {
    state.userList = userList
  }
}

//actions异步操作函数主要是 commit mutations 用mutations来改变状态
const actions = {
  GET_USERLIST({
    commit
  }) {
    //用于异步测试调试
    return new Promise((resolve, reject) => {
      axios.get('/api/userlist').then(res => {
        console.log('获取用户数据列表', res.data)
        //根据接口拿到数据后直接触发mutations里面的函数GET_USERLIST,直接把接口的数据赋值给函数
        commit('GET_USERLIST', res.data)
        resolve()
      })
    })
  }
}


// console.log(state.userInfo)
//创建store仓库暴露出
export default new Vuex.Store({
  state,
  mutations,
  actions
})
