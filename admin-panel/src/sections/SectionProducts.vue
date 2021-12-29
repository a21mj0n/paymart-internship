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
import CartItem from '../components/home/CartItem.vue'
import ItemCategories from '../components/home/ItemCategories.vue'
import '../assets/styles/carousel.scss'

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

<style lang="scss" scoped>
    .container{
        .card__link-wrapper{
            margin-left: -15px;
            margin-right: -15px;
            display: flex;
        }
    }
</style>