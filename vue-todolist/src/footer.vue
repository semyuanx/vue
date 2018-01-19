<template>
   <footer class="footer">
       <span class="todo-count">
           <strong>0</strong> 项未完成
        </span> 
        <ul class="filters">
            <li><a href="#/" class="selected">全部</a></li> 
            <li><a href="#/active" class="">未完成</a></li> 
            <li><a href="#/completed" class="">已完成</a></li>
        </ul> 
        <button class="clear-completed" style="">清空已完成</button>
    </footer>
</template>

<script>
    export default{
        name:"Footer"
    }
</script>