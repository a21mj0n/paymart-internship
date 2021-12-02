<template>
    <div>
        <!-- from store -->
        <h1>{{ this.$store.state.cart.products }}</h1>
        <h1>{{ findByAge ()}}</h1>

        <!-- with getters -->

        <h1>{{ this.$store.getters['cart/getProduct'](20)}} </h1>
        
        <p>
            <strong>old verison:</strong>You opened card by id {{$route.params.id}}
        </p>

        <p>
            <strong>simple verison:</strong>You opened card by id {{ id }}
        </p>

    </div>
</template>

<script>

export default {
    name: 'CardPage',
    props: ['id'],
    methods:{
        findByAge(){
            return  this.$store.state.cart.products.find(({age}) => age == 20)
        }
    }
}
</script>
<style scoped>
    
</style>