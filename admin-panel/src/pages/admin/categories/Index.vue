<template>
    <div class="content">
        <h1>Раздел категории</h1> 
        <button 
            class="btn btn__add"
            @click="$router.push({name: 'createCategory'})"
        >
            Добавить категорию
        </button>

        <!-- table -->
        <div class="wrapper__table">
            <table class="content__table">
                <thead>
                    <tr>
                        <th>ID</th>    
                        <th>Name</th>    
                        <th>Icon</th>    
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
                            <i :class="item.icon">{{item.icon}}</i>
                        </td>
                        <td>
                            {{item.createdAt}}
                        </td>
                        <td class="icons__flex">
                            <i class="fa fa-search-plus" style="color: rgb(109, 109, 184);" @click="$router.push(`categories/view/${item.id}`)"></i>
                            <i class="fa fa-edit" style="color: green" @click="$router.push({name: 'editCategory', params:{id: item.id}})"></i>
                            <i class="fa fa-close" style="color: red"  @click="removeCategory(item.id)"></i>
                        </td>
                    </tr>
                </tbody>
            </table>  
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return{
            categories: [
                {id: 1, name: "SmartPhones", date: "123", icon: "fa fa-heart"},
                {id: 2, name: "NoteBook", date: "123", icon: "fa fa-search"},
                {id: 3, name: "Books", date: "123", icon: "fa fa-book"}
            ]
        }
    },
    methods: {
    async removeCategory(id){
            if(window.confirm("Вы точно хотите удалить ?")){
                this.categories = this.categories.filter(cat => cat.id !== id)
                await axios.delete(`https://61ade31fd228a9001703b022.mockapi.io/api/categories/${id}`)
            }
        }
    },
    async created(){
        const {data} = await axios.get('https://61ade31fd228a9001703b022.mockapi.io/api/categories')
        this.categories = data
    }
}
</script>
<style lang="scss">
// $back-color: rgb(31, 7, 110);
$main-color: rgb(31, 7, 110);
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
            text-align: left;
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
            text-align: left;
        }
    }
    .icons__flex{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 22px;
        i{
            cursor: pointer;
            margin-right: 5px;
            &:hover{
                opacity: .7;
            }
        }
        i:nth-child(2){
            padding-top: 5px;
        }

    }
    .btn{
        margin-top: 20px;
        padding: 10px 20px;
        background-color: transparent;
        border: 1px solid $main-color;
        color: $main-color;
        cursor: pointer;
        font-weight: bold;
        transition: all 300ms linear;
        &:hover{
            background-color: $main-color;
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