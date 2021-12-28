<template>
    <div class="wrapper" >

        <section-collection />
<<<<<<< HEAD

=======
        
>>>>>>> a904ddc03ca4b65022a6bd8522a01ed270e2f398
        <section-products />

        <my-promotion/>

        <section-selling />

<<<<<<< HEAD
=======
        <section-subscribe/> 

        <section-navigation/>

>>>>>>> a904ddc03ca4b65022a6bd8522a01ed270e2f398
    </div>
</template>

<script>

import MyPromotion from '../components/home/MyPromotion.vue'
<<<<<<< HEAD
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
    },
    data: () => ({
        range: {
            min: 0,
            max: 20000,
            value: 0
        }
    })
}


=======
import SectionNavigation from '../sections/SectionNavigation.vue'
import SectionCollection from '../sections/SectionCollection.vue'
import SectionProducts from '../sections/SectionProducts.vue'
import SectionSelling from '../sections/SectionSelling.vue'
import SectionSubscribe from '../sections/SectionSubscribe.vue'

export default {
    components: { 
        MyPromotion,
        SectionNavigation,
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

>>>>>>> a904ddc03ca4b65022a6bd8522a01ed270e2f398
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