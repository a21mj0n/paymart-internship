<template>
    <header>
        <router-link :to="{name: 'home'}">Home</router-link>
        <router-link :to="{name: 'about'}">About</router-link>
    </header>
</template>
<script>
export default {
    name: 'NavBar'
}
</script>
<style>
    header{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 50px;
        background-color: #ccc;
    }
    a{
        margin: 0 20px;
    }
</style>