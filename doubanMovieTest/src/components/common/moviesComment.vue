<template>
    <div class="movie-comment">
        <p class="movie-comment-title">{{title}}的短评 · · · · · ·</p>
        <p>没有豆瓣数据权限</p>
  </div>
</template>

<script>
export default {
  props: ["title"],
  name: "movieComment",
  mounted(){
    //   this.$store.dispatch("getMovieComment");
  },
  computed:{
      movieComment(){
          return this.$store.getters.movieComment;
      }
  }
};
</script>

<style lang="less" scoped>
.movie-comment {
  float: left;
  clear: both;
  margin-top: 20px;
  .movie-comment-title {
    color: #007722;
    font-size: 16px;
  }
}
</style>