const routes = [
    {
      path: '/',
      name: 'login',
      component: () => import('../view/login/login.vue'),    
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../view/home/home.vue'),
    }   
  ]
  
  export default routes