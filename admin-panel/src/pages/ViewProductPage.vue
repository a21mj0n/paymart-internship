<template>
  <div class="wrapper bg">
    <div class="container">
        <div class="wrapper-product d-flex">
            <div class="wrapper-sliders">
        <VueSlickCarousel
          ref="c2"
          :asNavFor="$refs.c1"
          :slidesToShow="3"
          :focusOnSelect="true"
          :vertical="true"
        >
          <template #nextArrow="">
            <div class="custom-arrow">
              <div class="custom">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </div>
            </div>
          </template>

          <div class="item"><h3>1</h3></div>
          <div class="item"><h3>2</h3></div>
          <div class="item"><h3>3</h3></div>
          <div class="item"><h3>4</h3></div>
          <div class="item"><h3>5</h3></div>
          <template #prevArrow="">
            <div class="custom-arrow next-arrow">
              <div class="custom">
                <i class="fa fa-angle-up" aria-hidden="true"></i>
              </div>
            </div>
          </template>

          /*...*/
        </VueSlickCarousel>
        <div class="big-carousel">
          <VueSlickCarousel
            ref="c1"
            :focusOnSelect="true"
            :asNavFor="$refs.c2"
            :fade="true"
            :speed="500"
          >
          <template #nextArrow="">
            <div class=" big-custom-arrow-next">
              <div class="big-custom">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </div>
            </div>
          </template>
          <template #prevArrow="">
            <div class="big-custom-arrow-prev">
              <div class="big-custom">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
              </div>
            </div>
          </template>
            <div class="big-item"><h3>1</h3></div>
            <div class="big-item"><h3>2</h3></div>
            <div class="big-item"><h3>3</h3></div>
            <div class="big-item"><h3>4</h3></div>
            <div class="big-item"><h3>5</h3></div>
          </VueSlickCarousel>
        </div>
      </div>
      <div class="product-content">
          <div class="product-wrapper">
              <p class="product-name">PRODUCT NAME GOES HERE</p>
              <div class="review-block d-flex">
                  <div class="stars">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  </div>
                  <a href="" class="review-link">{{}} Review(s) | Add your review
                  </a>
                  </div>
              <div class="price-block d-flex">
                  <p class="price">$980.00</p>
                  <p class="old-price">$990.00</p>
              </div>
              <p class="product-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div class="selects d-flex">
                  <div class="select-wrapper d-flex">
                      <p class="select-label">
                        size
                      </p>
                <select class="size product-select" name="">
                    <option>15.7</option>
                    <option>13.3</option>
                    <option>17.0</option>
                </select>
                  </div>
                  <div class="select-wrapper d-flex">
                      <p class="select-label">
                        color
                      </p>
                <select class="color product-select" name="">
                    <option>red</option>
                    <option>blue</option>
                    <option>green</option>
                </select>

                  </div>

              </div>
              <div class="add-wrapper d-flex">
                  <div class="qty d-flex">
                      <p class="qty-label">QTY</p>
                      <h2 class="qty-count">0</h2>
                      <div class="qty-buttons">
                          <p class="qty-plus btn"><i class="fa fa-plus"></i></p>
                          <p class="qty-minus btn"><i class="fa fa-minus"></i></p>
                      </div>

                  </div>
                  <button class="add-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to Cart</button>
              </div>
              <div class="product-wish-compare">
                  <a href=""><i class="fa fa-heart-o" aria-hidden="true"></i>add to wishlist</a>
                  <a href=""><i class="fa fa-exchange"></i>add to compare</a>
              </div>
              <div class="product-category d-flex">
                  <p class="category-title">category:</p>
                  <div class="d-flex">
                    <p class="category-name">notebook</p>
                    <p class="category-name">laptop</p>
                  </div>
              </div>
              <div class="share d-flex">
                  <p class="share-title">share:</p>
                  <div class="socials d-flex">
                      <a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a>
                      <a href=""><i class="fa fa-twitter"></i></a>
                      <a href=""><i class="fa fa-google"></i></a>
                      <a href=""><i class="fa fa-envelope"></i></a>
                  </div>

              </div>
          </div>
      </div>
        </div>


    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";

export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      setting: {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    };
  },
  created(){
    
  },
  beforeDestroy: function(){
    console.log('DESTROYYYY!!!')
  }
};
</script>

<style scoped lang="scss">
.bg{
    background: #FBFBFC;
}
.d-flex{
    display: flex;
}
.wrapper-product {
    padding: 50px 0;

  margin: 0 auto;
  height: auto;
}
.slick-slider {
  width: 400px;
}

.slick-vertical {
  width: 165px;
  height: auto;
}

