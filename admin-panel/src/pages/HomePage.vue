<template>
    <div class="container">
        <h1>Home Page</h1>
        <div class="container">
            <item-categories/>
            <Carousel 
                :perPageCustom="[[500, 2], [768, 3], [1200, 4]]"
                :navigationEnabled="true"
            >
                <Slide>
                    <cart-item/>
                </Slide>
                <Slide>
                    <cart-item/>
                </Slide>
                <Slide>
                    <cart-item/>
                </Slide>
                <Slide>
                    <cart-item/>
                </Slide>
                <Slide>
                    <cart-item/>
                </Slide>

            </Carousel>
            <product-item />
            
        </div>
    </div>
</template>

<script>
import CartItem from '../components/home/CartItem.vue'
import ProductItem from '../components/home/ProductItem.vue'
import ItemCategories from '../components/home/ItemCategories.vue'
import { Carousel, Slide } from 'vue-carousel';
export default {
    components: { 
        CartItem, 
        ProductItem,
        ItemCategories,
        Carousel,
        Slide,
    },
    name: "home",
    data(){
        return{

        }
    }
}

</script>

<style lang="scss" >
    .flex{
        display: flex;
        flex-wrap: wrap;
    }
    .VueCarousel-slide {

    }
</style>