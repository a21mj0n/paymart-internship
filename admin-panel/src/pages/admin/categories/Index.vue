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
        <div class="wrapper__table" :style="{marginTop: '20px'}">
          
            <vuetable 
                api-url="https://marketpaymart.herokuapp.com/api/dashboard/categories"
                ref="vuetable"
                :fields="fields"
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
import axios from 'axios';
import Vuetable  from 'vuetable-2';
import {categoryFields} from '@/utils-vuetable/FieldsDef';
import VuetablePagination from "vuetable-2/src/components/VuetablePagination";
import _ from "lodash";

export default {
    name: "categories",
    components: {
        Vuetable,
        VuetablePagination,
    },
    data(){
        return{
            data: [],
            perPage: 5,
            fields: categoryFields,
        }
    },
    async mounted(){
        // const market = await axios.get('https://marketpaymart.herokuapp.com/api/dashboard/categories')
        const market = await axios.get('https://marketpaymart.herokuapp.com/api/dashboard/categories')
        const users = await axios.get('https://vuetable.ratiw.net/api/users')
        console.log(users)
        console.log(market)
        this.data = market.data.data;
    },

    watch: {
        data() {
            this.$refs.vuetable.refresh();
        },
    },
    methods: {
        async removeCategory({id}){
            if(window.confirm("Вы точно хотите удалить ?")){
                this.categories = this.categories.filter(cat => cat.id !== id)
                await axios.delete(`https://marketpaymart.herokuapp.com/api/dashboard/categories/${id}`)
            }
        },
        // pagination methods
        onPaginationData(paginationData) {
            this.$refs.pagination.setPaginationData(paginationData);
        },

        onChangePage(page) {
            this.$refs.vuetable.changePage(page);
        },
        dataManager(sortOrder, pagination) {
            if (this.data.length < 1) return;

            let local = this.data;

            // sortOrder can be empty, so we have to check for that as well
            if (sortOrder.length > 0) {
                console.log("orderBy:", sortOrder[0].sortField, sortOrder[0].direction);
                local = _.orderBy(
                local,
                sortOrder[0].sortField,
                sortOrder[0].direction
                );
            }

            pagination = this.$refs.vuetable.makePagination(
                local.length,
                this.perPage
            );
            console.log('pagination:', pagination)
            let from = pagination.from - 1;
            let to = from + this.perPage;

            return {
                pagination: pagination,
                data: _.slice(local, from, to)
            };
        },


      // end methods ==================================================================
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
        background-color: red;
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