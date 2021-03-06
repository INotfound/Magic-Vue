import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const index = () => import('./views/index.vue');
const editor = () => import('./views/editor.vue')
const details = () => import('./views/details.vue');
const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    meta:{keepAlive:true}
  },
  {
    path: '/article/details',
    name: 'details',
    component: details
  },
  {
    path: '/console/editor',
    name: 'editor',
    component: editor
  }
]

export default new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

