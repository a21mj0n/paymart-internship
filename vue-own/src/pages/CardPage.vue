<0template>
  <div>
    <p>{{ product.name }} {{product.price}}</p>
  </div>
</0template>

<script>
export default {
  name:"CardPage",
  props:['id'],
  computed: {
    product() {
      return this.$store.getters['cart/getProduct'](this.id);
    }
  },
  created() {
    document.title = this.$route.meta.title;
  },
}
</script>

<style>

</style>