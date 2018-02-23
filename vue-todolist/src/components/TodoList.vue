<template>
  <div>
      <BaseInputText @keydown.enter.native="addItem" v-model="inputVal"></BaseInputText>
      <ul>
        <li 
          is="TodoListItem"
          v-for="(item, key) in items"
          :item = "item"
          :key="key"
          @remove="removeItem"
          @update='updateVal'
          ></li>
      </ul>
      <ul>
        <li v-for="(item, key) in list">
          {{item}}
        </li>
      </ul>
      <button @click="addListItem()">更改</button>
  </div>
    
</template>

<script scope>
import TodoListItem from './TodoListItem';
import BaseInputText from './BaseInputText';
let len = 0;
export default {
  name: "Todolist",
  data:function(){
    return {
      inputVal:'',
      items:[{
        id:len++,
        text:"haha"
      }],
      list:[1,2,3,4]
    }
  },
  methods:{   
    addListItem:function(){
      this.list[0] = 3;
      console.log(this.list)
    },  
    addItem:function(){
      this.items.push({
        id:len++,
        text:this.inputVal
      })
    },
    removeItem:function(id){
      this.items = this.items.filter(function(item){
          return item.id !== id
      })
    },
    updateVal:function(obj){
      this.items = this.items.map(function(item){
        if(item.id === obj.id){
          item = obj;
        }
        return item;
      })
    }
  },
  components:{
    TodoListItem,
    BaseInputText
  }
};
</script>
