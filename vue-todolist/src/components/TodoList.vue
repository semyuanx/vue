<template>
  <div>
      <BaseInputText :aa="aa"></BaseInputText>
      <ul>
        <li 
          :is="TodoListItem"
          ></li>
      </ul>
  </div>
    
</template>

<script scope>
import TodoListItem from './TodoListItem';
import BaseInputText from './BaseInputText'
export default {
  name: "Todolist",
  data:function(){
    return {
      items:[{
        id:0,
        text:"haha"
      }]
    }
  },
  components:{
    TodoListItem,
    BaseInputText
  }
};
</script>
