<template>
    <div class="card">
        {{pizza.name}}
        <ul class="flex"
        >
            <li 
                @click="changeType(index)"
                v-for=" (type, index) in types" :key="index"
                :id="(types[selectedType] === type) ? 'active' : '' "
                :class="(!pizza.types.includes(index)) ? 'disabled' : '' "
             >
                {{type}}
            </li>
        </ul>
        <ul class="flex">
            <pre>
                {{pizza.sizes[selectedSize]}}
            </pre>
            <li 
                @click="changeSize(index)"
                v-for="(size, index) in aviableSizes" 
                :key="index"
                :id="(aviableSizes[selectedSize] === size) ? 'active' : '' "
                :class="(!pizza.sizes.includes(size)) ? 'disabled' : '' "
            >
                {{ size }}.см
            </li> 
        </ul>
    </div>
</template>
<script>
export default {
    props: ["pizza"],
    data(){
        return{
            aviableSizes: [26, 30, 40],
            types: ["Тонкое", "Традиционное"],
            selectedType: 0,
            selectedSize: 0
        }
    },
    created(){
        // console.log(this.pizza.sizes.includes(30));
    },
    methods: {
        changeSize(size){
            console.log(size);
            this.selectedSize = size
        },
        changeType(type){
            this.selectedType = type
        }
    }
}
</script>
<style scoped>
    .flex{
        display: flex;
        align-items: center;
        list-style-type: none;
        justify-content: space-between;
        padding: 0;
    }
    .card{
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 10px;
        width: 300px;
        height: 350px;
    }
    
    #active{
        cursor: pointer;
        padding: 5px;
        background-color: #fff;
        border: 1px solid #ccc;
    }
    .disabled{
        color: #ccc;
        cursor: not-allowed;
        pointer-events: none;
    }
</style>