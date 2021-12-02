<template>
  <div class="card">
    <p class="card__title">{{product.id}}</p>
    <p class="card__name">{{product.name}}</p>
    <p class="card__price">{{product.price}}</p>
    <button class="card__link"
     @click="$router.push(`/cards/${product.id}`)">
      link
    </button>
  </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>
.card{
  width: 33.3%;
  min-height: 200px;
  outline: 1px solid black;
}
.card__link{
  background: green;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  padding: 5px;
  cursor: pointer;
}
</style>