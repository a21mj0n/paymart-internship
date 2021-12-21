<template>
   <div class="wrapper">
        <div class="row">
            <my-sidebar/>
            <div :class="(isActive) ? 'content-wrapper' : 'content-full'">
                <my-header @onToggle="onToggleIcon" :isActive="isActive"/>
                <router-view/>
            </div>
        </div>
    </div>
</template>
<script>
import MyHeader from '../components/admin-panel/MyHeader.vue'
import MySidebar from '../components/admin-panel/MySidebar.vue'

export default {
    name: "AdminLayout",
    components: { MySidebar, MyHeader},
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
    .content-wrapper{
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