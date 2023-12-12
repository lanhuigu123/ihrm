import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../layout/index.vue'
import store from '@/store'
store.dispatch('getUserInfo')
Vue.use(VueRouter)

// export const childRoute = [
//   {
//     path: 'dashboard',
//     name: 'Dashboard',
//     component: () => import('../views/ChildView/dashboard/dashboard.vue'),
//     meta: {
//       icon: 'home',
//       title: '首页'
//     }
//   },
//   {
//     path: 'employees',
//     name: 'Employees',
//     component: () => import('../views/ChildView/employees/employees.vue'),
//     meta: {
//       icon: 'people',
//       title: '员工'
//     }
//   },
//   {
//     path: 'setting',
//     name: 'Setting',
//     component: () => import('../views/ChildView/setting/setting.vue'),
//     meta: {
//       icon: 'settings',
//       title: '公司设置'
//     }
//   },
//   {
//     path: 'permission',
//     name: 'Permission',
//     component: () => import('../views/ChildView/permission/permission.vue'),
//     meta: {
//       icon: 'post',
//       title: '权限管理'
//     }
//   },
//   {
//     path: 'departments',
//     name: 'Departments',
//     component: () => import('../views/ChildView/departments/departments.vue'),
//     meta: {
//       icon: 'sortlight',
//       title: '组织架构'
//     }
//   }
// ]

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: 'dashboard',
    children: [
      {
        path: 'view',
        name: 'View',
        component: () => import('../views/ChildView/view/view.vue')
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('../views/ChildView/dashboard/dashboard.vue'),
        meta: {
          icon: 'home',
          title: '首页'
        }
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

const Dashboard = {
  path: 'dashboard',
  name: 'Dashboard',
  component: () => import('../views/ChildView/dashboard/dashboard.vue'),
  meta: {
    icon: 'home',
    title: '首页'
  }
}

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  setTimeout(() => {
    // 没有处理的初始化动态路由信息
    let initDynamic = store.state.menuList.routeMenu
    console.log(initDynamic)
    let Dynamic = []
    initDynamic.forEach((childRoute) => {
      // 符合规则的一条子路由已经完成
      let item = {
        path: childRoute.code,
        component: () =>
          import(
            /* webpackChunkName: "about" */ `@/views/ChildView/${childRoute.code}/${childRoute.code}.vue`
          ),
        meta: {
          icon: 'settings',
          title: childRoute.name // 这里为什么非要叫title? 因为layout组件中用到了这个组件
        }
      }
      router.addRoute('home', item)
      // 放至空数组,供侧边栏使用
      Dynamic.push(item)
    })
    Dynamic.unshift(Dashboard)
    localStorage.setItem('Routes', JSON.stringify(Dynamic))
  }, 1000)
  next()
})

export default router
