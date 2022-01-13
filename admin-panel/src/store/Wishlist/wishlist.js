export default {
    namespaced: true,
    state: {
        wishlist: [

        ]
    },
    mutations: {
        addWish(state, payload) {
            state.wishlist.push(payload)
            localStorage.setItem('wishlist.productID', [])
        }
    },

    actions: {
        addWish({ commit }, payload) {
            commit('addWish', payload)
            localStorage.setItem('wishlist.productID', [])

        }
    },
    getters: {
        getList(state) {
            return state.wishlist
        },
        // getProduct: (state) => (id) => {
        //     return state.wishlist.find(product => product.id == id)
        // }
    }
}