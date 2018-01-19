<template>
  <input type="text" 
    :value="value"
    @keydown.enter="changeValue"
   >
</template>

<script>
    export default{
        name:"BaseInputText",
        props:['value'],
        methods:{
            changeValue:function(){
                var filVal = event.target.value;
                if(filVal){
                    this.$emit('input',filVal)
                }              
            }
        }
    }
</script>