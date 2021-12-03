<template>
    <div>
        <h2>Home page</h2>

        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Nam corporis voluptas quidem mollitia veritatis itaque, nihil totam ipsa fuga modi.
        </p>

        <router-link :to="{name: 'about'}">
            Link to about page
        </router-link>

        <div class="block__row">
           <product-card 
                v-for="product in products" 
                :key="product.id"
                :product="product"
                :bg-color="backgroundColor"
            >
 
                <template #header>
                    <div>Card Header</div>
                </template>

                <template #default>
                    Card Content (default)
                </template>

                <template #footer>
                    <div v-html="title"></div>
                </template>
                
            </product-card>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ProductCard from '../components/ProductCard.vue'

export default {
    name: 'HomePage',
    data() {
        return {
            todo: null,
            products: [
                {
                    id: 1,
                    name: 'LG',
                    price: 200,
                },
                {
                    id: 2,
                    name: 'APPLE',
                    price: 200,
                },
                {
                    id: 3,
                    name: 'MI',
                    price: 200,
                },
            ],
            backgroundColor: 'yellow',  
            title: 'Card <span style="color: red">Footer</span>',
        };
    },
    components: {
        ProductCard,
    },
    // created() {
    //     document.title = this.$route.meta.title;
    //     fetch('https://jsonplaceholder.typicode.com/posts/1')
    //         .then(response => response.json())
    //         .then(todo => {
    //             console.log(todo);

    //             fetch(`https://jsonplaceholder.typicode.com/comments?postId=${todo.id}`)
    //                 .then(response => response.json())
    //                 .then(commentsByTodoId => {

    //                     console.log(commentsByTodoId);
    //                 })
    //                 .catch(error => {
    //                     console.log('comments error: ', error)
    //                 }) 
    //         })
    //         .catch(error => {
    //             console.log('post error: ', error);
    //         });


//  try {
//             const responsePost = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//             const todo = await responsePost.json()
//             this.todo = todo;

//             console.log(todo);
//         } catch (error) {
//             console.log('post error: ', error);
//         }

//         try {
//             const responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.todo.id}`)
//             const commentsByPostId = await responseComments.json();
            
//             console.log(commentsByPostId);
//         } catch (error) {
//             console.log('comments error: ', error) 
//         }


    // },
    async created() {
        document.title = this.$route.meta.title;

        try {

            
            const newTodo = await axios.put('https://jsonplaceholder.typicode.com/posts/3', {
                title: 'lorem put edit',
                userId: 5,
            });

            console.log(newTodo.data);

            const todos = await axios.get('https://jsonplaceholder.typicode.com/posts')

            console.log(todos.data);


        } catch (error) {
            console.log(error);
        }
       
    },
}
</script>

<style lang="scss">
    .block__row{
        margin: 20px 0;
        display: flex;
        justify-content: space-between;
    }
   
</style>