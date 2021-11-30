import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import CScrollbar from 'c-scrollbar';
// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
router.beforeEach((to, from, next) => {
    // 开启进度条
    NProgress.start()
    next()
})
router.afterEach(() => {
    // 关闭进度条
    NProgress.done()
})
const app = createApp(App)
app.config.productionTip = false;
app.use(Antd)
app.use(router)
app.use(CScrollbar)
app.mount('#app')
