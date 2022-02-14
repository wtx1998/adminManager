const routes = [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/login.vue'),    
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home/home.vue')
    },
    {
      path:'/:patchMatch(.*)*',// 未在路由中找到对应的页面
      component:()=>import('../views/notFound/notFound.vue')
    }  
  ]
  
  export default routes