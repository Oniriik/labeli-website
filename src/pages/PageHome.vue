<template>
    
    <div class="home">
        <div class="page-content">
            <img src="@/assets/img/labeli_logo_full.png" alt="labeli_logo_full" id="logo">
            <p>
                Crée en juin 2012 l'association à pour but de rassembler les étudiants à travers des événements et
                animations mettant en avant l'informatique.
                Nous proposons des événements sur le campus ou en dehors, un local ouvert à tous où vous pouvez
                rencontrer d'autres étudiants,
                vous restaurer ou simplement y passer du temps en vous divertissant.
            </p>
        </div>
        <div class="socials-btn">
            <a href="https://discord.gg/tYSTcDJfjQ" target="_blank"><img src="@/assets/img/discord_logo.png"
                    alt="discord_logo" class="socials-img"></a>
            <a href="https://www.instagram.com/asso_labeli/" target="_blank"><img src="@/assets/img/instagram_logo.png"
                    alt="insta_logo" class="socials-img"></a>
            <a href="https://www.facebook.com/assoLabeli" target="_blank"><img src="@/assets/img/facebook_logo.png"
                    alt="facebook_logo" class="socials-img"></a>

        </div>
        <SocialLinks/>
    </div>

</template>
    
<script>
import SocialLinks from '@/components/SocialLinks'
export default {
    components: {
        SocialLinks
    },
}
</script>
    
<style scoped>
.page-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 90vh;
}

.page-content>p {
    color: #006dae;
    font-weight: 500;
    text-align: center;
}

.page-content>#logo {
    width: 80vw;
    max-width: 700px;


}
.socials-btn{
    flex-direction: column;
    position: absolute;
    top: 50%;
    transform: translatey(-50%);
    left: 10px;
}

@media screen and (max-width: 992px) {
    .page-content>p {
        font-size: 10px;
    }
    .socials-btn{
        visibility: hidden;
    }
}
</style>