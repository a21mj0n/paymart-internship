<template>
  <div class="content">
    <vuetable
    :data="brands"
    :fields="fields"
    :api-mode='false'
    >
      <template slot='actions' slot-scope="props">
        <div class="flex-wrapper">
        <i class="fa fa-search-plus" @click="$router.push({name:'admin.brands.view', params:{id:props.rowData.id}})"></i>
        <i class="fa fa-edit" @click="$router.push({name:'admin.brands.edit', params:{id:props.rowData.id}})"></i>
        <i class="fa fa-close" @click='removeCategory(props.rowData.id)'></i>
        </div>
      </template>
    </vuetable>
  </div>
</template>

<script>
import axios from 'axios'
import Vuetable from 'vuetable-2'
import brandFields from '../../../utils-vuetable/brands-vuetable/field'
export default {
  components:{
    Vuetable
  },
  data(){
    return{
      brands:[],
      fields:brandFields(this.$i18n),
    }
  },
  async created(){
    const {data} = await axios.get('https://marketpaymart.herokuapp.com/api/dashboard/brands')
    this.brands = data
  },
  methods:{
    async removeCategory(id){
      if(window.confirm("Are you sure that you want to delete brand?")){
        await axios.delete(`https://marketpaymart.herokuapp.com/api/dashboard/brands/${id}`)
        this.$router.push({name: 'admin.brands'})
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  img{
    max-width:100%;
  }
  .all-items{
    margin-left: -15px;
    margin-right: -15px;
    display: flex;
    flex-wrap:wrap;
    .item-wrapper{
      margin-bottom: 30px;
      padding-left: 15px;
      padding-right: 15px;
      width: 33.3%;
      .item{
        cursor: pointer;
        img{
          max-width: 100%;
        }
        h3{
          text-align: center;
        }
      }
    }
  }
  .flex-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    i{
      font-size: 20px;
      margin-left: 10px;
      margin-right: 10px;
      display: block;
      cursor: pointer;
    }
  }
</style>