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
      component: () => import('../views/home/home.vue'),
      children:[
        {
            path:'main',
            component:()=>import("../views/Main/Main.vue")
        }
      ]
    },
    {
      path:'/:patchMatch(.*)',
      component:()=>import('../views/notFound/notFound.vue')
    }  
  ]
  
  export default routes