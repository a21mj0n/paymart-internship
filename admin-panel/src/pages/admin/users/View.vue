<template>
  <div class="view">
    <h2>users page: {{ this.UserId.name }}</h2>
    <div class="info">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>surname</th>
            <th>avatar</th>
            <th>address</th>
            <th>age</th>
            <th>Actions</th>
            >
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ this.UserId.id }}</td>
            <td>{{ this.UserId.name }}</td>
            <td>{{ this.UserId.surname }}</td>
            <td><img :src="UserId.avatar" :alt="UserId.name" /></td>
            <td>{{ this.UserId.address }}</td>
            <td>{{ this.UserId.age }}</td>
            <td @click="$router.push({ name: 'admin.users' })">
              <button>Back</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      UserId: {},
    };
  },
  async created() {
    try {
      const { data } = await axios.get(
        `https://61ade31fd228a9001703b022.mockapi.io/api/users/${this.$route.params.id}`
      );
      this.UserId = data;
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
<style scoped lang="scss">
$back-color: rgb(31, 7, 110);
.view {
  padding: 50px;
}
table {
  border-collapse: collapse;
  margin-top: 10px;
  width: 100%;
}
table thead {
  padding: 20px;
  background: rgb(235, 235, 235);
}
table th {
  padding: 20px;
  text-align: left;
  &:last-child {
    text-align: left;
  }
}
table tbody {
  margin-top: 10px;
  & tr {
    box-shadow: 0 0 2px rgb(195, 195, 195);
  }
}
table tbody td {
  padding: 20px;
  text-align: left;
  background-color: #fff;
  &:last-child {
    text-align: left;
  }
}
button {
  padding: 10px ;
  border: 1px solid $back-color;
  background-color: transparent;
  color: $back-color;
  cursor: pointer;
  transition: all 300ms linear;
  border-radius: 3px;
  &:hover {
    background-color: $back-color;
    color: #fff;
  }
}
</style>