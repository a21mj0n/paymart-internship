<template>
  <div class="container">
    <div class="wrapper">
      <h1 class="title">Избранные товары</h1>
      <div class="empty">
        <img src="../assets/empty-wishlist..svg" alt="" />
        <p class="subtitle"> Ваш список избранного пуст</p>
        <div class="descr">
          Добавляйте понравившиеся товары в избранное, чтобы посмотреть или
          купить их позже
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//  import favoriteProduct from '../components/home/favoriteProduct.vue'
export default {
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding-top: 40px;
  min-height: 360px;
  background: #f7f7f7;
  padding-top: 20px;
  .title {
    text-align: center;
  }
  .empty {
    width: 360px;
    margin: 0 auto;
    text-align: center;
    .subtitle {
      font-size: 16px;
    }
    img{
      width: 150px;
      height: 150px;
      object-fit: contain;
    }
    .descr {
      font-size: 12px;
      margin-top: 15px;
      color: #767676;
    }
  }
}
</style>