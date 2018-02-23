<template>
  <div id="app">
     <DHeader></DHeader>
    <keep-alive exclude="moviesDetail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import header from './header';
export default {
  name: 'App',
  data(){
    return {
    }
  },
  components:{
    'DHeader':header
  }
}
</script>

<style lang="less">
  @import '../style/base.less';
  // *{
  //   margin: 0;
  //   padding: 0;
  //   font-family: '微软雅黑';
  // }
</style>
