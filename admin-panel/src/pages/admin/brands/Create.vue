<template>
  <div class="content">
    <h2>Create Brand</h2>
    <form @submit.prevent="createBrand">
      <div class="form-wrapper">
        <input v-model="name" type="text" placeholder="Brand name" name='brand-name'>
        <input v-model='image' type="text" placeholder="Brand image" name='brand-image'>
        <!-- <label for="file">
          <input type="text" readonly name='file-name' placeholder="Brand image">
          <input type="file" class="hide" id="file" placeholder="brand image" name='brand-image' onchange="javascript:this.previousElementSibling.value = this.files[0].name">
          <span><p>Choose file</p></span>
        </label> -->
        <span class="btn-def">
          <button type='submit'>Create brand</button>
        </span>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      name:'',
      image:'',
    }
  },
  methods:{
  async createBrand(){
      const brand = {
        name:this.name,
        image:this.image,
      }
      await axios.post('https://61ade31fd228a9001703b022.mockapi.io/api/brands',brand)
      this.image = this.name = ''
    }
  }
}
</script>

<style lang='scss' scoped>
  .content{
    h2{
      margin-bottom: 30px;
      text-align: center;
    }
    .form-wrapper{
      display: flex;
      align-items: center;
      flex-direction: column;
      #file{
        display:none;
      }
      input{
        height: 50px;
        padding: 5px 20px;
        border:none;
        outline: none;
        margin-bottom: 20px;
        min-width: 20%;
      }
      label{
        min-width: 20%;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        span{
          color:white;
          white-space: nowrap;
          padding: 5px 10px;
          background-color: black;
          height: 50px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        input{
          width: 100%;
          margin-bottom: 0;
        }
      }
      .btn-def{
        button{
          display: flex;
          align-items:center;
          justify-content: center;
          height: 50px;
          padding: 5px 20px;
          border:1px solid black;
          background-color: white;
          transition:all 0.3s ease;
          &:hover{
            background-color: black;
            color:white;
          }
        }
      }
    }
  }
</style>