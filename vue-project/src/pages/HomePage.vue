<template>
    <div>
        <h1>Home Page</h1>
        <button @click="decrement">
            -
        </button>
        <h2>Счетчик: {{this.$store.state.count}}</h2>
        <button @click="increment">
            +
        </button>
        <router-link to="/about">Link to about page</router-link>
        <div class="flex">
            <product-card class="card" 
                v-for="product in products" 
                :key="product.id"
                :product='product'
            >
                <template #test>
                   <div>
                        <h1>slot from home: {{product.name}}</h1>
                   </div>
                </template>
            </product-card>
        </div>
        <!-- <my-button>Click</my-button> -->
    </div>
</template>
<script>
import ProductCard from '../components/ProductCard.vue';

export default {
    components: {
        ProductCard,
    },
    methods: {
        increment(){
            this.$store.dispatch('increment')
        },
        decrement(){
            this.$store.dispatch('decrement')
        }
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
};
</script>

<style>
    .flex{
        display: flex;
        justify-content: space-between;
    }
</style>