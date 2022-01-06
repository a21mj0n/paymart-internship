<template>
    <div class="cart-item">
        <div>
            Название товара: Название
        </div>
        <div>
            Количество товара: 
            <strong>
                10
            </strong>
        </div>
        <button class="cart-remove">
            Удалить
        </button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .cart{
        &-item{
            padding: 20px;
            border: 1px solid #ccc;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 10px 0 ;
        }
        &-remove{
            border-radius: 5px;
            padding: 10px 15px;
            border: 1px solid red;
            background-color: red;
            color: #fff;
            cursor: pointer;
            &:hover{
                transition: all 300ms linear;
                box-shadow: 0 0 3px red;
            }
        }
    }
</style>