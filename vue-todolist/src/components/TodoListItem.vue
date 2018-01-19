<template>
    <li @dblclick="changeVal">
      <span v-if="!status">{{item.id}} : {{item.text}}</span>
      
       <input  
          ref="input"
          :id="item.id"
          @keydown.enter="editVal" 
          :value="item.text" 
          type="text" 
          v-if="status" /> 
      --> 
      <button @click="$emit('remove',item.id)">X</button> 
     
    </li>
</template>
<script>
export default {
  props:['item'],
  data:function(){
    return {
      status:false
    }
  },
  methods:{
    changeVal:function(){
      this.status = true;
    },
    editVal: function(){
      this.status = false;
      var input = this.$refs.input;
      var key = Number(input.id);
      var val = input.value;
      this.$emit('update',{ id:key, text:val})
    }
  }
}
</script>

