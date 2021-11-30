<template>
    <div>
        Product with id: {{ product.name }}
    </div>
</template>

<script>
export default {
    name: 'CardPage',
    props: ['id'],
    computed: {
        product() {
            return this.$store.getters['cart/getProduct'](this.id);
        }
    }
}
</script>

<style lang="">
    
</style>