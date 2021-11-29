<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import EmptyLayout from './layouts/EmptyLayout.vue';
import MainLayout from './layouts/MainLayout.vue';
  
export default {
  name: 'App',
  components: {
    NavBar,
    EmptyLayout,
    MainLayout
  },
  computed: {
    layout(){
      return (this.$route.meta.layout || 'empty') + '-layout';
    }
  }
}
</script>

<style>
*{
  margin: 0;
  box-sizing: border-box;
}
.container{
  width: 1100px;
  margin: 50px auto;
}
</style>
