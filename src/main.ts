import Vue from 'vue';
// import Component from "vue-class-component";
import App from './App.vue';
import router from './router';
import store from '@/store/index';

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '@/styles/index.styl' // global css
import '@/icons'
import '@/permission'
import api from '@/api/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

Vue.prototype.$api = api

// 不起作用
// Component.registerHooks([
//   "beforeRouteEnter",
//   "beforeRouteLeave",
//   "beforeRouteUpdate"
// ]);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
