import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/Index'
import DetailPage from '../pages/Detail.vue'
import Detail1 from '../pages/detail/detail1'
import Detail2 from '../pages/detail/detail2'
import Detail3 from '../pages/detail/detail3'
import Detail4 from '../pages/detail/detail4'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/detail1',
      children: [
        {
          path: 'detail1',
          component: Detail1
        },
        {
          path: 'detail2',
          component: Detail2
        },
        {
          path: 'detail3',
          component: Detail3
        },
        {
          path: 'detail4',
          component: Detail4
        }
      ]
    }
  ]
})
