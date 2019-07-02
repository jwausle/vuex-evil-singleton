import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';
Vue.use(Vuetify, {
  iconfont: 'md',
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
