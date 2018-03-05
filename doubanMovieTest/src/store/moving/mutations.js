import * as types from './types';
export const mutations = {
    [types.MOVING_TITLE](state, { title }) {
        state.title = title;
    },
    [types.MOVING_LIST](state, { list }) {
        state.movingList = list;
    },
    [types.MOVING_LOADING](state, { loading }) {
        state.loadingMoving = loading;
    },
    [types.MOVIE_CITY](state, { city }) {
        state.city = city;
    },
    [types.DETAIL_LOADING](state, { loading }) {
        state.loadingDetail = loading
    },
    [types.MOVING_DETAIL](state, { detail }) {
        state.movieDetail = detail;
    },
    [types.MOVING_ID](state, { id }) {
        state.id = id;
    },
    [types.MOVIE_COMMENT](state,{comment}){
        state.comment = comment;
    },
    [types.PAGE_LOAD](state,{pageload}){
        state.pageload = pageload
    },
    [types.UP_COMBODY](state,{upcomBody}){
        state.upcomBody = upcomBody;
    },
    [types.LOAD_TOP250](state,{ranking250}){
        state.ranking250 = ranking250;
    },
    [types.SEARCH_TEXT](state,{searchText}){
        state.searchText = searchText;
    }
}