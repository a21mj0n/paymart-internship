<template>
  <div class="add">
    <form action="#" @submit.prevent="createUser">
      <h2>Add User</h2>
      <div class="input_wrapper">
        <vue-form-generator
          :schema="schema"
          :model="model"
          :options="formOptions"
        >
        </vue-form-generator>
        <button type="submit">add user</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "create",

  data() {
    return {
      model: {
        name: "",
        surname: "",
        age: "",
        address: "",
      },
      schema: {
        fields: [
          {
            type: "input",
            inputType: "text",
            placeholder: "enter your name",
            model: "name",
            required: true,
            validator: "string",
            styleClasses: "inps",
          },
          {
            type: "input",
            inputType: "text",
            placeholder: "enter your surname",
            model: "surname",
            required: true,
            validator: "string",
            styleClasses: "inps",
          },
          {
            type: "input",
            inputType: "number",
            placeholder: "enter your age",
            model: "age",
            required: true,
            validator: "number",
            styleClasses: "inps",
          },
          {
            type: "input",
            inputType: "text",
            placeholder: "enter your address",
            model: "address",
            required: true,
            styleClasses: "inps",
          },
        ],
      },
      formOptions: {
        validateAfterChanged: true,
      },
    };
  },
  methods: {
    async createUser() {
      try {
        const resp = await axios.post(
          "https://61ade31fd228a9001703b022.mockapi.io/api/users",
          this.model
        );
        this.value, this.value_surname, this.value_age, this.value_address;
        this.$router.push({ name: 'admin.users' });
        console.log(resp.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>


<style lang="scss" >
fieldset {
  border: none;

  input {
    padding: 10px !important;
    border: 1px solid rgb(122, 123, 184) !important;
    border-radius: 10px !important;
  }
}
h2 {
  text-align: center;
  // color: #;
}
.input_wrapper {
  height: 100%;
  padding: 0 20px;
}

button {
  font-size: 18px;
  transition: all 300ms linear;
  width: 20%;
  padding: 10px;
  border: 1px solid rgb(122, 123, 184);
  border-radius: 10px;
  background-color: transparent;
  color: rgb(122, 123, 184);
  cursor: pointer;
  margin: 10px;
  color: rgb(122, 123, 184) ;
  &:hover {
    background-color: rgb(122, 123, 184);
    color: #fff;
  }
}
</style>