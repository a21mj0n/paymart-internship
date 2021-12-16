<template>
    <div class="add">
        <h2>{{$t('category.edit_title')}}: {{categoryData.name}}</h2>
        <form @submit.prevent="editCategory">
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
import axios from 'axios';
import VueFormGenerator from 'vue-form-generator';
import i18n from '../../../i18n/i18n';
import { mapGetters } from 'vuex';

export default {
    name: "editCategory",
    data(){
        return{
            categoryData: {},
            model: {
                name: ""
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
        async editCategory(){
            const resp = await axios.put(`https://marketpaymart.herokuapp.com/api/dashboard/categories/${this.$route.params.id}`, this.categoryData)
            console.log(resp);
            this.$router.push({name: 'admin.categories'})
        },
        getEditFields($this){
                this.schema.fields = [
                {
                    type: 'input',
                    inputType: 'text',
                    name: 'name',
                    model: "name",
                    label: i18n.t('category.edit_label'),
                    validator:  VueFormGenerator.validators.string.locale({
                        fieldIsRequired: "Поля не может быть пустым",
                    })
                },
                {
                    type: 'submit',
                    buttonText: i18n.t('category.edit_btn'),
                    async onSubmit(model){
                        await axios.post('https://marketpaymart.herokuapp.com/api/dashboard/categories', model);
                        $this.$router.push({name: 'admin.categories'});
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
            this.getEditFields()
        }
    },
    async created(){
        const {data} = await axios.get(`https://marketpaymart.herokuapp.com/api/dashboard/categories/${this.$route.params.id}`)
        this.categoryData = data
        this.model.name = this.categoryData.name
        const $this = this
        this.getEditFields($this)
    }
}
</script>

<style lang="scss" scoped>
    $main-color: rgb(122, 123, 184);
    .add{
        padding: 50px;
        width: 100%;
        height: calc(100vh - 100px);
        background-color: #fff;
        h2{
            text-align: center;
        }
        form{
            display: flex;
            flex-direction: column;
            width: 700px;
            margin: auto;
        }
    }
</style>