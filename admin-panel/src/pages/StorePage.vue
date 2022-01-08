<template>
  <div class="wrapper">
    <div class="container">
      <div class="store-page">
        <div class="aside-wrapper">
          <aside-checkouts/>
          <my-slider/>
          <aside-checkouts/>
          <h3>Top selling</h3>
          <product-item v-for="i in 3" :key="i"/>
        </div>
        <div class="content-wrapper">
          <div class="components-changer">
            <div class="sorting">
              <div class="item">
                <p>Sort By:</p>
                <select name="sorting">
                  <option>Popular</option>
                  <option>Not popular</option>
                </select>
              </div>
              <div class="item">
                <p>Show:</p>
                <select name="number" v-model="number">
                  <option>20</option>
                  <option>50</option>
                </select>
              </div>
            </div>
            <div class="view-changer">
              <div class="item" @click="horizantalPosition">
                <i class="fa fa-th"></i>
              </div>
              <div class="item" @click="verticalPosition" >
                <i class="fa fa-th-list"></i>
              </div>
            </div>
          </div>
          <div class="products">
            <cart-item 
              v-for="product in products" 
              :vertical="(vertical) ? true : false "
              :key="product.id"
              :name="product.name"
              :price="product.price"
              :oldPrice="product.oldPrice"
              :image="product.image[0]"
              :categoryId="product.category_id"
              :productId="product.id"
            />
          </div>
          <div class="navigation-block">
            <div class="text-info">
              <p>SHOWING {{number}}-100 PRODUCTS</p>
            </div>
            <div class="pagination">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AsideCheckouts from "../components/home/AsideCheckouts.vue"
import MySlider from '../components/MySlider.vue'
import CartItem from '../components/home/CartItem.vue'
import ProductItem from '../components/home/ProductItem.vue'
export default {
  data(){
    return{
      number:'20',
      vertical: true,
      products:[]
    }
  },
  components:{
    AsideCheckouts,
    MySlider,
    CartItem,
    ProductItem,
  },
  methods: {
    verticalPosition(){
      this.vertical = true
    },
    horizantalPosition(){
      this.vertical = false
    }
  },
  async created(){
    const resp = await this.$axios.get(`/api/products`)
    this.products = resp.data
  }
  
}
</script>

<style lang='scss' scoped>
  @import '../assets/main-styles.scss';
  .store-page{
    display: flex;
    flex-wrap:wrap;
    padding:50px 0;
  }
  .aside-wrapper{
    width: 25%;
    padding-right: 30px;
    h3{
      margin-bottom: 30px;
      text-transform: uppercase;
    }
  }
  .content-wrapper{
    width: 75%;
    .components-changer{
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .sorting{
        display: flex;
        align-items: center;
        .item{
          margin-right: 20px;
          display: flex;
          align-items: center;
          p{
            margin-right: 5px;
          }
          select{
            height: 40px;
          }
        }
      }
      .view-changer{
        display: flex;
        align-items: center;
        .item{
          cursor: pointer;
          margin-left: 10px;
          height: 40px;
          width: 40px;
          border:1px solid gray;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          i{
            margin-bottom: -2px;
            transition: all 0.3s ease;
          }
          &:hover{
            border:1px solid transparent;
            background-color: $color-1;
            i{
              color:white;
            }
          }
        }
      }
    }
    .products{
      margin-bottom: 30px;
      display: flex;
      flex-wrap:wrap;
      .item-wrapper{
        width: 33.3%;
      }
      .vertical-wrapper{
        width: 100%;
      }
    }
    .navigation-block{
      display: flex;
      align-items: center;
      justify-content: space-between;
      .text-info{
        p{
          text-transform: uppercase;
        }
      }
    }
  }
  
</style>