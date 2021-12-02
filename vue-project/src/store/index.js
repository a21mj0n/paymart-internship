import Vue from 'vue'
import Vuex from 'vuex'

//modules
import cart from './cart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
  }
})

// const store =  new Vuex.Store({
//     state: {
//         count: 0,
//         products: []
//     },
//     mutations: {
//         increment(state){
//             state.count++
//         },
//         decrement(state){
//             state.count--
//         },
//         addProducts(state, payload){
//             state.products = payload
//         }
//     },
//     actions: {
//         increment({commit}){
//             commit('increment')
//         },
//         minusCount({commit}){
//             commit('decrement')
//         },
//         addProducts({commit}, payload){
//             commit('addProducts', payload)
//         }
//     },
//     getters: {
        
//     },
//     modules: {

//     }

// })

// export default store
