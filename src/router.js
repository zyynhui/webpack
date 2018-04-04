import VueRouter from 'vue-router'

// 导入路由组件
import Login from './components/login.vue'

const router = new VueRouter({
  routes: [ // 路由规则
    { path: '/', redirect: '/login' },
    { path: '/login',component: Login }
  ]
})



export default router
