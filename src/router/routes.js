
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'Berhasil', component: () => import('pages/Error404.vue') }

    ]
  },
  {
    path: '/admin',
    component: () => import('pages/admin/login.vue'),
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
