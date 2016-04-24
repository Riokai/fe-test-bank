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
      component (resolve) {
        require(['views/Login'], resolve)
        // require(['components/Hello'], resolve)
      }
    }
  })

  return router
}
