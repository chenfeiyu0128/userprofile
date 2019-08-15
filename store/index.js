import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		/**
		 * 是否需要强制登录
		 */
		userInfo: {
			nickname: '未登录用户',
		},
		forcedLogin: false,
		hasLogin: false,
		userName: ""
	},
	mutations: {
		login(state, userName) {
			state.userName = userName || '新用户';
			state.hasLogin = true;
		},
		logout(state) {
			state.userName = "";
			state.hasLogin = false;
		},

	},
	getters: {
		getValidData: state => {
			var validLevel = 0
			var { wechatValid, emailValid, studentValid, phoneNumberValid } = state
			if (studentValid) {
				validLevel = 2
			} else if (wechatValid || phoneNumberValid) {
				validLevel = 1
			} else {

			}
			return validLevel
		},
	}
})

export default store
