<template>
  <div class="v__select"
  >
      <p class="title"
      @click="areOptionsVisible = !areOptionsVisible"
      >{{selected}}</p>
      <div class="options"
      v-if="areOptionsVisible" 
      
      >
          <p 
          v-for="option in options" 
          :key="option.value"
          @click="selectOptions(option)">
              {{option.name}}

          </p>
      </div>
  </div>
</template>

<script>
export default {
name: "v-select",
props: {
    options: {
        type: Array,
        default(){
            return []
        }
    },
    selected:{
        type: String,
        default:''
    }
},
data(){
    return {
        areOptionsVisible: false
    };

},
computed: {},
methods:{
    selectOptions(option){
       
       this.$emit('select', option)
       console.log(option); 
       
    },
    hideSelect(){
        this.areOptionsVisible = false
    }
},
mounted(){
document.addEventListener('click', this.hideSelect.bind(this), true)
},
beforeDestroy(){
document.removeEventListener('click', this.hideSelect)
}
}
</script>

<style scoped>
.v__select{
    position: relative;
    width: 200px;
}
.v__select p{
    margin: 0;


}
.title{
    border: 1px solid #aeaeae;
    cursor: pointer;
}
.options{
    border: 1px solid #aeaeae;
    position: absolute;
    top: 30px;
    right: 0;
    width: 100%;
}
.options p:hover{
    background: #e7e7e7;
    cursor: pointer;
}
</style>