// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueResource from 'vue-resource'
import secondcomponent from './components/secondcomponent.vue'

Vue.config.debug = true
Vue.use(VueRouter)
Vue.use(VueResource)

const Firstcomponent = {template: '<div><h4>First页面</h4>'}
const router = new VueRouter({
  mode: 'history',
  name: '__dirname',
  routes: [{
    path: '/first',
    component: Firstcomponent
  },
  {
    path: '/second',
    component: secondcomponent
  }]
})

new Vue({
  reouter: router,
  render: h => h(App)
}).$mount('#app')
