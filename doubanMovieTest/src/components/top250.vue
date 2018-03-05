<template>
  <div id="wrapper">
      <h2>豆瓣新片榜</h2>
      <div class="indent">
          <div class="">
             <p class="ul first"></p>
             <searchTag v-for="(movie,key) in ranking250.subjects" :key="key" :item="movie"></searchTag>
          </div>
      </div>
  </div>
</template>
<script>
import searchTag from "./common/searchTag.vue";
export default {
  name: "top250",
  mounted() {
    this.$store.dispatch("loadingtop250");
  },
  computed: {
    ranking250() {
        console.log( this.$store.getters.ranking250.subjects)
      return this.$store.getters.ranking250;
    }
  },
  components: {
    searchTag
  }
};
</script>

<style lang="less">
#wrapper {
  width: 950px;
  min-height: 500px;
  margin: 30px auto;
}
</style>
