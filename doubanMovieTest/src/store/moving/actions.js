import axios from 'axios';
export const actions = {
    /**
     * 
     * @param {提交,store} param0 
     * 获取所有电影
     */
    getMoving({commit, state}){
        axios.get('/api/movie/in_theaters',{
            params: {
                city: state.city
            }
        }).then(res=>{
            commit('MOVING_LIST',{list:res.data});
            commit('MOVING_LOADING',{loading: false})
        })
    },
    /**
     *  获得电影详情
     */
    getMovieDetail({commit, state}){
        axios.get(`/api/movie/subject/${state.id}`).then(res => {
            commit("DETAIL_LOADING",{loading:false});
            commit("MOVING_DETAIL",{detail:res.data})
            
        })
    },
    /**
     * 获得电影短评
     * @param {commit} 
     * @param state
     * 
     */
    getMovieComment({commit,state}){
        axios.get(`/api/movie/subject/${state.id}/comments`).then(res=>{
            commit('MOVIE_COMMENT',{comment:res});
        })
    },
    /**
     * 获得即将上映的电影列表
     */
    getUpcoming({commit,state}){
        axios.get('/api/movie/coming_soon',{city: state.city, start:state.upcomBody.start+1}).then(res=>{
            console.log(res);
            if(state.upcomBody.subjects && state.upcomBody.subjects){
                res.data.subjects = state.upcomBody.subjects.concat(res.data.subjects);
            }
            commit("UP_COMBODY",{upcomBody: res.data});
        })
    },
    /**
     * 获得排名 250
     */
    loadingtop250({commit, state}){
        axios.get('/api/movie/top250',{start:'1',count:10}).then(res=>{
           commit("LOAD_TOP250",{ranking250:res.data})
        })
    },
    /**
     * 获取搜索列表
     */
    getSearchList({commit, state}){
        axios.get('/api/movie/search',{q:state.searchText}).then(res=>{
            console.log(res);
        })
    }
}