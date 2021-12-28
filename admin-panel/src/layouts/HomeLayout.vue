<template>
  <div class="wrapper">
    <home-header/>
      <my-header-nav/>
      <router-view/>
      <section-subscribe/>
      <section-navigation/>
    <home-footer/>
</div>
</template>

<script>

import HomeFooter from '../components/home/HomeFooter.vue'
import HomeHeader from '../components/home/HomeHeader.vue'
import MyHeaderNav from '../components/home/MyHeaderNav.vue'
import SectionNavigation from '../sections/SectionNavigation.vue'
import SectionSubscribe from '../sections/SectionSubscribe.vue'

export default {
  components: { HomeFooter, HomeHeader, MyHeaderNav, SectionNavigation, SectionSubscribe },
  name: "HomeLayout",
}

</script>