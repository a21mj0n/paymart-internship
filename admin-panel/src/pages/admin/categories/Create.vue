<template>
    <div class="add">
        <form @submit.prevent="createCategory"> 
        <h2>Введите название категорию</h2>
            <div class="flex">
                <input type="text" placeholder="Название категори" v-model="value">
                <input type="text" placeholder="Название иконкы" v-model="iconVal">
            </div>
            <button type="submit">Добавить</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'createCategory',
    data(){
        return{
            value: "",
            iconVal: ""
        }
    },
    methods: {
        async createCategory(){
            const categoryData = {
                name: this.value,
                icon: this.iconVal,
                createdAt: new Date()
            }

            await axios.post('https://marketpaymart.herokuapp.com/api/dashboard/categories', categoryData)
            this.value = ''
            this.iconVal = ''
            this.$router.push({name: 'admin.categories'})
        }
    }
}
</script>
<style lang="scss" scoped>
$main-color: rgb(31, 7, 110);
    .add{
        width: 100%;
        height: calc(100vh - 100px);
        background-color: #fff;
        form{
            display: flex;
            flex-direction: column;
            h2{
                padding: 20px 0;
            }
            width: 600px;
            margin: auto;
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