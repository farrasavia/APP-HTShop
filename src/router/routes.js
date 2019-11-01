
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'register', component: () => import('pages/customer/register.vue') },
      { path: 'err', component: () => import('pages/Error404.vue') }
    ]
  },
  {
    path: '/customer',
    
    component:()=> import('layouts/CustomerLayout.vue'),
    children:[
    
    { path: 'katalog', component: () => import('pages/customer/katalog.vue') },
    { path: 'kpp', component: () => import('pages/customer/kpp.vue') },
    { path: 'pisau', component: () => import('pages/customer/pisau.vue') },
    { path: 'rice', component: () => import('pages/customer/rice.vue') },
    { path: 'blender', component: () => import('pages/customer/blender.vue') },
    { path: 'kulkas', component: () => import('pages/customer/kulkas.vue') },
    { path: 'pemesanan', component: () => import('pages/customer/pemesanan.vue') },
      { path: 'akhir', component: () => import('pages/customer/akhir.vue') }
    ]
  },
  {
    path: '/dashboard',
     component: () => import('layouts/AdminLayout.vue'),
     children:[
       {
         path:'', component: () => import('pages/admin/dashboardAdmin.vue'),
       }
     ]
  },
  {
  path: '/admin',
  component: () => import('pages/admin/login.vue')
  },
  {
    path: '/owner',
    component: () => import('pages/owner/login.vue'),
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
