<template>
    <section class="products">
        <div class="container">
            <item-categories v-if="itemCategories"/>
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
                    <button class="slick-custom-arrow ">
                        <i class="fa fa-angle-left"/>
                    </button>
                </template>
                 <template #nextArrow="">
                    <button class="slick-custom-arrow ">
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
import ItemCategories from '../components/home/ItemCategories.vue'
export default {
    props: {
        'slidesToShow': {
            type: Number,
            default: 4
        }, 
        'itemCategories':{
            type: Boolean,
            default: true
        },
        'carouselDots': {
            type: Boolean,
            default: true
        },
        'carouselArrows':{
            type: Boolean,
            default: true
        }
    },
    components: { 
        CartItem ,
        VueSlickCarousel,
        ItemCategories
    },
    data(){
        return{
            slickOptions:{
                "dots": this.carouselDots,
                "arrows": this.carouselArrows,
                "infinite": false,
                "speed": 500,
                "slidesToShow": this.slidesToShow,
                "slidesToScroll": 1,
                "initialSlide": 0,
                "responsive": [
                    {
                        "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 3,
                            "slidesToScroll": 3,
                            "infinite": true,
                            "dots": this.carouselDots
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
    },
    created(){
        console.log(
            this.carouselDots
        );
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
            background-color: $green-color ;
            border-color: $green-shadow ;
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
        display: inline-block ;
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