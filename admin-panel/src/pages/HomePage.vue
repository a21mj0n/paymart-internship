<template>
    <div class="wrapper">
        <section-collection />

        <section-products />

        <my-promotion/>

        <section-selling />

        <section-subscribe/> 

        <section-navigation/>

        <my-footer-home />

    </div>
</template>

<script>

import MyPromotion from '../components/home/MyPromotion.vue'
import MyFooterHome from '../components/home/MyFooterHome.vue'
import SectionNavigation from '../sections/SectionNavigation.vue'
import SectionCollection from '../sections/SectionCollection.vue'
import SectionProducts from '../sections/SectionProducts.vue'
import SectionSelling from '../sections/SectionSelling.vue'
import SectionSubscribe from '../sections/SectionSubscribe.vue'

export default {
    components: { 
        MyPromotion,
        SectionNavigation,
        MyFooterHome,
        SectionSubscribe,
        SectionCollection,
        SectionProducts,
        SectionSelling
    },
    name: "home",
    data(){
        return{

}
    }

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