import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const AGVManage = r => require.ensure([], () => r(require('@/page/AGVManage')), 'AGVManage');
const callManage = r => require.ensure([], () => r(require('@/page/callManage')), 'callManage');
const lineManage = r => require.ensure([], () => r(require('@/page/lineManage')), 'lineManage');
const sitegroupManage = r => require.ensure([], () => r(require('@/page/sitegroupManage')), 'sitegroupManage');
const systemManage = r => require.ensure([], () => r(require('@/page/systemManage')), 'systemManage');
const userManage = r => require.ensure([], () => r(require('@/page/userManage')), 'userManage');
// const objectManage = r => require.ensure([], () => r(require('@/page/objectManage')), 'objectManage');
// const classManage = r => require.ensure([], () => r(require('@/page/classManage')), 'shopList');
// const driveManage = r => require.ensure([], () => r(require('@/page/driveManage')), 'foodList');

const routes = [
	{
		path: '/',
		component: login
	},
	{
		path: '/manage',
		component: manage,
		name: '',
		children: [{
			path: '',
			component: home,
			meta: [],
		},{
			path: '/AGVManage',
			component: AGVManage,
			meta: ['AGV','AGV管理'],
		},{
			path:'/callManage',
			component:callManage,
			meta:['AGV','呼叫站管理']
		},{
			path:'/lineManage',
			component:lineManage,
			meta:['AGV','线路管理']
		},{
			path:'/sitegroupManage',
			component:sitegroupManage,
			meta:['AGV','站点群管理']
		},{
			path:'/systemManage',
			component:systemManage,
			meta:['AGV','系统配置']
		},{
			path:'/userManage',
			component:userManage,
			meta:['AGV','用户']
		}
		
		// {
		// 	path: '/objectManage',
		// 	component: objectManage,
		// 	meta: ['设备管理', '对象管理'],
		// },{
		// 	path: '/classManage',
		// 	component: classManage,
		// 	meta: ['设备管理', '类管理'],
		// },{
		// 	path: '/driveManage',
		// 	component: driveManage,
		// 	meta: ['设备管理', '驱动管理'],
		// }
		
	]
	}
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
