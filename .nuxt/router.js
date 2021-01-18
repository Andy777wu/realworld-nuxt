import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8c1da4c8 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _0cb51bd1 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _ebb2b292 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _743ea577 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _05e1abc4 = () => interopDefault(import('..\\pages\\setting' /* webpackChunkName: "" */))
const _0cb394fc = () => interopDefault(import('..\\pages\\edit' /* webpackChunkName: "" */))
const _5b08e8c4 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _8c1da4c8,
    children: [{
      path: "",
      component: _0cb51bd1,
      name: "home"
    }, {
      path: "/login",
      component: _ebb2b292,
      name: "login"
    }, {
      path: "/register",
      component: _ebb2b292,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _743ea577,
      name: "profile"
    }, {
      path: "/setting",
      component: _05e1abc4,
      name: "setting"
    }, {
      path: "/edit",
      component: _0cb394fc,
      name: "edit"
    }, {
      path: "/article/:slug",
      component: _5b08e8c4,
      name: "article"
    }]
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
