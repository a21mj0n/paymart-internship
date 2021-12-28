<template>
  <div class="checkout-component">
    <h3>Categories</h3>
    <div class="item">
      <label>
        <input type="checkbox" class="hidden">
        <div class="box">
          <i class="fa fa-check"></i>
        </div>
      </label>
      <p>Laptops</p>
      <span>(120)</span>
    </div>
    <div class="item">
      <label>
        <input type="checkbox" class="hidden">
        <div class="box">
          <i class="fa fa-check"></i>
        </div>
      </label>
      <p>Laptops</p>
      <span>(120)</span>
    </div>
    <div class="item">
      <label>
        <input type="checkbox" class="hidden">
        <div class="box">
          <i class="fa fa-check"></i>
        </div>
      </label>
      <p>Laptops</p>
      <span>(120)</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
  @import '../../assets/main-styles.scss';
  .checkout-component{
    margin-bottom: 30px;
    h3{
      text-transform: uppercase;
      font-weight: bold;
      margin-bottom: 30px;
    }
    .item{
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      input:checked ~ .box{
        background-color: $color-1;
        border:1px solid $color-1;
        i{
          opacity: 1;
        }
      }
      .box{
        margin-right: 10px;
        height: 20px;
        width: 20px;
        border:1px solid #E4E7ED;
        display: flex;
        align-items: center;
        justify-content: center;
        transition:all 0.3s ease;
        i{
          color:white;
          transition: all 0.3s ease;
          opacity: 0;
        }
      }
    }
  }
</style>