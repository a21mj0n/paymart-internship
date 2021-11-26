<template>
    <div>
        <h2>Home page</h2>

        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Nam corporis voluptas quidem mollitia veritatis itaque, nihil totam ipsa fuga modi.
        </p>

        <router-link :to="{name: 'about'}">
            Link to about page
        </router-link>

        <div class="block__row">
           <product-card 
                v-for="product in products" 
                :key="product.id"
                :product="product"
                :bg-color="backgroundColor"
            >
 
                <template #header>
                    <div>Card Header</div>
                </template>

                <template #default>
                    Card Content (default)
                </template>

                <template #footer>
                    <div v-html="title"></div>
                </template>
                
            </product-card>
        </div>
    </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'

export default {
    name: 'HomePage',
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'LG',
                    price: 200,
                },
                {
                    id: 2,
                    name: 'APPLE',
                    price: 200,
                },
                {
                    id: 3,
                    name: 'MI',
                    price: 200,
                },
            ],
            backgroundColor: 'yellow',  
            title: 'Card <span style="color: red">Footer</span>',
        };
    },
    components: {
        ProductCard,
    },
    created() {
        document.title = this.$route.meta.title;
    },
}
</script>

<style lang="scss">
    .block__row{
        margin: 20px 0;
        display: flex;
        justify-content: space-between;
    }
   
</style>