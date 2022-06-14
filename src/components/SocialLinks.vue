<template>
            <div class="socials-btn">
            <a href="https://discord.gg/tYSTcDJfjQ" target="_blank"><img src="@/assets/img/discord_logo.png"
                    alt="discord_logo" class="socials-img"></a>
            <a href="https://www.instagram.com/asso_labeli/" target="_blank"><img src="@/assets/img/instagram_logo.png"
                    alt="insta_logo" class="socials-img"></a>
            <a href="https://www.facebook.com/assoLabeli" target="_blank"><img src="@/assets/img/facebook_logo.png"
                    alt="facebook_logo" class="socials-img"></a>

        </div>
</template>
    
<script scoped>
    
</script>
    
<style>
.socials-btn {
    display: flex;
    flex-direction: row;
    gap: 1rem;

}
.socials-img {
    width: 30px;
    opacity: 0.5;
    transition-duration: 200ms;
}
.socials-img:hover {
    opacity: 1;
    transform: scale(1.05);
}
</style>