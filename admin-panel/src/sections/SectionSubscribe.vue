<template>
  <section class="wrapper">
      <p class="title__form">
          Sing Up for the <span>newsletter</span>
      </p>
      <form class="form">
          <div class="input__wrapper">

          <div class="input-mama">
            <input class="input__email" placeholder="Enter Your Email" type="email">
          </div>
          <button class="btn"><p><i class="fa fa-envelope"></i> Subscribe</p></button>
          </div>
      </form>
      <div class="socials">
          <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.wrapper{
    margin: 50px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .title__form{
        margin-top: 30px;
        margin-bottom: 15px;
        color: #1A1A1A;
        font-size: 32px;
        font-weight: 200;
        span{
            font-weight: 900;
            text-transform: uppercase;
        }
    }
    .form{
        display: flex;
        justify-content: center;
         width: 500px;
         .input__wrapper{
             display: flex;
             background: linear-gradient(to right, #72E019, #1A1A1A,#1A1A1A);
             width: 100%;
            padding: -5px;
             z-index: 1000;
             border-radius: 25px;
         }
        .input-mama{
            margin: 0px;
            border-radius: 20px 0 0 20px;
        }
        .input__email{
            margin: 3px 0 3px 3px;
            padding-left: 15px;
            border-radius: 20px 0 0 20px ;
            display: block;
            min-width: 360px;
            height: 40px;
            border: none;
            position: relative;

            &:focus{
                margin: 3px 0 3px 3px;
                border: 3px solid  transparent;
                outline: none;
                // outline-width: 3px ;
                // outline-color: #1A1A1A;
            
                border-radius: 20px 0 0 20px ;
            }
            
        }
        .btn{
             margin: 3px 0 3px 0px;
              border: none;

              display: block;
            position: relative;
            width: 160px;
            background: #1A1A1A;
            border-radius: 0 20px 20px 0;
            cursor: pointer;
            p{
               color: #72E019; 
               font-weight: bold;
               i{
                   color: #72E019;
                   margin-right: 10px;
               }
               
            }
            

        }
    }
    .socials{
        margin-top: 50px;
        display: flex;
        a{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            margin: 0 10px;
            transition: all 0.3s linear;
            border: 1px solid #E4E7ED;
            i{
                transition: all 0.3s linear;
                font-size: 25px;
                color: #1A1A1A;
            }
            &:hover{
                background: #1A1A1A;
                i{
                    color: #72E019 ;
                }
            }
        }

    }
}

</style>