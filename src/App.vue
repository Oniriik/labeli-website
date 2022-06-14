<template>
  <HomeBackground />
  <div class="container">
    <NavBar />
    <router-view />
  </div>

</template>

<script>
import HomeBackground from '@/components/HomeBackground'
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'App',
  components: {
    HomeBackground,
    NavBar
  },
  beforeMount(){
    this.$store.dispatch('fetchUser')
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: inherit;
  text-decoration: none;
  list-style-type: none;
  font-family: 'Inter', sans-serif;
}

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}
</style>
