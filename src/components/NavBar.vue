<template>
    <nav class="nav-desktop">
        <router-link to="/">
        <img src="@/assets/img/labeli_logo_web.png" alt="labeli_web_logo" class="nav-logo">
        </router-link>
        
        <div class="link-container">
            <router-link to="/events" class="nav-link">événements</router-link>
            <a href="https://www.helloasso.com/associations/label-i/" target="_blank" class="nav-link">nous rejoindre</a>
            <router-link to="/contact" class="nav-link">nous contacter</router-link>
        </div>
        <div>
            <router-link to="/contact" class="nav-link"><button class="login-btn">Espace Membre</button></router-link>
        </div>
    </nav>


    <nav class='nav-mobile'>

    </nav>
</template>
    
<script>
export default {
}
</script>

<style>
.nav-desktop {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    align-items: center;
    padding: 1rem;

    
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 700;
}

.nav-logo {
    width: 100px;
    aspect-ratio: 1689/602;
}

.nav-link {
    cursor: pointer;
    color: #023d5f;
    transition-duration: 300ms;
}
.nav-link:hover {
    color:#0484ce;
}
.login-btn {
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 700;
    padding: 0.4rem 1rem;
    color: white;
    background-color: #F8B04A;
    border-radius: 5px;
    border: none;
    transition-duration: 300ms;
    cursor: pointer;
}
.login-btn:hover{
    transform: scale(1.05);
}
.link-container {
    display: flex;
    flex-direction: row;
    gap: 10vw;


}

@media screen and (max-width: 992px) {
    .nav-desktop{
        visibility: hidden;
    }
}

</style>