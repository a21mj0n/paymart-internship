<template>
    <div class="container">
        <h1>Home Page</h1>
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
            <div class="row">
                <div class="small-carousel" 
                    v-for="i in 3"
                    :key="i"
                >
                    <h2>Top Selling</h2>
                    <Carousel 
                        :perPageCustom="[[500, 1]]" 
                        :paginationEnabled="false"  
                        :navigationEnabled="true"
                        :autoplay="true"
                        :autoplayTimeout="2000"
                        :autoplayHoverPause="true"
                        :loop="true"
                    >
                        <Slide  
                            v-for="i in 3"
                            :key="i"
                        >
                            <product-item />
                            <product-item />
                            <product-item />
                        </Slide>
                        
                    </Carousel>
                </div>
            </div>
            
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
    .row{
        display: flex;
        justify-content: space-between;
    }
    .small-carousel{
        width:33.333%;
        .VueCarousel-navigation-button {
            z-index: 99;
            top: -5% !important;
        }
        .VueCarousel-navigation > button{
            left: 75% !important;
        }
    }
    // carousel ===========================================================
    .VueCarousel-navigation-button {
        z-index: 99;
        top: 95% !important;
    }
    .VueCarousel-navigation > button{
        left: 100% !important;
    }

</style>