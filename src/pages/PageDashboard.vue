<template>
        <h1>dashboard</h1>
        <p>connected as {{ user.email }}</p>
        <button @click.prevent="signout">logout</button>
</template>
    
<script>
import router from '@/router'
export default {
        data() {
                return {
                        user: this.$store.state.user
                }
        },
        methods: {
                signout() {
                        this.$store.dispatch('logout')
                        router.push('/')
                }
        }
}
</script>
    
<style>
</style>