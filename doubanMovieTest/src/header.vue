<template>
    <div id="header" class="douban-header">
        <div class="douban-header-container">
            <div class="douban-search">
                <a class="title">豆瓣电影</a>
                <div class="search-container">
                    <el-input placeholder="电影、影人、影院、连续剧" v-model="content">
                        <el-button slot="append" icon="el-icon-search" @click="searchMovie">
                        </el-button>
                    </el-input>
                </div>
                <img class="douban-title-img" src='https://img3.doubanio.com/f/movie/9f89b66fd864158832aa65002525bb34fb029a56/pics/movie/events/annual2016/ad_web.png' />
            </div>
        </div>
        <div class="douban-bar">
            <ul>
                <li v-for="(bar,key) in barList" :key="key" @click="choiseUrl(bar.url)">
                    <router-link :to="bar.url" :class="url === bar.url ? 'active' : ''">
                        {{bar.title}}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                content:'',
                url:'/',
                barList:[{
                    title:'正在热映',
                    url:'/'
                },{
                    title:'即将上映',
                    url:'/upcoming'
                },{
                    title:'Top250',
                    url:'/top250'
                }]
            }
        },
        mounted(){
            this.url = this.$router.currentRoute.fullPath;
        },
        methods:{
            searchMovie(){
                
                this.$router.push({path:'/search',query:{searchText:this.content}})
            },
            choiseUrl(url){
                this.url = url;
            }
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../style/color.less";
  .douban-header{
      background: @mainColor;
      width: 100%;
      height: 114px;
      .douban-bar{
          width: 950px;
          margin: 0 auto;
          height: 20px;
          ul{
              li{
                  list-style: none;
                  float: left;
                  line-height: 20px;
                  cursor: pointer;
                  a{
                      display: inline-block;
                      padding: 8px;
                      font-size: 12px;
                      color: #aaa;
                      text-decoration: none;
                  }
                  a.active{
                      color: @doubanColor;
                  }
              }
          }
      }
      .douban-header-container{
      width: 100%;
      margin: 0 auto;
      border-bottom: 1px solid @line;
      .douban-search{
        width: 950px;
        margin: 0 auto;
        height: 75px;
        .title{
          color: @doubanColor;
          font-size: 30px;
          font-weight: bold;
          line-height: 75px;
        }
        .search-container{
          display: inline-block;
          line-height: 75px;
          vertical-align: top;
          width: 500px;
          margin-left: 50px;
          input{
            height: 34px;
          }
        }
        .douban-title-img{
          width: 175px;
          height: 90px;
          float: right;
          margin-top: 10px;
        }
      }
    }
  
  }  
</style>