import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ExcuteRoute from './utils/route';
import store, { setupLogin } from './store';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import * as Icons from "@ant-design/icons-vue";

const app = createApp(App)
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key])
})
app.config.productionTip = false;
app.use(Antd)
app.use(router)
app.use(store)
app.mount('#app')
ExcuteRoute()


// 初始化登录
setupLogin();
