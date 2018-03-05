import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
const state = {
    title: 'doubanMovie', // 标题
    movingList: { // 正在上映列表
        subjects: []
    },
    movieDetail: {
        rating: {},
        images: {}
    }, //电影详情
    comment: {}, //即将上映的电影
    pageload: true, // 页面加载的loading
    loadingMoving: true, //正在上映是否显示loading
    city: '杭州',
    loadingDetail: true, // 查看电影详情 loading
    id: '', //电影id
    comment: [], // 影评
    upcomBody: {  // 即将上映的电影列表
        start: 0
    },
    ranking250:{ // 排名250 数据
        subjects: []
    },
    searchText:"" //搜索字段
}

export default {
    state,
    getters,
    actions,
    mutations
}