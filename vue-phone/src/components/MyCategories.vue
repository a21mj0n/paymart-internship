<template>
    <div>
        <ul  class="categories">
            <li class="active">Все</li>
            <li 
                v-for="(category, index) in categories"
                :key="index"
                :category="category"
                @click='$emit("setCategory", index + 1)'
            >
                {{category}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MyCategories",
        props: {
            categories: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>
    .categories{
        display: flex;
        width: 500px;
        list-style-type: none;
    }
    .categories li {
        border: 1px solid #ccc;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
    }

    .active{
        background-color:#000;
        color: #fff;
    }
</style>