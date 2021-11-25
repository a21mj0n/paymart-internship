<template>
  <div class="about">
     
    <h1>This is an about page</h1>

  </div>
</template>
 <script>
 import TodoList from '../components/TodoList.vue'
 
 export default {
   name: 'About',
   comments : {
     TodoList
   }
 }
 </script>
 

 <style scoped>
    .about {

      font-size: 50px;
      color: blue;

    }

 </style>