<template >
    <div class="wrapper">
        <div class="row">
            <my-sidebar></my-sidebar>
            <div class="content">
                <my-header/>
                <my-content/>
            </div>
        </div>
    </div>
</template>
<script>
import MyContent from '../components/admin-panel/MyContent.vue'
import MyHeader from '../components/admin-panel/MyHeader.vue'
import MySidebar from '../components/admin-panel/MySidebar.vue'
export default {
  components: { MyContent, MySidebar, MyHeader},}
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
        padding-left: 260px;
        width: 100%;
    }
</style>