import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: { 
        count: 10
    },
    // returns
    getters: {
        getCount(state){
            return state.count
        }
    },
    // function
    mutations: {
        increment(state){
            state.count++
        },
        decrement(state){
            state.count--
        }
    },
    // types // регистрация мутации
    actions: {
        increment({commit}){
            commit('increment')
        },
        decrement({commit}){
            commit('decrement')
        },
        setProduct({ commit }, payload) {
            commit('set', payload)
        }
    },
    modules:{
        
    },
});

export default store
