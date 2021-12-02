<template>
  <div>
    <p>
      <strong>old verison:</strong>You opened card by id {{ $route.params.id }}
    </p>
    <p><strong>simple verison:</strong>You opened card by id {{ id }}</p>
    <router-link class="btn" :to="{ name: 'productCard' }">back</router-link>
  </div>
</template>
<script>
export default {
  name: "CardPage",
  props: ["id"],
};
</script>
<style scoped>
.btn{
    background: red;
    color: white;
    padding: 5px;
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
}

</style>