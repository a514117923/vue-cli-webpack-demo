import router  from './router'

const whiteList = ['/login', '/login/forget'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

router.afterEach(() => {
})
