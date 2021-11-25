<template>
    <div>
        <h2>About Page</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsum beatae facilis tenetur perspiciatis autem quae excepturi, fugit incidunt dolorem!
        </p>
        <router-link :to='{name: "home"}' >
            Link to home page
        </router-link>
    </div>
</template>
<script>
export default {
    // mounted() {
    //     document.title = this.$route.meta.title;
    // },
    created() {
        document.title = this.$route.meta.title;
    },
}
</script>
<style lang="">
    
</style>