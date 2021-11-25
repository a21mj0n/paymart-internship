<template>
  <div class="test">
    <navbar></navbar>
    <div class="counter-block">
      <clicker></clicker>
    </div>
  </div>
</template>
<script>
  import Navbar from '../components/Navbar.vue'
  import clicker from '../components/ClickerComp.vue'
  export default {
    name: 'About',
    components: {
      Navbar,
      clicker
    }
  }
</script>
<style  lang='scss'>
  .counter-block{
    display: flex;
    align-items: center;
    justify-content: center;
    .count{
      margin-right: 10px;
      margin-left: 10px;
    }
  }
  .test-wrapper{
    display: flex;
    align-items: center;
  }
</style>