.custom-arrow {
  position: relative;
}
.big-carousel{
    position: relative;
    margin-left: 15px;
    &:hover{
        .big-custom-arrow-prev{
            opacity: 1;
            left: 20px;
        }
        .big-custom-arrow-next{
            opacity: 1;
            right: 20px;
        }
    }
}
.big-custom-arrow-prev{
    position: absolute;
    z-index: 1;
    transform: translateY(-50%);
    opacity: 0;
    transition: all 0.3s ease;
    top: 50%;
    left: 10px;
}
.big-custom-arrow-next{
    transform: translateY(-50%);
    position: absolute;
    opacity: 0;
    z-index: 1;
    transition: all 0.3s ease;
    top: 50%;
    right: 10px;
}
.wrapper-sliders {
  display: flex;
     align-items: center;
  height: auto;
}
.big-custom {
  z-index: 1;
  background: #fff;
  border: 1px solid #e4e7ed;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
          background: rgba(26, 26, 26, 0.8);
    border: none;
    i {
      color: #72e019;
    }
  }
  i {
    color: #1a1a1a;
    font-size: 20px;
  }
}
.custom {
  transform: translateY(-50%) translateX(160%);
  z-index: 1;
  position: absolute;
  background: #fff;
  border: 1px solid #e4e7ed;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(26, 26, 26, 0.7);
    border: none;
    i {
      color: #72e019;
    }
  }
  i {
    color: rgba(26, 26, 26,);
    font-size: 20px;
  }
}
.item {
  display: inline-block;
  width: 163px !important;
  height: 165px !important;
  border: 1px solid #e4e7ed;
}
.big-item {
  display: inline-block;
  width: 400px !important;
  height: 400px !important;
  border: 1px solid #e4e7ed;
}
.product-wrapper{
    padding: 0 15px;
    .product-name{
        font-size: 20px;
        color: #1a1a1a;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .review-block{
        .stars{
            font-size: 9px;
            i{  
                margin: 0px 2px;
                color: #72e019;
            }
            margin-right: 15px;
        }
        .review-link{
            font-size: 12px;
            color: #1a1a1a;
            text-decoration: underline;
            transition: all 0.3s ease;
            &:hover{
                color: #72e019;
                
            }
        }
    }
    .price-block{
        margin: 15px 0;
        align-items: end;
        .price{
            font-size: 24px;
            font-weight: 900;
            color: #72e019;
        }
        .old-price{
            margin-left: 6px;
            font-size: 20px;
            font-weight: 200;
            text-decoration: line-through;
            color: #e4e7ed;
        }
    }
    .selects{ 
        max-width: 450px;
        width: 100%;
    
        margin-top: 30px;
        align-items: center;
        .select-wrapper{
            align-items: center;
            margin: 0 10px;
            .select-label{
                text-transform: uppercase; 
                margin-right: 5px;
                color: #1a1a1a;
                font-weight: bold;
            }
            .product-select{
                width: 100px;
                height: 40px;
                border: 1px solid #e4e7ed;
                &:focus{
                    border: 2px solid #e4e7ed;
                    outline: none;
                }

            }
        }
    }
    .add-wrapper{
        margin-top: 30px;
        .qty{
            align-items: center;
            margin-right: 30px;
            .qty-count{
                color: #72e019;
                font-weight: bold;
                font-size: 18px;
                margin-left: 10px;
                padding: 10px 30px;
                border: 1px solid #e4e7ed;
            }
            .qty-buttons{
                .btn{
                    padding: 4px 5px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding-bottom: 1px;
                    border: 1px solid #e4e7ed;
                    cursor: pointer;
                    i{
                        color: #72e019;
                    }
                }
                .qty-minus{
                    padding-bottom: 4px;
                }

            }
        }
        .add-cart{
            text-transform: uppercase;
            color: #fff;
            padding: 5px 20px;
            align-items: center;
            border: 2px solid #1A1A1A;
            z-index: 2;
            font-size: 12px;
            font-weight: 600;
            background: #1A1A1A;
            cursor: pointer;
            border-radius: 30px;
            transition: all 0.3s ease;
            i{  
              opacity: 0;
              display: inline-block;
              margin-right: -10px;
              color: #1A1A1A;
            }
            &:hover{
              display: flex;
              padding: 5px 30px;
              color: #72e019;
              background: #fff;
              border: 2px solid #72e019;
              i{  
                opacity: 1;
                margin-bottom: 2px;
                margin-right: 20px;
                color: #72e019;
              }
            }


        }

    }
    .product-wish-compare{
        margin-top: 30px;
        a{  
            text-transform: uppercase;
            text-decoration: underline;
            color: #1A1A1A;
            cursor: pointer;
            font-size: 12px;
            margin-right: 10px;
            i{
                margin: 0 5px;
            }
            &:hover{
                color: #72e019;
                i{
                    color: #72e019;
                }
            }
        }
    }
    .product-category{
        margin-top: 10px;
        .category-title{
            color: #1A1A1A;
            text-transform: uppercase;
        }
        .category-name{
            margin: 0 10px;
            text-transform: uppercase;
            color: #1A1A1A;
            text-decoration: underline;
            &:hover{
                color:#1a1a1a;
            }
        }
    }
    .share{
        margin-top: 10px;
        .share-title{
            text-transform: uppercase;
            color: #1A1A1A;

        }
        .socials{

            a{
                color: red;
                display: block;
                margin: 0 5px;
                transition: all 0.3s ease;    
                i{
                    color: #1A1A1A;
                }
                &:hover{
                    i{
                        color: #72e019;
                    }
                }
            }
        }
    }
}
    .product-description{
        max-width: 450px;
        width: 100%;
        font-size: 9px;
        color: #1a1a1a;
    }
    

</style>
