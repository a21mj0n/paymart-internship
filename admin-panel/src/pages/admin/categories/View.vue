<template>
    <div class="view">
        <h2>Страница категори: {{this.categoryById.name}}</h2>
        <div class="info">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Icon</th>
                        <th>CreatedAt</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{this.categoryById.id}}</td>
                        <td>{{this.categoryById.name}}</td>
                        <td>{{this.categoryById.icon}}</td>
                        <td>{{this.categoryById.created_at}}</td>
                        <td @click="$router.push({name: 'admin.categories'})">
                            <button>Back</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return{
            categoryById: {}
        }
    },
    async created(){
        const {data} = await axios.get(`https://marketpaymart.herokuapp.com/api/dashboard/categories/${this.$route.params.id}`)
        this.categoryById = data
        console.log(data);
    }
}
</script>
<style scoped lang="scss">
$back-color: rgb(31, 7, 110);
    .view{
        padding: 50px;
    }
    table{
        border-collapse: collapse;
        margin-top: 10px;
        width: 100%;
    }
    table thead{
        padding: 20px;
        background: rgb(235, 235, 235);
    }
    table th {
        padding: 20px;
        text-align: left;
        &:last-child{
            text-align: left;
        }

    }
    table tbody{
        margin-top: 10px;
        & tr{
            box-shadow: 0 0 2px rgb(195, 195, 195);
        }
    }
    table tbody td{
        padding: 20px;
        text-align: left;
        background-color: #fff;
        &:last-child{
            text-align: left;
        }
    }
    button{
        padding: 10px;
        border: 1px solid $back-color;
        background-color: transparent;
        color: $back-color;
        cursor: pointer;
        transition: all 300ms linear;
        border-radius: 3px;
        &:hover{
            background-color: $back-color;
            color: #fff;
        }
    }

</style>