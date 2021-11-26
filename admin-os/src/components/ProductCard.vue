<template>
     <div class="card" :style="cardStyle">   

        <slot name="header"></slot>
        <br>
        <!-- <div>Card Header</div> -->
        
        <p>{{ product.name }}</p>
        
        <slot></slot>
        <!-- Card Content (default) -->

        <p>{{ product.price }}$</p>

        <button @click="$router.push({ name: 'card', params: { id: product.id } })">
            Link:
        </button>
        
        <br><br>

        <slot name="footer"></slot>
        <!-- <div v-html="title"></div> // 'Card <span style="color: red">Footer</span> -->

    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    data() {
        return {
            cardStyle: {
                backgroundColor: this.bgColor,
            }
        }
    },
    props: {
        product: {
            type: Object,
            required: true,
        },
        bgColor: {
            type: String,
        },
    }
}
</script>

<style lang="scss" scoped>
    .card {
        width: 200px;
        height: 200px;
        border: 1px solid #ccc;
        box-shadow: 0 0 3px rgb(90, 90, 90);
    }
</style>