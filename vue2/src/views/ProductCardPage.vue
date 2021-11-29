/* eslint-disable vue/no-unused-components */
<template>
  <div class="products">
    <div class="container">
      <v-select
        :options="categories"
        @select="sortByCategories"
        :selected="selected"
      />
      <p></p>
      <div class="flex">
        <product
          class="card"
          v-for="product in filterProducts"
          :key="product.id"
          :product="product"
        >
        </product>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../components/ProductCards.vue";
import vSelect from "../components/Select.vue";
export default {
  name: "productCard",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Apple",
          price: 1000,
          category: "tel",
        },
        {
          id: 2,
          name: "Samsung",
          price: 400,
          category: "tel",
        },
        {
          id: 3,
          name: "Xiaomi",
          price: 500,
          category: "pl",
        },
        {
          id: 4,
          name: "Huawei",
          price: 700,
          category: "pl",
        },
        {
          id: 5,
          name: "Vivo",
          price: 300,
          category: "fl",
        },
      ],
      categories: [
        { name: "Все ", value: "All" },
        { name: "телефоны", value: "tel" },
        { name: "планшеты", value: "pl" },
      ],
      selected: "All",
      sortedProducts: [],
    };
  },
  computed: {
// eslint-disable-next-line vue/return-in-computed-property
filterProducts(){
    if(this.sortedProducts.length){
        return this.sortedProducts
    }else{
        return this.products
    }
}
  },
  methods: {
    optionSelect(option) {
      this.selected = option.name;
    },
    sortByCategories(category) {
      this.sortedProducts = [];
      let vm = this;
      this.products.map(function (item) {
        // eslint-disable-next-line no-empty
        if (item.category === category.value) {
          vm.sortedProducts.push(item);
        }
      });
    },
  },

  components: {
    // eslint-disable-next-line vue/no-unused-components
    Product,
    // eslint-disable-next-line vue/no-unused-components
    vSelect,
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.flex {
  display: flex;
  flex-wrap: wrap;
}
</style>
