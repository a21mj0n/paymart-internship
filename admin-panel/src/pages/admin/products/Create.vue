<template>
  <div class="content">
     <form class="from" @submit.prevent="createProduct">
      <input class="img" placeholder="Введите ссылку картинки" type="text" v-model="img"/>
      <input class="name" placeholder="Введите название товара" type="text" v-model="name" />
      <input
        class="brand"
        placeholder="Введите фирму производителя"
        type="text"
        v-model="brand"
      />
      <input class="color" placeholder="Введите цвет" type="text" v-model="color" />
      <input class="size" placeholder="Введите размер" type="text" v-model="size"/>
      <input class="price" placeholder="Назовите цену" type="text" v-model="price"/>
      <button class="btn">Создать</button>
    </form>
  </div>
</template>

<script>
import axios from "axios"
export default {
    name:  "createProduct",
    data(){
        return{
            id: "",
          img: "",
          name: "",
          brand: "",
          color: "",
          size: "",
          price: "",
          qty: 0,
          amount:'',
        }
    },
    methods:{
       async createProduct(){
            const productData = {
            id: Date.now(),
            createdAt: new Date().toLocaleString(),
            img: this.img,
            name: this.name,
            brand: this.brand,
            color: this.color,
            size: this.size,
            price: this.price,
            qty: 0,
            amount:'',
            }
            await axios.post('https://61ade31fd228a9001703b022.mockapi.io/api/products', productData)
            this.img = this.name = this.brand = this.color = this.size = this.price = ""
        }
    }
}
</script>

<style lang='scss' scoped>
.content {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: rgb(238, 238, 238);
  height: calc(100vh - 100px);
  overflow-y: auto;
}
form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    ::placeholder { 
            font-size: 18px;
            
            
          }
    input{
        font-size: 18px;
        padding-left: 15px;
        width: 500px;
        height: 50px;
        margin: 15px 0;
        border-radius: 7px;
        border: 2px solid teal;
        &:focus{
            outline: 3px solid teal;
        }
    }
    .btn{
        margin-top: 20px;
        cursor: pointer;
        padding: 10px 30px;
        background: teal;
        color: white;
        font-size: 18px;
        font-weight: bold;
        border: none;
        border-radius: 5px;
    }
}


</style>