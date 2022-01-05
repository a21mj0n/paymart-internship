<template>
   <div class="product-wrapper"> 
        <div class="product">
            <div class="product-img">
                <img 
                    alt="image"
                    src="http://market.local/img/product08.png"
                />
            </div>
            <div class="product-body">
                <p class="product-category">
                    Category
                </p>
                <h3 class="product-title">
                    product name goes here
                </h3>
                <h4 class="product-price">
                        100$
                    <span
                        class="product-price-old"
                    >
                        150$
                    </span>
                </h4>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    $green-color:#72E019;
    $green-shadow: #64c515;
    .product {
        // width: 360px;
        display: flex;
        align-items: center;
        margin: 30px 0;
        &-img{
            width: 60px;
            height: 60px;
            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
        &-body{
            min-height: 60px;
            margin-left: 10px;
            flex: 1;
            .product-category{
                text-transform: uppercase;
                font-size: 10px;
                color: #8D99AE;
                margin: 0 0 10px;
            }
            .product-title{
                margin: 0 0 10px;
                text-transform: uppercase;
                font-size: 12px;
                transition: all 300ms ease-in;
                &:hover{
                    color: $green-color;
                    cursor: pointer;
                }
            }
            .product-price{
                color: $green-color;
                margin: 0 0 10px;
                font-size: 16px;
                &-old{
                    font-size: 14px;
                    color: #ccc;
                    font-weight: 300;
                    text-decoration: line-through;
                }
            }
        }
        
    }
  
</style>