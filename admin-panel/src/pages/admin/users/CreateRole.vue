<template>
    <div class="add">
        <form class="form" @submit.prevent="users" @validated="onValidated"> 
            <h2>{{$t('user.role_create')}}</h2>
            <vue-form-generator
                :schema="schema"
                :model="model"
                :options="formOptions"
            >
            </vue-form-generator>

            <div 
                v-if="permissions.length > 0"
                class="permissions"
            >
                <span
                    v-for="permission in permissions" 
                    :key="permission"
                    class="permission"
                >
                    {{permission}}
                </span>
            </div>

        </form>
    </div>
</template>

<script>
import axios from 'axios'
import VueFormGenerator from 'vue-form-generator'
import i18n from '../../../i18n/i18n'
import { mapGetters } from 'vuex'
import config  from '../../../config';
export default {
    name: 'CreateRole',
    data(){
        return{
            model: {
               role_name: '',
               role_permission: '',
            },
            schema: {
                fields: []
            },
            formOptions: {
                validateAfterChanged: true,
            },
            permissions: []
        }
    },
    methods: {
        async createCategory(){
            console.log(this.model)
            await axios.post(`${config.URL.dev}/api/dashboard/categories`, this.model);
            this.$router.push({name: 'admin.categories'});
        },
        onValidated(isValid, errors) {
            console.log("Validation result: ", isValid, ", Errors:", errors);
        },
        fillSchemaFields($this){
            this.schema.fields = [
            {
                type: 'input',
                inputType: 'text',
                required: true,
                label: i18n.t('user.role_name'),
                model: 'role_name',
                validator: VueFormGenerator.validators.string.locale({
                    fieldIsRequired: i18n.t('user.role_input_validate'),
                    textTooSmall: ""
                })
            },
            {
                type: 'input',
                inputType: 'text',
                required: false,
                label: i18n.t('user.role_permissions'),
                model: 'role_permission',
                buttons: [
                    {
                        classes: "btn-location",
                        label: i18n.t('user.role_btn_add'),
                        onclick: function(model) {
                            if(model.role_permission === ''){
                                return 
                            }
                            $this.permissions.push(model.role_permission)
                            model.role_permission = ''
                        }
                    },
                ]
            },
            {
                type: 'submit',
                buttonText: i18n.t('user.role_btn_create'),
                async onSubmit(model){
                    await axios.post(`${config.URL.dev}/api/dashboard/categories`, model);
                    $this.$router.push({name: 'admin.categories'});
                    console.log(model);
                    this.permissions.push.model
                },
                label: '',
                validateBeforeSubmit: true
            }
        ];
        }
    },
    computed: {
        ...mapGetters({
            langChanged: 'lang/langChanged'
        }),
    },
    watch: {
        langChanged(){
            this.fillSchemaFields()
        }
    },
    created(){
        const $this = this;
        this.fillSchemaFields($this)
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
            margin: 0 -20px;
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
        font-weight: 300;
        align-self: flex-end;
        transition: all 300ms linear;
        width: 30%;
        padding: 10px;
        border: 1px solid $main-color;
        background-color: transparent;
        color: rgb$main-color;
        margin: 10px 0;
        cursor: pointer;
        color: $main-color;
        &:hover{
            background-color: $main-color;
            color: #fff;
        }
    }
    .permissions{
        align-items: center;
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
    }
    .permission{
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px;
    }
</style>