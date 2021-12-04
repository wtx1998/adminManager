import { createRouter,createWebHashHistory} from "vue-router";
import routes from './router'
// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// 不推荐使用next()
// vve3 vue-router4使用返回值 false不进行跳转,也可使用字符串路径,不返回或者返回undefined进行默认跳转
router.beforeEach((to, from) => {
    console.log(to,from);
    // 开启进度条
    NProgress.start()
})
router.afterEach(() => {
    // 关闭进度条
    NProgress.done()
})
export default router