<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import EmptyLayout from './layouts/EmptyLayout.vue';
import MainLayout from './layouts/MainLayout.vue';
import DefaultLayout from './layouts/DefaultLayout.vue';

import NavBar from './components/navBar.vue';

export default {
  name: 'App',
  components: { 
    NavBar,
    EmptyLayout,
    MainLayout, 
    DefaultLayout,
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout';
    }
  }
  
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
body{
  margin: 0;
  padding: 0;
}
  .container{
    width: 1100px;
    margin: 50px auto;
  }
</style>
