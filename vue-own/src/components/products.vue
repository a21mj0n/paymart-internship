<template>
  <div class="product">
    {{product.name}}
    <p>{{product.price}}</p>
    <slot name="test"></slot>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang='scss'>
  .product{
    outline:1px solid black;
    width: 33.3%;
  }
</style>