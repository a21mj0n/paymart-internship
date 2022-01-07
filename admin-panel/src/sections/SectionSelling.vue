<template >
  <section class="selling">
    <div class="container">
      <div class="row">
        <div class="small-carousel" v-for="i in 3" :key="i">
          <h2>Top Selling</h2>
          <Carousel
            :perPageCustom="[[500, 1]]"
            :paginationEnabled="false"
            :navigationEnabled="true"
            :autoplay="true"
            :autoplayTimeout="2000"
            :autoplayHoverPause="true"
            :loop="true"
            :perPage="3"
          >
            <Slide v-for="i in 3" :key="i">
              <product-item
                v-for="product in products"
                :key="product.id"
                :name="product.name"
                :price="product.price"
                :image="product.image[0]"
                :productId="product.id"
                :category="categories.filter(item => item.id === product.category_id)[0].name"
              />
            </Slide>
          </Carousel>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ProductItem from "../components/home/ProductItem.vue";
import { Carousel, Slide } from "vue-carousel";
export default {
  components: { ProductItem, Slide, Carousel },
  data() {
    return {
      products: [],
      categories: [],
      category: ''
    };
  },
  async created() {
    try {
      const resp = await this.$axios.get(`/api/products`);
      this.products = resp.data;
      console.log('categories request from section selling!');
      const categoriesData = await this.$axios.get("/api/categories");
      this.categories = categoriesData.data

    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style lang="scss" >
.VueCarousel-navigation-button {
  z-index: 99;
  top: -5% !important;
}
.VueCarousel-navigation > button {
  left: 75% !important;
}
</style>