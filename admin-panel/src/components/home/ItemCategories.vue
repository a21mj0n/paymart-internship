<template lang="">
    <div class="row">
        <h2>
            New Products
        </h2>
        <ul class="categories">
            <li>
                Laptops
            </li>
            <li>
                SmartPhones
            </li>
            <li>
                Cameras
            </li>
            <li>
                Accessories
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    $green-color:#72E019;
    .row{
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
    }

    .categories{
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
        li{
            margin: 0 10px;
            cursor: pointer;
            transition: all 300ms linear;
            &:hover{
                color: $green-color;
            }
            li.active{
                color: $green-color;
                border-bottom: 1px solid $green-color;
            }
        }
    }
</style>