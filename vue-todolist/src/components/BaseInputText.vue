<template>
  <input type="text">
</template>

<script>
    export default{
        name:"BaseInputText",
        props:['aa'],
        created:function(){
            console.log(this.aa)
        }
    }
</script>