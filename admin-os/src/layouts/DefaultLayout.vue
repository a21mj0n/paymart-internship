<template>
    <div>
        <nav-bar></nav-bar>

        <main class="container">
            <router-view></router-view>
        </main>

    </div>
</template>

<script>
import NavBar from '../components/Navbar.vue'

export default {
    name: 'MainLayout',
    components: { 
        NavBar
    },
}
</script>

<style lang="scss" scoped>
    
</style>