
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'Berhasil', component: () => import('pages/Error404.vue') },
      { path: 'register', component: () => import('pages/customer/register.vue') },
      { path: 'katalog', component: () => import('pages/customer/katalog.vue') },
      { path: 'pemesanan', component: () => import('pages/customer/pemesanan.vue') }
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
