<template>
  <div id="app">
    <div  class="flex">
      <my-categories 
        :categories="categories"
        @setCategory="setSelectedCategory"
      />
      <my-sort 
      
      />
    </div>
    <div class="products">
      <my-pizza   
        v-for="pizza in pizzas"   
        :key="pizza.id"
        :pizza="pizza"
      />
    </div>
  </div>
</template>

<script>
import MyCategories from './components/MyCategories.vue'
import MyPizza from './components/MyPizza.vue'
import MySort from './components/MySort.vue'

export default {
  components: { MyCategories, MySort, MyPizza },
  name: 'App',
  data(){
    return {
      categories: [
        "Вегетарианская", 
        "Гриль", 
        "Острые", 
        'Закрытые'
      ],
      selectedCategory: 0,
      pizzas: [
          {
            "id": 0,
            "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
            "name": "Пепперони Фреш с перцем",
            "types": [0, 1],
            "sizes": [26, 30, 40],
            "price": 803,
            "category": 0,
            "rating": 4
          },
          {
            "id": 1,
            "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
            "name": "Сырная",
            "types": [0],
            "sizes": [26, 40],
            "price": 245,
            "category": 1,
            "rating": 6
          },
          {
            "id": 2,
            "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",
            "name": "Цыпленок барбекю",
            "types": [0],
            "sizes": [26, 40],
            "price": 295,
            "category": 1,
            "rating": 4
          },
      ]
    }
  },
  methods: {
    setSelectedCategory(id){
      console.log(id)
    }
  },
}
</script>

<style scoped>
  #app{
    padding: 50px;
    width: 1200px;
    margin: 0 auto;
  }
  .flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .products{
    display: flex;
    margin: 50px 0;
    justify-content: space-between;
  }
</style>
