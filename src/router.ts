import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Layout from '@/views/layout/Layout.vue'

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      // 首页重定向
    { path: '/login', component: () => import('@/views/login/index'), meta: {hidden: true} },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      name: 'Dashboard',
      meta: { hidden: true },
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/home/home.vue'),
          meta: { title: '首页', icon: 'home', hidden: true }
        }
      ]
    },
    {
      path: '/project',
      component: Layout,
      redirect: '/project/list',
      name: 'project',
      meta: { title: '项目管理', icon: 'system', hidden: false },
      children: [
        {
          path: 'list',
          name: 'list',
          component: () => import('@/views/project/list.vue'),
          meta: { title: '项目列表', icon: 'certification', hidden: false }
        },
        {
          path: 'doctors',
          name: 'doctors',
          component: () => import('@/views/project/doctors.vue'),
          meta: { title: '医生列表', icon: 'doctor', hidden: false }
        },
      ]
    }
  ],
});
