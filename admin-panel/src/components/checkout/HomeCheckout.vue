<template>
  <section class="checkout">
    <div class="checkout_wrapper">
      <div class="checkout_form">
        <h2 class="checkout_title">Billing address</h2>
        <form action="#">
          <input class="checkout_input" placeholder="First Name" type="text" />
          <input class="checkout_input" placeholder="last-name" type="text" />
          <input class="checkout_input" placeholder="Email" type="text" />
          <input class="checkout_input" placeholder="Address" type="text" />
          <input class="checkout_input" placeholder="City" type="text" />
          <input class="checkout_input" placeholder="Country" type="text" />
          <input class="checkout_input" placeholder="ZipCode" type="number" />
          <input class="checkout_input" placeholder="Telephone" type="tel" />
          <textarea placeholder="Order Notes" cols="3" rows="3"></textarea>
        </form>
      </div>
      <div class="checkout_order">
        <h2 class="checkout_title">Your Order</h2>
        <div class="checkout_products">
          <div class="checkout_products-item">
            <span><strong>PRODUCT</strong> </span>
            <span><strong>TOTAL</strong></span>
          </div>
          <div class="checkout_products-item">
            <span>1x Product Name Goes Here </span> <span>$980.00 </span>
          </div>

          <div class="checkout_products-item">
            <span>2x Product Name Goes Here </span> <span>$980.00</span>
          </div>
          <div class="checkout_products-item">
            <span>Shiping </span> <span><strong>FREE</strong> </span>
          </div>
          <div class="checkout_products-item">
            <span><strong>TOTAL</strong> </span>
            <span class="price">$2940.00</span>
          </div>
        </div>
        <div class="checkout_products-checks">
          <div class="checkout_products-check">
            <input
              @click="
                ShowOne = !ShowOne;
                ShowSecond = false;
                ShowThird = false;
              "
              type="radio"
              value="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut "
              id="one"
            />
            <label for="one">Direct Bank Transfer</label>
            <div v-if="ShowOne" class="checkbox_products-descr">
              Lorem ipsum dolor sit 11, amet consectetur adipisicing elit.
            </div>
          </div>

          <div class="checkout_products-check">
            <input
              id="two"
              value="Lorem ipsum dolor sit amet, consectetur adipisicing elit "
              type="radio"
              @click="
                ShowSecond = !ShowSecond;
                ShowOne = false;
                ShowThird = false;
              "
            />
            <label for="two">Cheque Payment</label>
            <div v-if="ShowSecond" class="checkbox_products-descr">
              Lorem ipsum dolor sit 22, amet consectetur adipisicing elit.
            </div>
          </div>
          <div class="checkout_products-check">
            <input
              @click="
                ShowThird = !ShowThird;
                ShowOne = false;
                ShowSecond = false;
              "
              id="three"
              type="radio"
              value="Lorem ipsum dolor sit amet, consectetur "
            />
            <label for="three">Paypal System</label>
            <div v-if="ShowThird" class="checkbox_products-descr">
              ipsum dolor sit 33, amet consectetur adipisicing elit.
            </div>
          </div>
          <div class="checkout_products-check checkout_products-check_mt20">
            <input type="checkbox" />
            <label>I've read and accept the terms & conditions</label>
          </div>
        </div>
        <button class="btn" type="submit">Place order</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ShowSecond: false,
      ShowOne: false,
      ShowThird: false,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped >
$main_color: #72e019;
input:checked {
  color: red;
}
input[type="radio"] {
  position: relative;
  height: 12px;
  width: 12px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border-radius: 50%;
  border: 1px solid #ccc;
  &:checked {
    background-color: red !important;
  }
   
  //   background-color: red;
}
.btn {
  margin-top: 30px;
  padding: 12px 30px;
  background-color: $main_color;
  border: none;
  border-radius: 40px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  -webkit-transition: 0.2s all;
  transition: 0.5s all;
  width: 100%;
  &:hover {
    border: 1px solid $main_color;
    color: $main_color;
    background-color: #fff;
    cursor: pointer;
  }
}
.price {
  font-size: 24px;
  color: $main_color;
}
.checkout {
  &_wrapper {
    display: flex;
    justify-content: space-between;
  }
  &_form {
    width: 60%;
    form {
      display: flex;
      flex-direction: column;
      textarea {
        padding: 10px;
        resize: none;
      }
    }
  }
  &_input {
    margin-bottom: 15px;
    height: 40px;
    padding: 0px 15px;
    border: 1px solid #e4e7ed;
    background-color: #fff;
    width: 100%;
  }

  &_order {
    position: relative;
    padding: 0px 30px 30px;
    border-right: 1px solid #e4e7ed;
    border-left: 1px solid #e4e7ed;
    border-bottom: 1px solid #e4e7ed;
    width: 38%;
  }
  &_products {
    &-item {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
    }

    &-check {
      margin-top: 7px;
      font-weight: 500;
      min-height: 20px;

      margin-bottom: 5px;
      cursor: pointer;
      label {
        padding-left: 10px;
      }
      &_mt20 {
        margin-top: 30px;
      }
    }
    &-descr {
      padding-left: 40px;
      text-align: left;
    }
  }
}
</style>