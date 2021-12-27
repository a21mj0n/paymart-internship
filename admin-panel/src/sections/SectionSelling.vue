<template >
   <section class="selling">
        <div class="container">
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
    </section>
</template>
<script>
import ProductItem from '../components/home/ProductItem.vue'
import { Carousel, Slide } from 'vue-carousel'
export default {
  components: { ProductItem, Slide, Carousel },
    
}
</script>
<style lang="">
    
</style>