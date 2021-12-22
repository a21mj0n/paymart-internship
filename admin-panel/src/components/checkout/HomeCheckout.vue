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
            <input @click="showDirect = !showDirect" type="radio" />
            <label for="">Direct Bank Transfer</label>
            <div v-if="showDirect" class="checkbox_products-descr">
              <label for=""
                >Lorem ipsum dolor sit, amet consectetur adipisicing
                elit.</label
              >
            </div>
          </div>
          <div class="checkout_products-check">
            <input @click="showCheque = !showCheque" type="radio" />
            <label for="">Cheque Payment</label>
            <div v-if="showCheque" class="checkbox_products-descr">
              <label for="">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.</label
              >
            </div>
          </div>
          <div class="checkout_products-check">
            <input @click="showPaypal = !showPaypal" type="radio" />
            <label>Paypal System</label>
            <div v-if="showPaypal" class="checkbox_products-descr">
              <label for="">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.</label
              >
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
      showPaypal: false,
      showDirect: false,
      showCheque: false,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped >
$main_color: #72e019;
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
  transition: 0.2s all;
  width: 100%;
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
  }
}
</style>