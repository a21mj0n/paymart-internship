<template>
  <div class="wrapper">
    <h1 class="title">Избранные товары</h1>
    <favorite-product></favorite-product>
  </div>
</template>

<script>
 import favoriteProduct from '../components/home/favoriteProduct.vue'
export default {
components: {favoriteProduct},
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>

.wrapper {
    padding-top: 20px;
    .title {
        text-align: center;
    }
}
</style>