import VueRouter from 'vue-router'

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
      component (resolve) {
        require(['views/admin/index'], resolve)
      },
      subRoutes: {
        '/scheduleBuild': {
          name: '课表建设',
          component (resolve) {
            require(['views/admin/scheduleBuild'], resolve)
          }
        }
      }
    }
  })

  return router
}
