<template>
    <nav>
        <ul>
            <li>
                <router-link :to="{name: 'home'}">Home</router-link>
            </li>
            <li>
                <router-link :to="{name: 'about'}">About</router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    nav{
        background: rgb(104, 104, 104);
        padding: 20px 0;
        display: flex;
        justify-content: center;
    }
    ul {
        display: flex;
        align-items: center;
        list-style-type: none;
        li{
            padding: 5px 10px;
            a{
                color: #fff;
            }
        }
    }
</style>