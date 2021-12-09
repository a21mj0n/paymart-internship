<template>
  <div class="content">
     <form class="from" @submit.prevent="createProduct" enctype="">
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
      <div class="add__img">
        <label class="label__add-img-wrapper">
          <input type="file" class="hide">
          <div class="label__add-img">
            <i class="fa fa-camera" aria-hidden="true"></i>
          </div>
            
        </label>
        <label class="label__add-img-wrapper">
          <input type="file" class="hide">
          <div class="label__add-img">
            <i class="fa fa-camera" aria-hidden="true"></i>
          </div>
            
        </label>
        <label class="label__add-img-wrapper">
          <input type="file" class="hide">
          <div class="label__add-img">
            <i class="fa fa-camera" aria-hidden="true"></i>
          </div>
            
        </label>
        <label class="label__add-img-wrapper">
          <input type="file" class="hide">
          <div class="label__add-img">
            <i class="fa fa-camera" aria-hidden="true"></i>
          </div>
            
        </label>
        
      </div>
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

.add__img{display: flex;
  width: 500px;
  height: 125px;
  margin: 0 -5px;
    .label__add-img-wrapper{
      padding: 0 5px;
      .label__add-img{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      background: rgb(99, 98, 98);
      border-radius: 10px;
      }
    
    width: 25%;
    height: 100%;
    border-radius: 10px;
    
    
  }
}
.hide{
  display: none;
}

</style>