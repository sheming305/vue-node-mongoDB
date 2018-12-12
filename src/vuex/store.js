import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//状态管理
const state = {
	//将数据存入本地存储 
	userInfo:JSON.parse(localStorage.getItem('userInfo') || sessionStorage.getItem('userInfo'))
}

//主要用来操作state
const mutations = {
	//保存用户数据
	SAVE_USERINFO(state,userInfo){
		console.log('函数被触发')

		// 先把数据存入本地存储
		localStorage.setItem('userInfo',JSON.stringify(userInfo))
		sessionStorage.setItem('userInfo',JSON.stringify(userInfo))
		//更新数据
		state.userInfo = userInfo
		// console.log('复制后的用户信息为:',state.userInfo)
	}
}
// console.log(state.userInfo)
//创建store仓库暴露出
export default new Vuex.Store({
	state,
	mutations
 })