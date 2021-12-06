<template>
    <div class="add">
        <form @submit="editCategory">
            <h2>Изменить категорию {{ name }}</h2>
            <div class="flex">
                <input type="text" placeholder="Название категори" v-model="oldValue">
                <input type="text" placeholder="Название иконки" v-model="oldIcon">
            </div>
            <button>Изменить</button>
        </form>
    </div>
</template>
<script>
export default {
    name: "edit",
    date(){
        return{
            oldValue: "",
            oldIcon: ""
        }
    },
    methods: {
        editCategory(){
            // console.log(this.oldValue);
            // console.log(this.oldIcon);
        }
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
                justify-content: center;
                font-weight: bold;
                cursor: pointer;
                margin: 10px auto;
                color: $main-color;
                &:hover{
                    background-color: $main-color;
                    color: #fff;
                }
            }
        }
    }
</style>