
export default [
  { path: '/', component: () => import('pages/Home') },
  { path: '/About', component: () => import('pages/About') },
  { path: '/Contact', component: () => import('pages/Contact') },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
