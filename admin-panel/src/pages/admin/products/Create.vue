<template>
  <div class="content">
          <div class="center">
            <vue-form-generator
            :schema="schema"
            :model="model"
            :options="formOptions"
        ></vue-form-generator>
          </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "createProduct",
  data() {
    return {
      model:{
        img: '',
        name: '',
        brand: '',
        color: '',
        size: '',
        price: '',
        qty: 0,
        amount: ''

      },
      schema:{
        fields:[
          {
            type: 'input',
            inputType: 'text',
            label: 'Название товара',
            model: 'name',
            required: true,
            validator: 'string'
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Название бренда',
            model: 'brand',
            required: true,
            validator: 'string'
          },
          {
            type: 'select',
            label: 'Выберите цвет',
            model: 'color',
            values: ['white', 'black', 'green', 'blue', 'purple', 'orange','yellow']
            
          },
          {
            type: 'select',
            label: 'Выберите размер',
            model: 'size',
            values: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
            
          },
          {
            type: 'input',
            inputType: 'number',
            label: 'Назовите цену',
            model: 'price',
            required: true,
            validator: 'number'
          },
           {
            type: 'submit',
            async onSubmit(model){
              await axios.post('https://61ade31fd228a9001703b022.mockapi.io/api/products', model)
            },
            label: '',
            buttonText: 'Добавить продукт',
            validateBeforeSubmit: true

          },
           
        

        ],
         
      },
      formOptions:{
        validateAfterLoad: false,
        validateAfterChange: true,
        validateAsync: true,
      }
    };
   
  },
  
 
 
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(238, 238, 238);
  height: calc(100vh - 100px);
  overflow-y: auto;
}
.center{
  max-width: 500px;
  width: 100%;
  height: 700px;
}

</style>
