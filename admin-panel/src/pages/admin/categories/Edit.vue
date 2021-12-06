<template>
    <div class="add">
        <form>
            <h2>Изменить категорию {{ name }}</h2>
            <input type="text" placeholder="Название категори">
            <button>Изменить</button>
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
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
            display: flex;
            flex-direction: column;
            input{
                width: 100%;
                height: 50px;
                padding: 10px;
                outline: none;
                transition: all 300ms linear;
                &:focus{
                    border: 1px solid rgb(0, 167, 56);
                }
            }
            button{
                transition: all 300ms linear;
                width: 50%;
                padding: 10px;
                border: 1px solid rgb(0, 167, 56);
                background-color: transparent;
                color: rgb(0, 167, 56);
                margin: 10px 0;
                align-self: flex-end;
                font-weight: bold;
                cursor: pointer;
                &:hover{
                    background-color: rgb(0, 167, 56);
                    color: #fff;
                }
            }
        }
    }
</style>