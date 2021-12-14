<template>
  <div class="content">
    <vuetable
    :data="brands"
    :fields="fields"
    :api-mode='false'
    >
      <template slot='image' slot-scope="props">
        <div class="">
          <img :src="props.rowData.image">
        </div>
      </template>
    </vuetable>
  </div>
</template>

<script>
import axios from 'axios'
import Vuetable from 'vuetable-2'
import { brandFields } from '../../../utils-vuetable/brands-vuetable/field'
export default {
  components:{
    Vuetable
  },
  data(){
    return{
      brands:[],
      fields:brandFields,
    }
  },
  async created(){
    const {data} = await axios.get('https://61ade31fd228a9001703b022.mockapi.io/api/brands')
    this.brands = data
  }
}
</script>

<style lang='scss' scoped>
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
</style>