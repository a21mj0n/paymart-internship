<template>
  <div class="wrapper">
<<<<<<< HEAD
    <home-header />
    <my-header-nav />
    <MyBrandCrumb ></MyBrandCrumb>
    <router-view />
    <section-subscribe />
    <section-navigation />
    <home-footer />
  </div>
</template>

<script>
import HomeFooter from "../components/home/HomeFooter.vue";
import HomeHeader from "../components/home/HomeHeader.vue";
import MyHeaderNav from "../components/home/MyHeaderNav.vue";
import MyBrandCrumb from "../components/home/MyBrandCrumb.vue";
import SectionNavigation from "../sections/SectionNavigation.vue";
import SectionSubscribe from "../sections/SectionSubscribe.vue";

export default {
  components: {
    HomeFooter,
    HomeHeader,
    MyHeaderNav,
    SectionNavigation,
    SectionSubscribe,
    MyBrandCrumb,
  },
  name: "HomeLayout",
};
=======
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

>>>>>>> a904ddc03ca4b65022a6bd8522a01ed270e2f398
</script>