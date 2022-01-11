<template >
    <div class="cart">
        <div class="container">
            <div class="row">
                <h1>Страница Корзины</h1>
                <p class="remove-all" @click="removeAll">
                    <i class="fa fa-trash"/>
                    Удалить все
                </p>
            </div>
            <div class="cart-items" v-if="cartItems.length">
                <cart-item 
                    v-for="cartItem in cartItems" 
                    :key="cartItem.id"
                    :name="cartItem.product.name"
                    :price="cartItem.product.price"
                    :amount="cartItem.amount"
                    :image="cartItem.product.image[0]"
                    :productId="cartItem.product.id"
                    :cartId="cartItem.id"
                />
            </div>
            <div class="cart-empty" v-else>
                <h2>
                    Корзина пуста
                </h2>
            </div>
            <button class="cart-order" @click="$router.push({name: 'checkout'})">Оформить заказ</button>
        </div>
    </div>
</template>
<script>
import CartItem from '../components/CartItem.vue'
export default {
    name: "CartPage",
    components: { CartItem },
    data(){
        return{
            cartItems: []
        }
    },
    async created(){
    const resp = await this.$axios.get('api/cart')
        // products 
        this.cartItems = resp.data.cart
        console.log(this.cartItems);
        // amount
        this.totalCount = resp.data.cart.length
        // all price 
        this.totalPrice = resp.data.cart.reduce((sum, {product}) => parseInt(product.price) + sum,0)
        console.log(this.cartItems);
    },
    methods:{
        removeAll(){
            if(confirm('Вы точно хотите удалить все товары?')){
                alert('Все товары удалены!')
            }
        }
    }
    
}
</script>
<style lang="scss" scoped>
    @import '../assets/main-styles.scss';
    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    button{
        padding: 10px 15px;
        border-radius: 5px;
    }
    .cart{
        padding: 20px 0;
        h1{
            margin-bottom: 20px;
            text-align: center;
        }
        &-items{
            min-height: calc(100vh - 435px);
        }
       
    }
    .cart-empty{
        min-height: calc(100vh - 435px);
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
        align-items: center;
        h2{
            padding: 50px;
        }


    }
    .cart-order{
        width: 150px;
        border: 1px solid $green-color;
        color: #fff;
        background-color: $green-color;
        cursor: pointer;
        &:hover{
            box-shadow: 0 0 3px $green-color;
        }
    }

    .remove-all{
        color: rgb(98, 98, 98);
        i{
            font-size: 16px;
        }
        cursor: pointer;
    }
</style>