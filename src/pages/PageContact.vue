<template>
    <div class="contact">
        <h2>Nous contacter :</h2>
        <form class="contact-form">
            <input v-model="contact.email" type="email" name="email" placeholder="email">
            <input v-model="contact.sujet" type="text" name="sujet" placeholder="Sujet">
            <textarea v-model="contact.message" name="message" cols="30" rows="10" placeholder="Message"></textarea>
        </form>
        <button 
        :class="{ 'active-button': this.checkForm   }"
        @click="this.checkForm && this.sendForm()"
        >Envoyer</button>
    </div>
    
    <div class="separator">
        <hr>ou<hr>
    </div>

    <SocialLinks/>
</template>
    
<script scoped >
import SocialLinks from '@/components/SocialLinks'
export default {
    components: {
        SocialLinks
    },
    data() {
        return {
            contact: {
                email: '',
                sujet: '',
                message: ''
            },
        }
    },
    methods:{
        sendForm(){
            console.log('sent')
        }
    },
    computed: {
        checkForm(){
            if(this.contact.email != '' && this.contact.sujet != '' && this.contact.message != ''){
                return true
            }
            else{
                return false
            }
        }
    }
}

</script>
    
<style scoped>
.contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh;
    gap: 2rem;
}

h2 {
    color: #023d5f;
}

.contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 400px
}

.contact-form>input {
    width: 250px;
    padding: 5px;
    border-radius: 5px;
    border: solid 2px #7db4d4;
}

.contact-form>textarea {
    width: 400px;
    padding: 5px;
    border-radius: 5px;
    border: solid 2px #7db4d4;

    resize: none;
}

.contact > button {
    padding: 5px 10px;
    border-radius: 5px;
    color: white;
    background-color: #7db4d4;
    border: none;
}
.active-button{
    background-color: #0484ce !important;
}
.separator{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    color : #023d5f;
}
.separator > hr{
    width: 30px;
    border: none;
    background-color:#023d5f ;
    height: 2px;
    border-radius: 1px;
    opacity: 0.5;
}
.socials-btn{
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: static;

}
</style>