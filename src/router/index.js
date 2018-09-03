import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let router = new Router({
  routes: [
    { path: '/', redirect: '/index/mine'},
    {
      path: '/login',
      name: 'login',
      component: (resolve) => require(['@/views/login'], resolve),
      meta: {
        title: '个人中心登录'
      }
    },
    {
      path: '/index',
      name: 'index',
      component: (resolve) => require(['@/views/index'], resolve),
      meta: {
        title: '首页'
      },
      children: [
        {
          path: 'mine',
          name: 'mine',
          component: (resolve) => require(['@/views/mine/index'], resolve),
          meta: {
            title: '我的'
          }
        },
        {
          path: 'find',
          name: 'find',
          component: (resolve) => require(['@/views/find/index'], resolve),
          meta: {
            title: '发现'
          }
        },
        {
          path: 'course',
          name: 'course',
          component: (resolve) => require(['@/views/course/index'], resolve),
          meta: {
            title: '课程'
          }
        }
      ]
    },
    {
      path: '/index/mine/info',
      name: 'mineInfo',
      component: (resolve) => require(['@/views/mine/info'], resolve),
      meta: {
        title: '个人信息'
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to)
  document.title = to.meta.title
  next()
})
export default router