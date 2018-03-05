<template>
  <div class="grid-950 clearfix">
      <article class="container">
          <div class="tit">
              <h1>{{city}}-影讯</h1>
              <div id="" class="locat">
                  <el-dropdown trigger="click" @command="changeCity">
                      <a class="el-dropdown-link">[切换城市]</a>
                      <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item v-for="(city,index) in citys" :command="city.name" :key="index">
                              {{city.name}}
                          </el-dropdown-item>
                      </el-dropdown-menu>
                  </el-dropdown>
              </div>
          </div>
          <div class="two-list" v-loading="false">
            <ul class="clearfix">
                 <UpComingTag v-for="(item,index) in movingList.subjects" :key="index" :data="item" class="movieTag"></UpComingTag>
            </ul>
            <div class="load-more">
              <el-button type="text" @click="moredata()"></el-button>
            </div>
          </div>
         
      </article>
  </div>
</template>
<script>
import UpComingTag from './common/upcomingTag.vue';
export default {
  name: "upComing",
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
  mounted(){
    this.$store.dispatch("getUpcoming");
  },
  methods:{
      changeCity(command){
          this.$store.commit('MOVIE_CITY', {city: command})
      },
      moredata(){

      }
  },
  computed: {
    city() {
      return this.$store.getters.city;
    },
    movingList(){
      console.log(this.$store.getters.upcomBody)
      return this.$store.getters.upcomBody;
    }
  },
  components:{
    UpComingTag
  }
};
</script>

<style lang="less">
@import "../../style/base.less";
.container {
  float: left;
  width: 590px;
}
.right-side {
  float: right;
  width: 310px;
}
.two-list {
  min-height: 500px;
}
.tit {
  margin-top: 20px;
  h1 {
    display: inline-block;
    font-size: 20px;
    color: #000;
  }
  .locat {
    position: relative;
    display: inline-block;
  }
}
.locat {
  .cities-list {
    position: absolute;
    left: 0;
    top: 18px;
    padding: 10px;
    background: #fff;
    z-index: 999;
    border: 1px solid #ccc;
    span {
      display: block;
    }
  }
}
.tab-hd {
  vertical-align: bottom;
  li {
    margin: 0 5px;
    float: left;
  }
  .on {
    background-color: #69c;
    color: #fff;
    padding: 0 10px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
  }
}
.load-more {
  text-align: center;
}
</style>
