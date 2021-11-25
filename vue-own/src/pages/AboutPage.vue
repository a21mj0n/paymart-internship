<template>
  <div class="about">
    <navbar></navbar>
    <h1>This is an about page</h1>
  </div>
</template>
<script>
  import Navbar from '../components/Navbar.vue'

  export default {
    name: 'About',
    components: {
      Navbar
    }
  }
</script>
<style scoped lang='scss'>
  li{
    cursor:pointer;
  }
</style>