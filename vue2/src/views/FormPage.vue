<template>
  <div>
      <div class="continer pt-5">
              <h2 v-text="title"></h2>
              <h2 v-once>{{title}}</h2>
      </div>
  </div>
</template>

<script>
export default {
data() {
   return {
      title: "Я есть Грут"
    };
},
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.input__style {
  width: 100%;
  border: 1px solid #c0c0c0;
  height: 50px;
  font-size: 25px;
  &:focus {
    outline: 0;
  }
}
.btn {
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  color: black;
  padding: 20px;
  margin: 0 20px;
  &:hover {
    color: black;
  }
}
.danger {
  background: red;
  color: white;
  &:hover {
    color: white;
  }
}
.primary {
  background: green;
  color: white;
}
.list__item {
  list-style: none;
  display: flex;
  justify-content: space-between;
}
</style>