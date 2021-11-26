<template>
    <div>
        <h1>Home Page</h1>
        <router-link to="/about">Link to about page</router-link>
        <div class="flex">
            <product-card class="card" 
                v-for="product in products" 
                :key="product.id"
                :product='product'
            />
        </div>
    </div>
</template>
<script>
import ProductCard from '../components/ProductCard.vue'
export default {
    components: {
        ProductCard,
    },
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Apple',
                    price: 1000
                },
                {
                    id: 2,
                    name: 'Samsung',
                    price: 400
                },
                {
                    id: 3,
                    name: 'Xiaomi',
                    price: 500
                }
                ]
        }
    },
    created(){
        // console.log(this.$route);
    }
}
</script>

<style>
    .flex{
        display: flex;
        justify-content: space-between;
    }
</style>