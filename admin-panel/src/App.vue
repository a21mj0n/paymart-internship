<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import AdminLayout from './layouts/AdminLayout.vue';

export default {
  name: "App",
  components: {
    AdminLayout
  },
  computed: {
    layout(){
      console.log(this.$route.meta.layout);
      return (this.$route.meta.layout || 'empty') + '-layout';
    }
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
