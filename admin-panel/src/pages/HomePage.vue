<template>
    <div class="container">
        <h1>Home Page</h1>
        <div class="card__link-wrapper">
             <my-card-link
        :srcImage="srcImageLaptop"
        />
        <my-card-link
        :srcImage="srcImageAccessories"
        />
        <my-card-link
        :srcImage="srcImageCamera"
        />
        </div>
       
    </div>
</template>

<script>
import MyCardLink from '../components/home/MyCardLink.vue'
export default {
  components: { MyCardLink },
    name: "home",
    data(){
        return{
            srcImageAccessories: 'https://st.depositphotos.com/1203063/2785/i/950/depositphotos_27856497-stock-photo-headphones.jpg',
            srcImageLaptop: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0QfaPWOIyXNa0rq9vjtQ0OusYrU3ztKzR-g&usqp=CAU',
            srcImageCamera: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdc8v84ZjbEfCS7O5jB0uWSUIYSUMjcrPsmA&usqp=CAU',
            

        }
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