import router from './router'
import store from '@/store/index'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // 验权

const whiteList = ['/login','/forget']; // 不重定向白名单

router.beforeEach(async (to: any, from: any, next: any) => {
    NProgress.start()
    if (getToken()) {
        store.dispatch('SetToken', getToken());
        if (to.path === '/login') {
            next({ path: '/' })
            NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
        } else {
            if(store.getters.getToken) {
                next()
            }else{
                try {
                    await store.dispatch('GetInfo', getToken());
                    next();
                }
                catch (err) {
                    next('/login');
                    store.dispatch('FedLogOut')
                }
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login')
            NProgress.done()
        }
    }
    // if(to.meta.keepalive) {
    //     store.commit('SET_INCLUDELIST', to.name)
    // }
    // next();
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
