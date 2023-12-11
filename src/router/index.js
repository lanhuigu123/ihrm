import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../layout/index.vue'
import { getToken } from '@/utils/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('../views/ChildView/dashboard/dashboard.vue')
      },
      {
        path: 'departments',
        name: 'Departments',
        component: () =>
          import('../views/ChildView/departments/departments.vue')
      },
      {
        path: 'employees',
        name: 'Employees',
        component: () => import('../views/ChildView/employees/employees.vue')
      },
      {
        path: 'setting',
        name: 'Setting',
        component: () => import('../views/ChildView/setting/setting.vue')
      },
      {
        path: 'view',
        name: 'View',
        component: () => import('../views/ChildView/view/view.vue')
      },
      {
        path: 'permission',
        name: 'Permission',
        component: () => import('../views/ChildView/permission/permission.vue')
      }
    ] // 重定向:重新指向其它path,会改变网址
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  let token = getToken()
  if (token && token !== null) {
    if (to.path == '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (to.path == '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
