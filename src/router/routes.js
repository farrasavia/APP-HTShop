
const requireAuth = (to, from, next) => {

  let getRole= localStorage.getItem('role')
  if (getRole === null) { 
      alert('Silahkan Untuk Login Untuk Melihat Lebih Banyak Melihat Produk')
    next({
      
      path: '/'
      
    })
  } 
   else {
    next()
  }
}

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
    beforeEnter: requireAuth,
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
       { path:'', component: () => import('pages/admin/dashboardAdmin.vue')},
       { path: 'tabelbarang', component: () => import('pages/admin/tabelbarang.vue')},
       { path: 'input', component: () => import('pages/admin/input.vue')},
       { path: 'pemesanan', component: () => import('pages/admin/pemesanan.vue')}
     ]
  },
  {
  path: '/admin',
  component: () => import('pages/admin/login.vue')
  },
  {
    path: '/owner',
    component: () => import('pages/owner/login.vue'),
  },
  {
  path: '/upload',
  component: () => import('pages/uploader/upload.vue')
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
