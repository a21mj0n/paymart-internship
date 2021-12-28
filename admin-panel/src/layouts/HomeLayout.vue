<template>
  <div class="wrapper">
    <home-header/>
      <my-header-nav/>
      <router-view/>
    <home-footer/>
</div>
</template>

<script>

import HomeFooter from '../components/home/HomeFooter.vue'
import HomeHeader from '../components/home/HomeHeader.vue'
import MyHeaderNav from '../components/home/MyHeaderNav.vue'

export default {
  components: { HomeFooter, HomeHeader, MyHeaderNav },
  name: "HomeLayout",
}

</script>