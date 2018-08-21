import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/index'
import DetailAnaPage from '@/components/detail/analysigs'
import DetailCouPage from '@/components/detail/count'
import DetailForPage from '@/components/detail/forecast'
import DetailPubPage from '@/components/detail/publish'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: IndexPage
		},
		{
			path: '/detail',
			children:[
				{
					path:'analysigs',
					component:DetailAnaPage
				},
				{
					path: 'count',
					component: DetailCouPage
				},
				{
					path: 'forecast',
					component: DetailForPage
				},
				{
					path: 'publish',
					component: DetailPubPage
				}
			]
		}
  ]
})
