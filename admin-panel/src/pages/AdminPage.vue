<template >
    <div class="wrapper">
        <router-view />           
    </div>
</template>
<script>
export default {
    name: "AdminPage",
    data(){
        return {
            isActive: true
        }
    },
    methods: {
        onToggleIcon(){
            this.isActive = !this.isActive
        }
    },
}
</script>
<style lang="scss">
    .fa{
        color: black;
    }
    .row{
        display: flex;
        width: 100%;
    }
    .content{
        z-index: 200;
        margin-left: auto;
        width: calc(100vw - 260px);
        transition: all 300ms linear;
    }
    .content-full{
        z-index: 200;
        margin-left: auto;
        transition: all 300ms linear;
        width: calc(100vw - 74px);
    }
</style>