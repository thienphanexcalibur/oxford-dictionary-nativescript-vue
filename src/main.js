import Vue from 'nativescript-vue';
import Vuex from 'vuex'
import store from './store'
import Entry from './components/Entry';

Vue.use(Vuex)

const vueStore = new Vuex.Store({
  ...store
})


import './styles.scss';

// Uncomment the following to see NativeScript-Vue output logs
Vue.config.silent = false;

new Vue({
  store: vueStore,
  render: h => h(Entry),
}).$start();
