<template>
    <div class="add">
        <form @submit.prevent="editCategory">
            <h2>Изменить категорию Смартфоны</h2>
            <input type="text" placeholder="Название категории"  v-model="categoryData.name">
            <input type="text" placeholder="Название иконкы" v-model="categoryData.icon" >
            <button>Изменить</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: "editCategory",
    data(){
        return{
            categoryData: {}
        }
    },
    methods: {
        async editCategory(){
            await axios.put(`https://61ade31fd228a9001703b022.mockapi.io/api/categories/${this.$route.params.id}`, this.categoryData)
            this.$router.push('/admin/categories')
        }
    },
    async created(){
        console.log(this.$router);
        const {data} = await axios.get(`https://61ade31fd228a9001703b022.mockapi.io/api/categories/${this.$route.params.id}`)
        this.categoryData = data
    }
}
</script>
<style lang="scss" scoped>
    $main-color: rgb(122, 123, 184);
    .add{
        width: 100%;
        height: calc(100vh - 100px);
        background-color: #fff;
        form{
            display: flex;
            flex-direction: column;
            width: 500px;
            margin: auto;
            h2{
                padding: 20px 0;
            }
            input{
            width: 100%;
            height: 50px;
            padding: 10px;
            outline: none;
            transition: all 200ms ease-in;
            margin-top: 10px;
            border: none;
            border-bottom: 1px solid #ccc;
                &:focus{
                    border-bottom: 1px solid rgb(0, 167, 56);
                }
            }
            button{
                align-self: flex-end;
                transition: all 300ms linear;
                width: 30%;
                padding: 10px;
                border: 1px solid $main-color;
                background-color: transparent;
                color: rgb$main-color;
                margin: 10px 0;
                font-weight: bold;
                cursor: pointer;
                color: $main-color;
                &:hover{
                    background-color: $main-color;
                    color: #fff;
                }
            }
        }
    }
</style>