import Vue from 'vue'
import App from './App.vue'
import { store } from '../src/store/store';

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
