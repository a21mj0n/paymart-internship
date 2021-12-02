<template>
    <div class="">
        <h1>About Page</h1>
        <div style="display: block">
            <!-- <button @click="decrement" >-</button> -->
            <h2 style="display: 'block'">{{ this.$store.state.count }}</h2>  
            <!-- <button @click="increment">+</button> -->
            <button @click="sendProducts">Send</button>
        </div>      
        <router-link to="/">Link to home page</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return{
             products: [
                {
                    name: 'Bekzod',
                    age: 20,
                },
                {
                    name: 'Azizbek',
                    age: 25
                }
            ]
        }
    },
    methods: {
        // increment(){
        //     this.$store.dispatch('increment')
        // },
        // decrement(){
        //     this.$store.dispatch('minusCount')
        // },
        sendProducts(){
            this.$store.dispatch('cart/setProducts', this.products)
        }

    },
    created(){
        console.log(
            this.$store
        );
    }
}

</script>

<style>
    
</style>