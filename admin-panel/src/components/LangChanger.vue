<template>
    <select v-model="$i18n.locale" >
        <option v-for="(lang) in langs" :key="lang">
            {{lang}}
        </option>
    </select>
</template>
<script>
export default {
    data(){
        return{
            langs: ['ru', 'en']
        }
    }
}
</script>
<style >
    
</style>