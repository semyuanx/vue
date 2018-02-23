<template>
  <div class="moving">
      <div class="tit">
        <h1>电影票-{{city}}</h1>
        <div id="" class="locat">
            <el-dropdown trigger="click" @command="changeCity">
                <span class="el-dropdown-link">[切换城市]</span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="(city,index) in citys" :command="city.name" :key="index">{{city.name}}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
      </div>
      <MoviesTag :data="movingList" class="movieTag"></MoviesTag>
  </div>
</template>
<script>
import MoviesTag from "./common/movieTag";
export default {
  name: "moving",
  data() {
    return {
      citys: [
        {
          name: "北京"
        },
        {
          name: "上海"
        },
        {
          name: "广州"
        },
        {
          name: "深圳"
        },
        {
          name: "杭州"
        }
      ]
    };
  },
  mounted() {
    this.$store.dispatch("getMoving");
  },
  methods: {
    changeCity(command) {
      this.$store.commit("MOVING_LOADING", { loading: true });
      this.$store.commit("MOVIE_CITY", { city: command });
      this.$store.dispatch("getMoving");
    }
  },
  components: {
    MoviesTag
  },
  computed: {
    movingList() {
      return this.$store.getters.movingList;
    },
    city() {
      return this.$store.getters.city;
    }
  }
};
</script>

<style lang="less">
.moving {
  margin-bottom: 20px;
  p {
    color: red;
  }
  .tit {
    width: 950px;
    margin: 0 auto;
    margin-top: 20px;
    h1 {
      display: inline-block;
      width: 126px;
      font-size: 20px;
      color: #000;
    }
    .locat {
      position: relative;
      display: inline-block;
    }
  }
}
</style>
