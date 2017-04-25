import Vue from 'vue'
import Layout from './components/Layout'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource);

new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
