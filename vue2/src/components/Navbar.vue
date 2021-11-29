<template>
    <nav>
        <ul>
            <router-link 
                tag="li" 
                :to='{ name: link.name }' 
                v-for="(link, index) in links" 
                :key="index"
            >
                {{ link.text }}                
            </router-link>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            links: [
                {
                    name: 'home',
                    text: 'Home Page'
                },
                {
                    name: 'about',
                    text: 'About Page'
                }
            ]
        }
    },
}
</script>

<style lang="scss">
    // nav {
    //     ul {
    //         display: flex;
    //         justify-content: space-between;
    //     }
    // }
</style>