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
    
    getMovieComment({commit,state}){
        axios.get(`/api/movie/subject/${state.id}/comments`).then(res=>{
            commit('MOVIE_COMMENT',{comment:res});
        })
    }
}