<template>
  <div class="content">
    <div class="center">
      <form>
        <vue-form-generator
          :schema="schema"
          :model="model"
          :options="formOptions"
        ></vue-form-generator>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueFormGenerator from "vue-form-generator";

export default {
  name: "createProduct",
  data() {
    return {
      model: {
        id: Date.now(),
        img: "",
        name: "",
        brand_id: "",
        color: "",
        size: "",
        price: "",
        count: 0,
        amount: 0,
        category_id: "",
      },
      schema: {
 
      },
      formOptions: {
        validateBeforeSubmit: true,
        validateAfterLoad: false,
        validateAfterChanged: true,
        validateAsync: true,
      },
    };
  },
  created(){
    const $this = this
    const fields = {
      fields: [
          {
            type: "select",
            label: "Выберите Категорию",
            model: "category_id",
            values: [
              "Носки",
              "Трусы",
              "Штаны",
              "Шорты",
              "Майки",
              "Шапки",
              "Свитеры",
            ],
          },
          {
            type: "input",
            inputType: "text",
            label: "Название товара",
            model: "name",
            required: true,
            validator: VueFormGenerator.validators.string.locale({
              fieldIsRequired: "Введите корректное название",
            }),
          },
          {
            type: "input",
            inputType: "text",
            label: "Название бренда",
            model: "brand_id",
            required: true,
            validator: "string",
          },
          {
            type: "select",
            label: "Выберите цвет",
            model: "color",
            values: [
              "white",
              "black",
              "green",
              "blue",
              "purple",
              "orange",
              "yellow",
            ],
          },
          {
            type: "select",
            label: "Выберите размер",
            model: "size",
            values: ["S", "M", "L", "XL", "XXL", "XXXL"],
          },
          {
            type: "input",
            inputType: "number",
            label: "Назовите цену",
            model: "price",
            required: true,
            validator: "number",
          },
          {
            type: 'submit',
            label: '',
            buttonText: 'добавить',
            validateBeforeSubmit: true,
            async onSubmit(model){
              await axios.post('https://61ade31fd228a9001703b022.mockapi.io/api/products', model)
              await $this.$router.push({name: 'admin.products'})
            }
          }
        ],
  }
  this.schema =fields

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
.center {
  max-width: 500px;
  width: 100%;
  height: 700px;
}
</style>
