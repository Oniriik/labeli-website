<template>
        <div class="login">
                <h1>Se connecter :</h1>
                <form @submit.prevent="signup" class="login">
                        <input v-model="login.email" type="email" placeholder="email" required>
                        <input v-model="login.password" type="password" placeholder="mot de passe" required>
                        <p class="error">{{ error }}</p>
                        <input type="submit" value="login">
                </form>
                <p>Pas de compte ? <router-link class='create' to="/register">Creer un compte</router-link></p>
        </div>

</template>
    
<script>
export default {
        data() {
                return {
                        login: {
                                email: '',
                                password: '',

                        },
                        error: ''
                }
        },
        methods: {
                signup() {
                        this.$store.dispatch('login',this.login) 
                }
        }
}
</script>
    
<style>
.login{
        display: flex;
        flex-direction: column;
        gap: 1rem;

}
.create{
        text-decoration: underline;
}
</style>