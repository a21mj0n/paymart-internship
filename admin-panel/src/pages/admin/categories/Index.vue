<template>
    <div class="content">
        <h1>Раздел категории</h1> 
        <button 
            class="btn btn__add"
            @click="$router.push({name: 'admin.categories.create'})"
        >
            Добавить категорию
        </button>

        <!-- table -->
        <div class="wrapper__table">
                <!-- api-url="https://jsonplaceholder.typicode.com/users" -->
            <vuetable 
                api-url="https://vuetable.ratiw.net/api/users"                
                ref="vuetable"
                :fields="fields"
                :css="css.table"
                :first-page="0"
                :per-page="5"
                pagination-path=""
                @vuetable:pagination-data="onPaginationData"
            >
                <template slot="actions" slot-scope="props">
                   <div class="icons__flex">
                        <i 
                            class="fa fa-search-plus" 
                            style="color: rgb(109, 109, 184);" 
                            @click="$router.push({name: 'admin.categories.view', params: {id: props.rowData.id}})"
                        >
                        </i>
                        <i 
                            tag="i" 
                            class="fa fa-edit" 
                            style="color: green" 
                            @click="$router.push({name: 'admin.categories.edit', params: {id: props.rowData.id}})"
                        >
                        </i>
                        <i 
                            class="fa fa-close" 
                            style="color: red"  
                            @click="removeCategory(props.rowData)"
                        >
                        </i>
                   </div>
                </template>
            </vuetable>

            <!-- pagination -->

            <vuetable-pagination 
                ref="pagination"
                @vuetable-pagination:change-page="onChangePage"
            >
            </vuetable-pagination>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Vuetable  from 'vuetable-2'
import {categoryFields} from '@/utils-vuetable/FieldsDef'
import cssTable  from '../../../utils-vuetable/CssTable'
import VuetablePagination from "vuetable-2/src/components/VuetablePagination";
export default {
    components: {
        Vuetable,
        VuetablePagination,
    },
    data(){
        return{
            categories: [
                {id: 1, name: "from local state", date: "123", icon: "fa fa-heart"},
                {id: 2, name: "from local state", date: "123", icon: "fa fa-search"},
                {id: 3, name: "from local state", date: "123", icon: "fa fa-book"}
            ],
            fields: categoryFields,
            css: cssTable,
            // pagination resourses
            paginationComponent: "vuetable-pagination",
        }
    },
    methods: {
        async removeCategory({id}){
            if(window.confirm("Вы точно хотите удалить ?")){
                this.categories = this.categories.filter(cat => cat.id !== id)
                await axios.delete(`https://marketpaymart.herokuapp.com/api/dashboard/categories/${id}`)
            }
        },
        // pagination methods
        onChangePage(page) {
            this.$refs.vuetable.changePage(page);
        },
        onPaginationData (paginationData) {
            this.$refs.pagination.setPaginationData(paginationData)
        },
    },
    
    async created(){
        // const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
        // const resp = await axios.get('https://vuetable.ratiw.net/api/users')
        // console.log(resp);
        // console.log(api);
        // this.categories = resp.data.reverse()
    },


}
</script>

<style lang="scss">
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
        margin-bottom: 10px;
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