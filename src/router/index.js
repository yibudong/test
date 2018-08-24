import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/index'
import DetailAnaPage from '@/components/detail/analysis'
import HelloWorld from '@/components/HelloWorld'
import DetailPage from '@/components/detail'
import DetailCouPage from '@/components/detail/count'
import DetailForPage from '@/components/detail/forecast'
import DetailPubPage from '@/components/detail/publish'
import OrderListPage from '@/components/orderList'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: IndexPage
	},
	{
		path: '/orderList',
		component: OrderListPage
	},
	{
		path:'/HelloWorld',
		component:HelloWorld
	},
	{
		path:'/detail',
		component:DetailPage,
		redirect:'/detail/analysis',
		children:[
			{
				path:'analysis',
				component:DetailAnaPage
			},
			{
				path:'count',
				component:DetailCouPage
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
