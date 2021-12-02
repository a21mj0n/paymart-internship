<template>
    <main>
        <router-view></router-view>
        <button @click="$router.push({name: 'home'})">to Home</button>
    </main>
</template>

<script>
    export default {
        name: 'EmptyLayout',
    }
</script>

<style scoped>
    main{
        margin: 100px 0;
        display: flex;
        justify-content: center;
    }
</style>