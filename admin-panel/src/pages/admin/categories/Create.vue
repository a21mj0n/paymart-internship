<template>
    <div class="add">
        <form class="form" @submit.prevent="createCategory" @validated="onValidated"> 
            <h2>Введите название категорию</h2>
            <vue-form-generator
                :schema="schema"
                :model="model"
                :options="formOptions"
            >
            </vue-form-generator>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
import VueFormGenerator from 'vue-form-generator'
export default {
    name: 'createCategory',
    data(){
        return{
            model: {
               name: '',
               icon_name: '',
               created_at: Date.now()
            },
            schema: {
                fields: []
            },
            formOptions: {
                validateAfterChanged: true,
            }
        }
    },
    methods: {
        async createCategory(){
            console.log(this.model)
            await axios.post('https://marketpaymart.herokuapp.com/api/dashboard/categories', this.model);
            this.$router.push({name: 'admin.categories'});
        },
        onValidated(isValid, errors) {
            console.log("Validation result: ", isValid, ", Errors:", errors);
        }
    },
    created(){
        const $this = this;
        this.schema.fields = [
            {
                type: 'input',
                inputType: 'text',
                required: true,
                label: 'Название категории',
                model: 'name',
                styleClasses: 'form__input',
                validator: VueFormGenerator.validators.string.locale({
                    fieldIsRequired: "Поля не может быть пустым",
                    textTooSmall: ""
                })
            },
            {
                type: 'input',
                inputType: 'text',
                required: true,
                label: 'Название иконки',
                model: 'icon_name',
                styleClasses: "form__input",
                validator: VueFormGenerator.validators.string.locale({
                    fieldIsRequired: "Поля не может быть пустым",
                    textTooSmall: ""
                })
            },
            {
                type: 'submit',
                buttonText: "Добавить",
                async onSubmit(model){
                    await axios.post('https://marketpaymart.herokuapp.com/api/dashboard/categories', model);
                    $this.$router.push({name: 'admin.categories'});
                },
                label: '',
                validateBeforeSubmit: true
            }
        ];
    }
}
</script>
<style lang="scss" scoped>
$main-color: rgb(31, 7, 110);
    .add{
        width: 100%;
        height: calc(100vh - 100px);
        background-color: #fff;
        .form {
            border: none !important;
            display: flex;
            flex-direction: column;
            h2{
                padding: 20px 0;
                text-align: center;
            }
            width: 600px;
            margin: auto;
            
        }
    }
    .form__input{
        background-color: red;
        width: 100% !important;
        height: 50px !important;
        padding: 10px !important;
        outline: none;
        transition: all 200ms ease-in;
        margin-top: 10px;
        border: none;
        box-shadow: none;
        border-bottom: 1px solid #ccc;
        &:focus{
            border-bottom: 1px solid rgb(0, 167, 56);
        }
     }
    .add__btn{
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
</style>