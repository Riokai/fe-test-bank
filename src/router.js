import VueRouter from 'vue-router'
import {isLogin} from 'services/auth'
import Storage from 'services/storage'

export default Vue => {
  Vue.use(VueRouter)

  let Foo = Vue.extend({
    template: '<p>This is foo!</p>'
  })

  const router = new VueRouter({
    hashbang: false,
    history: true,
    mode: 'html5'
  })

  router.map({
    '/': {
      name: 'foo',
      component: Foo
    },
    '/login': {
      name: '登录',
      component (resolve) {
        require(['views/login'], resolve)
        // require(['components/Hello'], resolve)
      }
    },
    '/admin': {
      name: '首页',
      auth: 1,
      component (resolve) {
        require(['views/admin/index'], resolve)
      },
      subRoutes: {
        '/scheduleBuild': {
          name: '课表建设',
          component (resolve) {
            require(['views/admin/scheduleBuild'], resolve)
          }
          // component: Vue.component('dsfd', require('views/admin/scheduleBuild'))
        },
        '/academyInfo': {
          name: '学院信息',
          component (resolve) {
            require(['views/admin/academyInfo'], resolve)
          }
        },
        '/majorInfo': {
          name: '专业信息',
          component (resolve) {
            require(['views/admin/majorInfo'], resolve)
          }
        },
        '/teacherInfo': {
          name: '教师信息',
          component (resolve) {
            require(['views/admin/teacherInfo'], resolve)
          }
        },
        '/classInfo': {
          name: '专业信息',
          component (resolve) {
            require(['views/admin/classInfo'], resolve)
          }
        },
        '/studentInfo': {
          name: '学生信息',
          component (resolve) {
            require(['views/admin/studentInfo'], resolve)
          }
        },
        '/courseInfo': {
          name: '课程信息',
          component (resolve) {
            require(['views/admin/courseInfo'], resolve)
          }
        },
        '/scheduleInfo': {
          name: '课表信息',
          component (resolve) {
            require(['views/admin/scheduleInfo'], resolve)
          }
        },
        '/constructorInfo': {
          name: '建设者信息',
          component (resolve) {
            require(['views/admin/constructorInfo'], resolve)
          }
        }
      }
    },
    '/student': {
      name: '首页',
      auth: 3,
      component (resolve) {
        require(['views/student/index'], resolve)
      }
    }
  })

  function goLogin () {
    router.go({path: '/login'})
  }

  router.redirect({
    '/': '/login'
  })

  router.beforeEach(({to, next}) => {
    // console.log(to)
    let token = Vue.http.headers.common['Token']

    if (to.auth) {
      if (isLogin() && Storage.getObj('role').role_id === to.auth) {
        if (!token) {
          Vue.http.headers.common['Token'] = Storage.get('token')
        }

        next()
      } else {
        goLogin()
      }
    } else {
      next()
    }
  })

  return router
}
