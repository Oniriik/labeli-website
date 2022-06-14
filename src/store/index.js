import { createStore } from 'vuex'
import router from '../router'
import { auth } from '../firebase'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'


export default createStore({
    state: {
        user: null
    },
    actions: {
        async login({ commit }, { email, password }) {
            try {
                await signInWithEmailAndPassword(auth, email, password)
            } catch (error) {
                switch (error.code) {
                    case 'auth/user-not-found':
                        alert('User not found')
                        break;
                    case 'auth/wrong-password':
                        alert('Wrong password')
                        break;
                    default:
                        alert('Something went wrong')
                        break;
                }
                return
            }
            commit('setUser', auth.currentUser)
            router.push('/dashboard')
        },
        async logout({ commit }) {
            await signOut(auth)
            commit('clearUser')
            router.push('/')
        },
        async register({ commit }, { email, password }) {
            try {
                await createUserWithEmailAndPassword(auth, email, password)
            } catch (error) {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        alert('Email already in use')
                        break;
                    case 'auth/invalid-email':
                        alert('Invalid email')
                        break;
                    default:
                        alert('Something went wrong')
                        break;
                }
                return
            }
            commit('setUser', auth.currentUser)
            router.push('/dashboard')
        },
        fetchUser({ commit }) {
            auth.onAuthStateChanged(async user => {
                if (user == null) {
                    commit('clearUser')
                } else {
                    commit('setUser', auth.currentUser)
                    if (router.isReady() && router.currentRoute.value.path == '/login') {
                        router.push('/dashboard')
                    }
                    if (router.isReady() && router.currentRoute.value.path == '/register') {
                        router.push('/dashboard')
                    }
                }
            })
        }
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
