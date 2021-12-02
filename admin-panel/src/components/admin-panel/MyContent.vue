<template>
    <div class="content">
        <SideBar/>
        <h1>my content</h1> 
        <div class="content__table">
            <tr>
                <th>ID</th>    
                <th>Name</th>    
                <th>Data</th>    
                <th>Actions</th>    
            </tr>
            <tr></tr>
        </div>  
    </div>
</template>
<script>
import SideBar from "../admin-panel/MySidebar.vue";
export default {
    components:{
        SideBar
    },
   
}
</script>
<style scoped lang="scss">
    
</style>