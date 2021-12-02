<template>
    <div>
        <nav-bar></nav-bar>
        <main class="container">
            <router-view></router-view>
        </main>
        <footer>
            Footer
        </footer>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
    export default {
        name: 'MainLayout',
        components: {
            NavBar
        }
    }
</script>

<style scoped>
    
</style>