<template>
    <div>
        <header>TEST FOR UPPER LAYOUT</header>
        <h1>TEST UPPER</h1>
        <router-link to="/">Way to home page</router-link>
        <main class="container">
            <router-view></router-view>
        </main>
        <footer>FOOTER FOR UPPER LAYOUT</footer>
    </div>
</template>

<script>
    export default {
        name: 'UpperLayout'
    }

</script>

<style scoped>

</style>