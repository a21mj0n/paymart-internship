<template>
   <div class="wrapper">
        <div class="row">
            <admin-sidebar/>
            <div :class="(isActive) ? 'content-wrapper' : 'content-full'">
                <admin-header @onToggle="onToggleIcon" :isActive="isActive"/>
                <router-view/>
            </div>
        </div>
    </div>
</template>
<script>
import AdminHeader from '../components/admin-panel/AdminHeader.vue'
import AdminSidebar from '../components/admin-panel/AdminSidebar.vue'

export default {
    name: "AdminLayout",
    components: { AdminHeader, AdminSidebar},
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