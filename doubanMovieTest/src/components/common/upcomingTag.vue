<template>
    <li class="item upComing">
        <a class="thumb" @click="showDetail(data.id)">
            <img class="movieImg" :src="data.images.large" alt="">
        </a>
        <div class="intro">
            <h3>
                <a :href="data.alt">{{data.title}}</a>
                <span class="icon"></span>
            </h3>
            <ul>
                <li class="dt">03月17日</li>
                <li class="dt"><em v-for="(it,index) in data.genres" :key="index"></em></li>
                <li class="dt">美国</li>
                <li class="dt last"><span>{{data.collect_count}}人想看</span></li>
                <a href="">预告片</a>
                <li>
                    <a href="">6家影院有影讯>></a>
                </li>
            </ul>
        </div>
    </li>
</template>

<script>
export default {
  name: "UpComingTag",
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  methods: {
    showDetail(id) {
      this.$store.commit("DETAIL_LOADING", { loading: true });
      this.$router.push({ path: "/moviesDetail", query: { id: id } });
    }
  }
};
</script>

<style lang="less">
@import "../../../style/base.less";
.item.upComing {
  position: relative;
  float: left;
  padding: 20px 0 20px 120px;
  width: 173px;
  height: 140px;
  border-bottom: 1px dashed #ccc;
  .thumb {
    position: absolute;
    left: 0;
    width: 100px;
    height: 140px;
    overflow: hidden;
    img {
      width: 100%;
      height: 140px;
    }
  }
}
</style>
