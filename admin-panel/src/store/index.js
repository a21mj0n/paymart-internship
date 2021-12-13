import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import Cookies from 'js-cookie'

Vue.use(Vuex)

// modules
import auth from './auth/#index'

const authState = createPersistedState({
    key: 'auth',
    paths: ['auth'],
    storage: {
        getItem: (key) => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 1, secure: true }),
        removeItem: (key) => Cookies.remove(key),
      },
  })


export default new Vuex.Store({
    modules: { auth },
    plugins: [authState]
})