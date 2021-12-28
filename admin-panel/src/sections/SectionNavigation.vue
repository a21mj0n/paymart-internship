<template>
  <div class="navigation__wrapper">
      <div class="container">
        <div class="row">
                    <div class=" nav__wrapper about">
            <h1>about</h1>
            <ul>
                <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p></li>
                <li><a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i>1734 Stonecoal Road</a></li>
                <li><a href="#"><i class="fa fa-phone" aria-hidden="true"></i>+021-95-51-84</a></li>
                <li><a href="#"><i class="fa fa-envelope-o" aria-hidden="true"></i>email@email.com</a></li> 
            </ul>
        </div>
        <div class=" nav__wrapper categories">
            <h1>categories</h1>
            <ul>
                <li><a href="">hot ideals</a></li>
                <li><a href="">laptop</a></li>
                <li><a href="">smartphones</a></li>
                <li><a href="">cameras</a></li>
                <li><a href="">Accessories</a></li>
            </ul>
        </div>
        <div class=" nav__wrapper information">
            <h1>information</h1>
            <ul>
                <li><a href="">about us</a></li>
                <li><a href="">contact us</a></li>
                <li><a href="">privacy policy</a></li>
                <li><a href="">Orders and Returns</a></li>
                <li><a href="">Terms & Conditions</a></li>
            </ul>
        </div>
        <div class=" nav__wrapper service">
            <h1>service</h1>
            <ul>
                <li><a href="">My Account</a></li>
                <li><a href="">View Cart</a></li>
                <li><a href="">Wishlist</a></li>
                <li><a href="">Track My Order</a></li>
                <li><a href="">Help</a></li>
            </ul>
        </div>

        </div>
      </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.navigation__wrapper{
    border-top: 3px solid #72E019;
    padding-top: 45px;
    width: 100%;
    display: flex;
    background-color: #1A1A1A;
    li{
        list-style: none;
        i{
            color: #72E019;
            margin-left: 5px;
        }
        
    }
    p{
        color: #B9BABC;
        margin-bottom: 15px;
    }
    a{
        display: inline-block;
        text-transform: capitalize;
        color: #B9BABC;
        margin-bottom: 15px;
        font-size: 16px;
        transition: all 0.3s linear;
        &:hover{
            color: #72E019;
        }
    }
    h1{
        text-transform: uppercase;
        font-weight: 900;
        color: #fff;
        margin-bottom: 30px;
    }
    .nav__wrapper{
        margin: 0 30px 20px 0 ;
        width: 25%;
        display: flex;
        flex-direction: column;
    }
        .about{
           i{
               padding-right: 10px;
           }
           .fa-map-marker{
               padding-right: 16px;
           }
        }
}

</style>