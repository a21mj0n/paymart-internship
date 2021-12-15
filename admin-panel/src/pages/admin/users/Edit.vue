<template>
  <div class="add">
    <form @submit.prevent="editOneUser">
      <h2>change one user</h2>
      <input
        type="text"
        placeholder="enter users name"
        v-model="userData.username"
      />
      <input
        type="text"
        placeholder="enter users  surname"
        v-model="userData.full_name"
      />
      <input
        type="string"
        placeholder="enter users avatar"
        v-model="userData.avatar"
      />
      <input
        type="text"
        placeholder="enter users email"
        v-model="userData.email"
      />
      <button type="submit">Изменить</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "editOneUser",
  data() {
    return {
      userData: {},
    };
  },
  methods: {
    async editOneUser() {
      try {
        const resp = await axios.put(
          `https://marketpaymart.herokuapp.com/api/dashboard/users/${this.$route.params.id}`,
          this.userData
        );
        this.$router.push({ name: "admin.users" });
        console.log(resp.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    console.log(this.$router);
    const { data } = await axios.get(
      `https://marketpaymart.herokuapp.com/api/dashboard/users/${this.$route.params.id}`
    );
    this.userData = data;
  },
};
</script>
<style lang="scss" scoped>
$main-color: rgb(122, 123, 184);
.add {
  width: 100%;
  height: calc(100vh - 100px);
  background-color: #fff;
  form {
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: auto;
    h2 {
      padding: 20px 0;
    }
    input {
      width: 100%;
      height: 50px;
      padding: 10px;
      outline: none;
      transition: all 200ms ease-in;
      margin-top: 10px;
      border: none;
      border-bottom: 1px solid #ccc;
      &:focus {
        border-bottom: 1px solid rgb(0, 167, 56);
      }
    }
    button {
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
      &:hover {
        background-color: $main-color;
        color: #fff;
      }
    }
  }
}
</style>