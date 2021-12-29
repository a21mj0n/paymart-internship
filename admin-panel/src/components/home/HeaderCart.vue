<template>
  <div class="item">
    <div class="remove">
      
    </div>
    <div class="left-side">
      <img src="../../assets/login_bg.jpg" alt="">
    </div>
    <div class="right-side">
      <div class="name">
        <h3>Product name</h3>
      </div>
      <div class="prod-info">
        <p>1x</p>
        <h3>$980</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
  .item{
    img{
      max-width: 100%;
    }
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 20px;
    &:first-child{
      margin-top: 0;
    }
    .left-side{
      width: 30%;
      margin-right: 5%;
    }
    .right-side{
      width: 65%;
      .prod-info{
        display: flex;
        align-items: center;
        h3{
          margin: 0;
        }
        p{
          margin: 0;
          margin-right: 20px;
        }
      }
    }
    .remove{
      position: absolute;
    }
  }
</style>