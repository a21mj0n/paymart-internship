<template>
    <div class="content">
        <h1>Раздел категории</h1> 
        <button 
            class="btn btn__add"
            @click="$router.push({name: 'admin.categories.create'})"
        >
            {{$t('message.name')}}
        </button>
        <lang-changer></lang-changer>
        <!-- table -->
        <div class="wrapper__table" :style="{marginTop: '20px'}">
          
            <vuetable 
                :data="categories"
                :api-mode="false"
                :fields="fields"
                :per-page="5"
                ref="vuetable"
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
            <div class="pagination">
                <button 
                    v-for="pageNumber in this.totalPages" 
                    :key="pageNumber"  
                    @click="changePage(pageNumber)"
                >
                    <!-- :class="(pageNumber === this.page) ? 'btn' : ''" -->
                    {{pageNumber}}
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import Vuetable  from 'vuetable-2';
import FieldsDef from './FieldsDef';
import LangChanger from '../../../components/LangChanger.vue';
export default {
    name: "categories",
    components: {
        Vuetable,
        LangChanger
    },
    data(){
        return{
            fields: FieldsDef(this.$i18n),
            categories: "",
            perPage: 5,
            page: 1,
            totalPages: ""
        }
    },
    async mounted(){
        await this.fetchData()
    },
    watch: {
        page(oldValue, newValue) {
            console.log('newValue',newValue);
            this.fetchData()
        },
    },
    methods: {
        async removeCategory({id}){
            if(window.confirm("Вы точно хотите удалить ?")){
                await axios.delete(`https://marketpaymart.herokuapp.com/api/dashboard/categories/${id}`)
                this.categories = this.categories.filter(cat => cat.id !== id)
            }
        }, 
        changePage(pageNumber){
            this.page = pageNumber
        },
        async fetchData(){
            const resp = await axios.get('https://marketpaymart.herokuapp.com/api/dashboard/categories',{
            params: {
                page: this.page
            }})
            this.totalPages = Math.ceil(resp.data.meta.total / this.perPage)
            this.categories = resp.data.data;
        }
      // end methods ==================================================================
    },
}
</script>

<style lang="scss">
$main-color: rgb(31, 7, 110);
    .wrapper__table{
        width: 100%;
    }
    .vuetable-body-wrapper{
        min-height: 300px;
    }
    .content__table{
        width: 100%;
        min-width: 720px;
        margin: 50px 0;
        border-collapse: collapse;
        background-color: red;
        position: relative;
    }
    .icons__flex{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 22px;
        i{
            margin: 0 10px;
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
    .pagination{
        display: flex;
        margin-top: 10px;
        margin: 10px -10px;
        justify-content: flex-end;
        button{
            padding: 10px;
            margin: 0 10px;
            cursor: pointer;
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