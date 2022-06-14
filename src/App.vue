<template>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
*, *:before, *:after{  
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
