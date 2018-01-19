<template>
   <div class="header">
        <h1>todoList</h1>
        <input @keydown.enter.stop="addData()" placeholder="接下来要做什么?" autofocus="autofocus" class="new-todo">
    </div>
</template>
<script>
export default {
  name: "Header",
  methods: {
      addData: function() {
        alert(123);
      }
  }
};
</script>
