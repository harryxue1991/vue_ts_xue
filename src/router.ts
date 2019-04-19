import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Layout from '@/views/layout/Layout.vue'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      name: 'Dashboard',
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/home/home.vue'),
          meta: { title: '首页', icon: 'home' }
        }
      ]
    },
  ],
});
