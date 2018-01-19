<template>
  <div id="app" >
    <div class="todoapp">
      <Header></Header>    
      <Main></Main>
      <Footer></Footer>
    </div>
  </div>
</template>

<script scope>
import "./assets/index.css";
import Main from './body.vue';
import Header from './header.vue';
import Footer from './footer.vue';
export default {
  name: "Todolist",
  components:{
    Main,
    Header,
    Footer
  }
};
</script>
