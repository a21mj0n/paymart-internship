<template>
    <div class="item-wrapper"> 
        <div class="item">
            <div class="item-img">
                <div class="item-status">
                    <span>-30%</span>
                    <span>NEW</span>
                </div>
                <img 
                    alt="image"
                    src="http://market.local/img/product08.png"
                />
            </div>
            <div class="item-body">
                <p class="item-category">
                    Category
                </p>
                <h3 class="item-title">
                    name
                </h3>
                <h4 class="item-price">
                    100$
                    <span
                        class="item-price-old"
                    >
                        150$
                    </span>
                </h4>
                <div class="item-rating">
                    *****
                </div>
                <div class="item-buttons">
                    <button>
                        <i class="fa fa-heart"></i>
                        <span class="tooltipp">add to wishlist</span>
                    </button>
                    <button>
                        <i class="fa fa-exchange"></i>
                        <span class="tooltipp">add to compare</span>
                    </button>
                    <button>
                        <i class="fa fa-eye"></i>
                        <span class="tooltipp">Quick View</span>
                    </button>
                </div>
            </div>
            <div class="item-add">
                <button @click="console.log('clicked')">
                    <i class="fa fa-shopping-cart"></i>
                    ADD
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    // variables
    $green-color:#72E019;
    $green-shadow: #64c515;

    .item-wrapper{
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
        padding-bottom: 50px; 
        &:hover{
            .item{ 
                transition: all 300ms ease;
                border-color: $green-color;
            }
            .item-add{
                transform:translateY(100%);
                z-index: 0;
            }
        }
        

    }
    .item{
        position: relative;
        border: 1px solid #ccc;
        box-sizing: border-box;
        background-color: white;
        border-radius: 3px;
          &-add{
            transition: all 0.3s ease;
            position: absolute;
            bottom: 0px;
            width: 100%;
            background-color: #010101;
            text-align: center;
            padding: 10px;
            z-index: -99;
            transform:none;
            border-radius: 0 0 10px 10px;
            button{
                background-color: #fff;
                padding: 8px 0 5px 20px;
                color: $green-color;
                border: 1px solid $green-color;
                cursor: pointer;
                transition: all 300ms linear;
                border-radius: 3px;
                position: relative;
                width: 100px;
                position: relative;
                &:hover{
                    background-color: $green-color;
                    color: #fff;
                    width: 120px;
                    text-align: center;
                    i{
                        color: #fff;
                        visibility: visible;
                    }
                }
                i{
                    position: absolute;
                    left: 20px;
                    color: $green-color;
                    // visibility: hidden;
                }
            }
        }
        
        &-body{
            padding: 15px;
            text-align: center;
            font-size: 16px;
        }
        &-img{
            height: 263px;
            img{
                max-width: 100%;
                height: 100%;
                display: block;
                margin: auto;
                object-fit: contain;
            }
        }
        &-status{
            display: flex;
            position: absolute;
            top: 15px;
            right: 15px;
            span {
                margin: 0 5px;
                border: 1px solid $green-color;
                padding: 5px;
                color: $green-color;
                padding: 2px 10px;
                font-size: 12px;
                background-color: #fff;
                cursor: pointer;
                transition: all 300ms linear;
                border-radius: 5px 0 5px 0;
                &:hover{
                    background-color: $green-color;
                    color: #fff;
                    box-shadow: 0 0 3px $green-shadow;
                }
            }
        }
        &-category{
            text-transform: uppercase;
            font-weight: 300;
            font-size: 12px;
            margin: 0 0 10px;
            color: rgb(151, 151, 151);
        }
        &-title{
            font-weight: 700;
            text-transform: uppercase;
            text-align: center;
            margin: 0;
            margin: 0 0 10px;
            &:hover{
                color: $green-color;
                cursor: pointer;
                transition: all 300ms ease-in;
            }
        }
        &-price{
            color: $green-color;
            font-size: 18px;
            margin: 0 0 10px;
            &-old{
                font-size: 14px;
                color: #ccc;
                font-weight: 300;
                text-decoration: line-through;
            }
        }
        &-rating{
            margin: 10px 0;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                top: 5px;
                z-index: -1;
                width: 100%;
                height: 2px;
                background-color: #ccc;
            }
        }
        &-buttons{
            display: flex;
            justify-content: center;
            button{
                position: relative;
                width: 40px;
                height: 40px;
                background: transparent;
                border: none;
                transition: 0.2s all;
                position: relative;
                span{
                    position: absolute;
                    bottom: 100%;
                    left: 50%;
                    width: 150px;
                    padding: 2px;
                    font-size: 12px;
                    background: #1e1f29e3;
                    color: $green-color;
                    text-transform: uppercase;
                    opacity: 0;
                    visibility: hidden;
                    transition: 0.2s all;
                    border-radius: 10px;
                    padding: 5px;
                    transform: translate(-50%, -15px);
                    transition: all 300ms ease-in-out;
                }
                &:hover{
                    background: rgb(226, 226, 226);
                    border-radius: 50px;
                    cursor: pointer;
                    i{
                        color: $green-color;
                    }
                    & > span {
                        transform: translate(0, 0);
                        opacity: 1;
                        visibility: visible;
                        transform: translate(-50%, -5px);
                    }
                }

            }
        }
    }
</style>