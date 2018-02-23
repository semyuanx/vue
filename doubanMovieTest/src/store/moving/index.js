import {getters} from './getters';
import {actions} from './actions';
import {mutations} from './mutations';
const state = {
    title:'doubanMovie', // 标题
    movingList:{ // 正在上映列表
        subjects:[]
    },
    movieDetail:{
        rating: {},
        images: {}
    }, //电影详情
    loadingMoving: true, //正在上映是否显示loading
    city:'杭州',
    loadingDetail:true, // 查看电影详情 loading
    id:'', //电影id
    comment:[], // 影评
}

export default{
    state,
    getters,
    actions,
    mutations
}