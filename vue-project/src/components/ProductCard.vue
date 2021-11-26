<template>
    <div class="card">
        {{product.name}}
        <p>{{product.price}}</p>
        <!-- old version -->
        
       <button @click="$router.push(`/cards/${product.id}`)">
            Link to {{product.name}}
        </button>
        <!-- simple version -->
        <button @click="$router.push({name: 'cards', params: {id: product.id}})">
            Link to {{product.name}}
        </button>
    </div>
</template>
<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    created(){
    }
}
</script>
<style scoped>
    .card{
        width: 300px;
        height: 300px;
        border: 1px solid #ccc;
    }
</style>