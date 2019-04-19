import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Layout from '@/views/layout/Layout.vue'

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'homes',
      redirect: '/systen/home'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/systen',
      component: Layout,
      redirect: '/home',
      name: 'Dashboard',
      meta: { title: '首页', icon: 'home' },
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/home/home.vue'),
          meta: { title: '首页', icon: 'home' }
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('@/views/home/about.vue'),
          meta: { title: '关于', icon: 'about' }
        },
      ]
    },
  ],
});
