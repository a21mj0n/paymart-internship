<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
//====== layouts ==========================
import EmptyLayout from './layouts/EmptyLayout.vue';
import MainLayout from './layouts/MainLayout.vue';
import DefaultLayout from './layouts/DefaultLayout.vue';
import UpperLayout from './layouts/UpperLayout.vue';
//======components=========================

export default {
  name: 'App',
  components: { 
    EmptyLayout,
    MainLayout, 
    DefaultLayout,
    UpperLayout
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout';
    }
  },
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
