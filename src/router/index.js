import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const News  = ()=>import('../views/home/News')
const Message = () => import('../views/home/Message')

const routes = [{
  path: '/',
  redirect: '/home'
},
  {
    path: '/home',
    meta: {
      title: '首页'
    },
    component: () => import('../views/home/Home'),
    children: [{
      path: '',
      redirect: '/home/News'
    },
      {
        path: "/home/news",
        meta: {
          title: '新闻'
        },
        component: () => import('../views/home/News') //懒加载方式
      },
      {
        path: '/home/Message',
        meta: {
          title: '消息'
        },
        component: () => import('../views/home/Message')
      }
    ]
  },
  {
    path: '/category',
    component: Category,
    meta: {
      title: '分类'
    },
    children: [{
      path: '',
      redirect: '/category/List'
    },
      {
        path: "/category/List",
        meta: {
          title: '列表'
        },

        component: () => import('../views/category/List'), //懒加载方式
        children: [{
          path: '/category/Details',
          component: () => import('../views/category/Details')
        }]
      }

    ]
  },
  {
    path: '/cart',
    meta: {
      title: '购物车'
    },
    component: Cart
  },
  {
    path: '/profile',
    meta: {
      title: '我的'
    },
    component: Profile
  }

]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
// const router = new Router({
//   routes,
//   mode: 'history'
// })
// router.beforeEach((to,from,next)=>{  //全局前置导肮守卫
//   console.log("当前路由"+from.fullPath)
//   console.log("跳转的路由"+to.fullPath)
//   document.title = to.matched[0].meta.title,
//     next()
// })
// export default router
