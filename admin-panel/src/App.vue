<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  created(){
    console.log(this.$route);
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Poppins:wght@300;400;600&display=swap');
 *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: Poppins;
 }
</style>
