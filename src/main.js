import Vue from 'vue'
import App from './App.vue'
import { store } from '../src/store/store';
import VueRouter from 'vue-router';
import { routes } from '../src/routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
