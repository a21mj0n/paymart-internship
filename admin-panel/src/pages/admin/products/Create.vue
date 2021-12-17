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
import VueFormGenerator from "vue-form-generator/dist/vfg-core.js";
import config  from '../../../config';

export default {
  name: "createProduct",
  data() {
    return {
      pullCat: "",
      pullBrand: "",
      model: {
        id: Date.now(),
        image: [],
        name: "",
        brand_id: '',
        category_id: "",
        price: "",
        quantity: null,
        created_at: new Date().toLocaleString(),
      },
      schema: {},
      formOptions: {
        validateBeforeSubmit: true,
        validateAfterLoad: false,
        validateAfterChanged: true,
        validateAsync: true,
      },
    };
  },
  methods: {
    async getCategory() {
      const resp = await axios.get(
        "https://marketpaymart.herokuapp.com/api/dashboard/categories"
      );
      const resp2 = await axios.get(
        "https://marketpaymart.herokuapp.com/api/dashboard/brands"
      );
      
      this.pullCat = resp.data
      this.pullBrand = resp2.data
      console.log(this.pullBrand);
      
    },
  },
  async created() {
    await this.getCategory();
    const $this = this;
    const fields = {
      fields: [
        {
          type: "select",
          label: "Выберите категорию",
          model: "category_id",
          values: () => this.pullCat,
        },
        {
          type: "select",
          label: "Выберите бренд",
          model: "brand_id",
          values: () => this.pullBrand,
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
          inputType: "number",
          label: "Назовите цену",
          model: "price",
          required: true,
          validator: "number",
        },
        {
          type: "input",
          inputType: "number",
          label: "Выберите колличество",
          model: "quantity",
          default: 0,
          validator: "number",
        },
        // {
        //   type: "file",
        //   // inputType: "file",
        //   label: "hollo",
        //   model: "image",
        //   preview: true,
        //   browse: false 
        // },
        {
          type: "submit",
          label: "",
          buttonText: "добавить",
          validateBeforeSubmit: true,
          async onSubmit(model) {
            await axios.post(
              `${config.URL.prod}/api/dashboard/products`,
              model 
            );
            console.log(model);
            await $this.$router.push({ name: "admin.products.test" });
          },
        },
      ],
    };

    this.schema = fields;
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
