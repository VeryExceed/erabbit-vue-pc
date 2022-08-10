import { createStore } from 'vuex'

export default createStore({
  state: {
    username: '潘先源'
  },
  getters: {
    newName (state) {
      return state.username + '!!!'
    }
  },
  mutations: {
    updateName (state) {
      state.username = '源总'
    }
  },
  actions: {
    updateName (context) {
      // 发请求
      setTimeout(() => {
        context.commit('updateName')
      }, 2000)
    }
  },
  modules: {
  }
})
