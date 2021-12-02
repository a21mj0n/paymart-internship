<template>
  <div class="wrapper">
    <div class="login">
      <div class="login_block">
        <form id="" action="#" class="feed-form" v-if="isLogin">
          <div class="form_inputs">
            <input name="name" required placeholder="Username" type="text" />
            <i class="fa fa-user" aria-hidden="true"></i>
          </div>
          <div class="form_inputs">
            <input
              name="password"
              required
              placeholder="password"
              type="password"
            />
            <i class="fa fa-lock" aria-hidden="true"></i>
          </div>
            <div class="form__block">
            <button class="form__block_btn">Login</button>
            <a href="#" class="form__block_link"
                ><p class="form_block_text">Forgot password?</p></a
            >
            </div>
        </form>
      </div>
    </div>

    <div class="register">
        
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data(){
      return{
          isLogin: true
      }
  },
  created(){
    console.log(this.$route);
  }
};
</script>

<style scoped lang="scss">
.wrapper{
    height: 100vh;
}
.login {
  text-align: center;
  min-height: 100vh;
  padding: 350px 0 150px 0;
  background-image: url("../assets/login_bg.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 720px;
  &_block {
    margin: 0 auto;
    width: 300px;
    min-height: 238px;
  }
  form {
    .form_inputs {
      position: relative;
      input {
        background-color: #c02147;
        height: 45px;
        width: 300px;
        border: 2px solid #ffffff;
        border-radius: 4px;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        text-align: center;
        text-transform: uppercase;
        color: #ffffff;
        margin-bottom: 20px;
      }
      i {
        position: absolute;
        left: 25px;
        top: 15px;
        &::before {
          color: #ffffff;
        }
      }
    }
  }
  .form__block {
    margin-top: 23px;

    &_btn {
      margin-bottom: 20px;
      width: 300px;
      height: 45px;
      background: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
      border-radius: 4px;
      font-weight: 600;
      font-size: 16px;
      text-align: center;
      text-transform: uppercase;
      color: #ff1141;
      transition: all 0.4s;
      &:hover {
        background-color: #c02147;
        border: none;
        border: 1px solid #ffffff;
        color: #ffffff;
        transform: scale(1.1);
      }
    }
    &_link {
      text-align: center;
      font-weight: 500;
      font-size: 16px;
      color: #ffffff;
      &:hover {
        text-decoration: none;
      }
    }
  }
}

@media (max-width: 576px) {
  .login {
    &_block {
      margin: 0 auto;
      width: 280px;
      min-height: 238px;
    }
    form {
      .form_inputs {
        i {
          left: 35px;
          top: 15px;
        }
        input {
          width: 250px;
        }
      }
    }
    .form__block {
      &_btn {
        width: 250px;
      }
      &_link {
        text-align: center;
      }
      &_text {
        padding-left: 10px;
      }
    }
  }
}

@media (max-width: 320px) {
  .login {
    padding-left: 1px;
	&_block {
		width: 190px;
	}
    form {
      .form_inputs {
        i {
          left: 15px;
          top: 15px;
        }
        input {
          width: 180px;
          font-size: 11px;
        }
      }
    }
    .form__block {
      &_btn {
        width: 180px;
        font-size: 11px;
      }
    }
  }
}
</style>


