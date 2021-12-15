<template>
  <select v-model="$i18n.locale">
    <option  v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
      <p>{{lang}}</p>
    </option>
  </select>
</template>

<script>
export default {
  data() {
    return { 
      langs: ['ru', 'en'],
    }
  },
}
</script>

<style>

</style>