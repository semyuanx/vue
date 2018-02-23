export const getters = {
    title: state => {
        return state.title
    },
    movingList: state => {
        for (let subject of state.movingList.subjects) {
            subject.rating.average = subject.rating.average / 2;
        }
        console.log(state.movingList)
        return state.movingList;
    },
    loadingMoving: state => {
        return state.loadingMoving;
    },
    city: state => {
        return state.city
    },
    loadingDetail: state => {
        return state.loadingDetail;
    },
    id: state => {
        return state.id;
    },
    movieDetail: state => {
        return state.movieDetail;
    }

}