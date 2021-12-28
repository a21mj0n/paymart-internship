<template>
    <div class="wrapper" >

        <section-collection />

        <my-slider/>

        <!-- <input v-model="range.value" type="range" id="" :min="range.min" :max="range.max">

        <p>min {{ range.min }}</p>
        <p>max {{ range.max }}</p>
        <p>VALUE {{ range.value }}</p> -->
        
        <section-products />

        <my-promotion/>

        <section-selling />

    </div>
</template>

<script>

import MyPromotion from '../components/home/MyPromotion.vue'
import MySlider from '../components/MySlider.vue'
import SectionCollection from '../sections/SectionCollection.vue'
import SectionProducts from '../sections/SectionProducts.vue'
import SectionSelling from '../sections/SectionSelling.vue'

export default {
    name: "home",
    components: { 
        MyPromotion,
        SectionCollection,
        SectionProducts,
        SectionSelling,
        MySlider
    },
    data: () => ({
        range: {
            min: 0,
            max: 20000,
            value: 0
        }
    })
}


</script>

<style lang="scss" >
.wrapper{
    margin: 0 auto;
}
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
    // collections ========================================================
    .collection{
        margin: 50px 0;
    }

    // products ==========================================================
    .products{
        margin: 50px 0; 
    }

    // selling ==========================================================
    .selling{
        margin: 50px 0;
    }

    .subscribe{
        margin: 50px 0;
    }


</style>