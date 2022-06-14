import { createStore } from 'vuex'

export default createStore({
    state: {
        user: null
    },
    actions: {
        async login({ commit }, details) {
            //
        },
        async logout({ commit }) {
            //
        },
        async register({ commit }, details) {
            //
        },
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        clearUser(state) {
            state.user = null
        }
    }
})
