<template>
    <section class="products">
        <div class="container">
            <item-categories/>
<<<<<<< HEAD
            <VueSlickCarousel 
               v-bind="slickOptions"
            >
                <cart-item/>
                <cart-item/>
                <cart-item/>
                <cart-item/>
                <cart-item/>
                <cart-item/>

                 <template #prevArrow="">
                    <button class="slick-arrow slick-prev">
                        <i class="fa fa-angle-left"/>
                    </button>
                </template>
                 <template #nextArrow="">
                    <button class="slick-arrow slick-next">
                        <i class="fa fa-angle-right"/>
                    </button>
                </template>
                 <template #customPaging="">
                    <div class="custom-dot">
                        
                    </div>
                </template>
            </VueSlickCarousel>
        </div>
    </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import CartItem from '../components/home/CartItem.vue'
=======
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
>>>>>>> a904ddc03ca4b65022a6bd8522a01ed270e2f398
import ItemCategories from '../components/home/ItemCategories.vue'
export default {
  components: { 
        CartItem ,
<<<<<<< HEAD
        VueSlickCarousel,
        ItemCategories
    },
    data(){
        return{
            slickOptions:{
                "dots": true,
                "infinite": false,
                "speed": 500,
                "slidesToShow": 4,
                "slidesToScroll": 1,
                "initialSlide": 0,
                "responsive": [
                    {
                        "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 3,
                            "slidesToScroll": 3,
                            "infinite": true,
                            "dots": true
                        }
                    },
                    {
                        "breakpoint": 600,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 2,
                            "initialSlide": 2
                        }
                    },
                    {
                        "breakpoint": 480,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1
                        }
                    }
                ]
            }
        }
    }
    
}
</script>

<style lang="scss">
  $green-color:#72E019;
  $green-shadow: #64c515;
        // carousel ===========================================================
    
    .slick-dots{
        display: flex !important;
        justify-content: center;
        list-style-type: none;
        li{
            margin: 0 5px;
            border: 1px solid #ccc;
            height: 12px;
            width: 12px;
            border-radius: 50px;
            cursor: pointer;
        }
        .slick-active{
            background-color: $green-color !important;
            border-color: $green-shadow !important;
        }
    }
    .slick-prev {
        cursor: pointer;
        position: absolute;
        background-color: transparent;
        border: none;
        transform: none;
        bottom: 20px;
        right: 0;
        width: 25px;
        height: 25px;
        display: inline-block !important;
        margin: 0px 2px;
        z-index: 99;
        border: 1px solid #ccc;
        border-radius: 50px;
        &:hover{
            box-shadow: 0 0 3px $green-color;
            border-color: $green-color;
            i{
                color: $green-color;
            }
        }
    }
    .slick-next{
        cursor: pointer;
        position: absolute;
        background-color: transparent;
        border: none;
        transform: none;
        bottom: 20px;
        right: -30px;
        width: 25px;
        height: 25px;
        display: inline-block !important;
        margin: 0px 2px;
        z-index: 99;
        border: 1px solid #ccc;
        border-radius: 50px;
        &:hover{
            box-shadow: 0 0 3px $green-color;
            border-color: $green-color;
            i{
                color: $green-color;
            }
        }
        
=======
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
>>>>>>> a904ddc03ca4b65022a6bd8522a01ed270e2f398
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