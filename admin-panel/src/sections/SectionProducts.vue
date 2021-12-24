<template>
    <section class="products">
        <div class="container">
            <item-categories/>
            <Carousel 
                :perPageCustom="[[500, 2], [768, 3], [1200, 4]]"
                :navigationEnabled="true"
                :paginationEnabled="false"  
                :autoplay="true"
                :autoplayHoverPause="true"
                :loop="true"
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
        </div>
    </section>
</template>
<script>
import CartItem from '../components/home/CartItem.vue'
import { Carousel, Slide } from 'vue-carousel'
import ItemCategories from '../components/home/ItemCategories.vue'
export default {
  components: { 
        CartItem ,
        Carousel,
        Slide,
        ItemCategories
    },
    
}
</script>
<style lang="scss">
        // carousel ===========================================================
    .VueCarousel-navigation-button {
        z-index: 99;
        top: 95% !important;
    }
    .VueCarousel-navigation > button{
        left: 100% !important;
    }
    .container{
        .card__link-wrapper{
            margin-left: -15px;
            margin-right: -15px;
            display: flex;
        }
    }
</style>