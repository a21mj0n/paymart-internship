<template>
    <div>
        <h2>Home page</h2>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam corporis voluptas quidem mollitia veritatis itaque, nihil totam ipsa fuga modi.
        </p>
        <router-link :to="{name: 'about'}">
            Link to about page
        </router-link>
        <div class="block__row">
            <div 
                class="card"
                v-for="product in products" 
                :key="product.id"
            >   
                <p>{{ product.name }}</p>
                <p>{{ product.price }}$</p>
               <button @click="$router.push(`/cards/${product.id}`)">
                    Link:
               </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
            ]   
        };
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
    .card{
        width: 200px;
        height: 200px;
        border: 1px solid #ccc;
        box-shadow: 0 0 3px rgb(90, 90, 90);
    }
</style>