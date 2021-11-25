<template>
    <div>
        <nav-bar></nav-bar>

        <main class="container">
            <router-view></router-view>
        </main>

        <footer>
            <ul>
                <li>home</li>
                <li>about</li>
            </ul>
        </footer>
    </div>
</template>

<script>
import navBar from '../components/navBar.vue'

export default {
    name: 'MainLayout',
    components: { 
        navBar
    },
    
    
}
</script>

<style lang="scss" scoped>
    
</style>