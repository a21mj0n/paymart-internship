<template>
  <div class="content">
    <h3>Edit {{brandByID.name}}</h3>
    <form @submit.prevent="editCategory">
      <div class="change-wrapper">
        <div class="input-wrapper">
          <p>Name</p>
          <input type="text" v-model="brandByID.name" name='name' placeholder="Change name" >
        </div>
        <span class="btn-def">
          <button>Edit</button>
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
      brandByID:{}
    }
  },
  methods: {
    async editCategory(){
      await axios.put(`https://marketpaymart.herokuapp.com/api/dashboard/brands/${this.$route.params.id}`, this.brandByID)
      this.$router.push({name: 'admin.brands'})
    }
  },
  async created(){
    const {data} = await axios.get(`https://marketpaymart.herokuapp.com/api/dashboard/brands/${this.$route.params.id}`)
    this.brandByID = data
  }
}
</script>

<style lang='scss' scoped>
  h3{
    text-align: center;
    margin: 30px;
  }
  .change-wrapper{
    display: flex;
    align-items: center;
    flex-direction: column;
    .input-wrapper{
      p{
        margin-bottom: 5px;
      }
      margin-bottom: 20px;
    }
    input{
      height:40px;
      outline: none;
      padding: 3px 20px;
    }
  }
  .btn-def{
    display: flex;
    justify-content: center;
    button{
      display:flex;
      align-items:center;
      justify-content: center;
      height: 50px;
      padding: 5px 20px;
      border:1px solid black;
      cursor: pointer;
      transition: all 0.3s ease;
      outline: none;
      &:hover{
        background-color: black;
        color:white;
      }
    }
  }
</style>