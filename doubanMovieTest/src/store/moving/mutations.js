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
    }
}