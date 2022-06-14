<template>
        <div class="register">
                <h1>S'inscrire :</h1>
                <form @submit.prevent="signup" class="register">
                        <input v-model="register.email" type="email" placeholder="email" required>
                        <input v-model="register.password" type="password" placeholder="mot de passe" required>
                        <input v-model="register.confirmPwd" type="password" placeholder="confirmation mot de passe" required>
                        <input v-model="register.code" type="text" placeholder="code" required>
                        <p class="error">{{ error }}</p>
                        <input type="submit" value="Register">
                </form>
        </div>

</template>
    
<script>
export default {
        data() {
                return {
                        register: {
                                email: '',
                                password: '',
                                confirmPwd: '',
                                code: ''

                        },
                        error: ''
                }
        },
        methods: {
                signup() {
                        if (this.register.password.length < 6){
                                this.error = 'Mot de passe trop faible'
                                return
                        }
                        if (this.register.password != this.register.confirmPwd){
                                this.error = 'Le mot de passe ne correspond pas'
                                return
                        }
                        if (this.register.code != 'labeli') {
                                this.error = 'Mauvais code'
                                return
                        }

                        this.$store.dispatch('register',this.register) 
                }
        }
}
</script>
    
<style>
.register{
        display: flex;
        flex-direction: column;
        gap: 1rem;

}
</style>