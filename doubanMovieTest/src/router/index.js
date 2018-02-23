import Vue from 'vue'
import Router from 'vue-router'
import Moving from '@/components/moving';
import Upcoming from '@/components/upcoming';
import Top250 from '@/components/top250';
import MoviesDetail from '@/components/common/moviesDetail';
import Search from '@/components/common/searchList';
Vue.use(Router)

var routers = [
    {
      path: '/',
      name: 'Moving',
      component: Moving
    },
    {
      path: '/upcoming',
      name: 'upcoming',
      component: Upcoming
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/moviesDetail',
      name: 'moviesDetail',
      component: MoviesDetail
    }
  ]
export default new Router({
  mode:'history',
  routes: routers
})
