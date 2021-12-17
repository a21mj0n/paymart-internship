<template>
  <div class="add">
    <form action="#" @submit.prevent="createUser">
      <h2>{{$t('user.add_title')}}</h2>
      <div class="input_wrapper">
        <vue-form-generator
          :schema="schema"
          :model="model"
          :options="formOptions"
        >
        </vue-form-generator>
        <button type="submit">{{$t('msg.btn')}}</button>
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
        username: "",
        full_name: "",
        avatar: "",
        email: "",
      },
      schema: {
        fields: [
          {
            type: "input",
            inputType: "text",
            placeholder: "enter your username",
            model: "username",
            required: true,
            validator: "string",
            styleClasses: "inps",
          },
          {
            type: "input",
            inputType: "text",
            placeholder: "enter your fullname",
            model: "full_name",
            required: true,
            validator: "string",
            styleClasses: "inps",
          },
          {
            type: "input",
            inputType: "text",
            placeholder: "url img",
            model: "avatar",
            required: true,
            validator: "string",
            styleClasses: "inps",
          },
          {
            type: "input",
            inputType: "text",
            placeholder: "enter your email",
            model: "email",
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
          "https://marketpaymart.herokuapp.com/api/dashboard/users",
          this.model
        );
        this.value, this.value_surname, this.value_age, this.value_address;
        this.$router.push({ name: "admin.users" });
        console.log(resp.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style lang="scss"  scoped>
select {

  margin-bottom: 20px;
}
div.add {
  padding-top: 20px;
}
fieldset {
  padding: 20px;
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
  display: flex;
  font-size: 18px;
  transition: all 300ms linear;
  justify-self: center;
  padding: 10px;
  border: 1px solid rgb(122, 123, 184);
  border-radius: 10px;
  background-color: transparent;
  color: rgb(122, 123, 184);
  cursor: pointer;
  margin: 10px auto;
  color: rgb(122, 123, 184) r;
  &:hover {
    background-color: rgb(122, 123, 184);
    color: #fff;
  }
}
</style>