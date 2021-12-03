<template>
    <div class="content">
        <h1>Раздел категории</h1> 
        <button 
            class="btn btn__add"
            @click="toggleForm"
        >
            Добавить категорию
        </button>
        <div class="overlay" v-if="isVisible">
            <div class="form">
                <button class="form__close" @click="toggleForm">
                    <i class="fa fa-close">&times;</i>
                </button>
                <h3>Добавить Категорию</h3>
                <form>
                    <input 
                        type="text"
                        placeholder="Введите название категории"
                    />
                    <button class="btn btn__submit">Добавить</button>
                </form>
            </div>
        </div>

        <!-- table -->
        <div class="wrapper__table">
            <table class="content__table">
                <thead>
                    <tr>
                        <th>ID</th>    
                        <th>Name</th>    
                        <th>Date</th>    
                        <th>Actions</th>    
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in categories" :key="item.id">
                        <td>
                            {{item.id}}
                        </td>
                        <td>
                            {{item.name}}
                        </td>
                        <td>
                            {{item.date}}
                        </td>
                        <td class="icons__flex">
                            <i class="fa fa-edit"></i>
                            <i class="fa fa-close"></i>
                        </td>
                    </tr>
                </tbody>
            </table>  
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isVisible: false,
            categories: [
                {id: 1, name: "smth", date: "123"},
                {id: 2, name: "smasdasdadasdasdadsadasdasdasdasdas asd asd sad as dasd ath", date: "123"},
                {id: 3, name: "smth", date: "123"}
            ]
        }
    },
    methods: {
        toggleForm(){
            this.isVisible = !this.isVisible
        }
    }
}
</script>
<style scoped lang="scss">
    .content{
        width: 100%;
        margin: 0 auto;
        padding: 20px;
        display: flex;
        flex-direction: column;
        background-color: rgb(238, 238, 238);
        min-height: calc(100vh - 100px);
    }

    .wrapper__table{
        width: 100%;
    }
    .content__table{
        width: 100%;
        min-width: 720px;
        margin: 50px 0;
        border-collapse: collapse;
    }
    table thead{
        padding: 20px;
        background: rgb(235, 235, 235);
    }
    table th {
        padding: 20px;
        text-align: left;
        &:last-child{
            text-align: right;
        }

    }
    table tbody{
        margin-top: 10px;
        & tr{
            box-shadow: 0 0 2px rgb(195, 195, 195);
        }
    }
    table tbody td{
        padding: 20px;
        text-align: left;
        background-color: #fff;
        &:last-child{
            text-align: right;
        }

    }
    .icons__flex{
        // display: flex;
        // align-items: center;
        // justify-content: center;
        font-size: 24px;
        i{
            cursor: pointer;
        }
        i:first-child{
            color: rgb(0, 92, 28);
            &:hover{
                opacity: .5;
            }
            margin-right: 20px;
        }
        i:last-child{
            color: red;
            &:hover{
                opacity: .5;
            }
        }
    }
    .btn{
        margin-top: 20px;
        padding: 10px 20px;
        background-color: transparent;
        border: 1px solid green;
        color: green;
        cursor: pointer;
        font-weight: bold;
        &:hover{
            background-color: green;
            color: #fff;
        }
    }
    .btn__add{
        align-self: flex-start;
    }
    .btn__submit{
        margin-top: 10px;
    }
    // popup
    .overlay{
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.548);
        left: 0;
        right: 0;
        bottom: 0;
        .form{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 400px;
            justify-content: center;
            padding: 30px;
            border-radius: 5px;
            background-color: #fff;
            h3{
                text-align: center;
                margin-bottom: 5px;
            }
            form{
                display: flex;
                flex-direction: column;
                transition: all 300ms linear;
                input{
                    padding: 10px;
                    outline: none;
                    &:focus{
                        border: 1px solid rgb(105, 175, 0);
                    }
                }
            }
            &__close{
                position: absolute;
                right: -10px;
                top: -30px;
                border: none;
                background-color: transparent;
                font-size: 24px;
                cursor: pointer;
                opacity: .7;
                i{
                    color: red;
                }
                &:hover{
                    opacity: 1;
                }
            }
        }
    }
    // adaptive
    @media (max-width: 991px) {
        .wrapper__table{
            overflow-x: scroll;
        }
        .btn{
            margin: 0 auto;
        }
    }
</style>