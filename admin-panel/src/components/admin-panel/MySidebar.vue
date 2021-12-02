<template>
  <div class="side__bar-wrapper">
    <div class="side__bar">
      <p class="logo"><span class="side__bar-visible">CT</span>Market</p>
      <hr class="logo__hr" />
      <div class="user__block">
        <a href="#" class="user">
          <div class="user-wrapper">
            <p class="user__img side__bar-visible">img</p>
            <p class="user__name">Tania Andrew</p>
          </div>
          <i class="fa fa-caret-down" aria-hidden="true"></i>
        </a>
            <div class="user__config">
                <a href=""><span class="side__bar-visible">MP</span>My Profile</a>
                <a href=""><span class="side__bar-visible">EP</span>Edit Profile</a>
                <a href=""><span class="side__bar-visible">S</span>Settings</a>
            </div>
      </div>
      <hr class="logo__hr" />
    </div>
    <nav>
        <ul class="navigation">
            <li><span class="side__bar-visible"><i class="fa fa-users" aria-hidden="true"></i></span>Пользователи</li>
            <li><span class="side__bar-visible"><i class="fa fa-th" aria-hidden="true"></i></span>Категории</li>
            <li><span class="side__bar-visible"><i class="fa fa-square" aria-hidden="true"></i></span>Продукты</li>
            <li><span class="side__bar-visible"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>Заказы</li>
        </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.side__bar-visible{
    display: block;
    width: 50px;
    text-align: center;
    margin-right: 10px;
}
.side__bar-wrapper {
  width: 260px;
  height: 100vh;
  background: #000;
}
.side__bar {
  padding: 8px 15px;
  color: #fff;
  .logo {
      display: flex;
    padding-top: 15px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 24px;

  }
}
.logo__hr {
  margin-top: 15px;
  color: #e3e3e3;
  height: 0.5px;
}
.user__block {
  .user {
    padding-top: 30px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    .user-wrapper{
        display: flex;
        align-items: center;
        .user__img {
      display: flex;
      justify-content: center;
      align-items: center;
      background: red;
      height: 50px;

      border-radius: 50%;
      margin-right: 10px;
    }
    .user__name {
      font-size: 14px;
    }
    }
    
    i {
      
      font-size: 16px;
      color: white;
    }
  }
  .user__config{
      a{
          padding: 15px 0;
          display: flex;
          text-decoration: none;
          color: #fff;
      }
  }
}
nav{
    .navigation{
        margin: 15px 8px 0 8px;
        li{
            display: flex;
            color: #fff;
            list-style: none;
            font-weight: bold;
            font-size: 16px;
            padding: 15px 0;
            transition: all 0.3s ease;
            i{
                color: #fff;
            }
            &:hover{
                background: red;
                border-radius: 10px;
            }
            
        }
    }
}
</style>
