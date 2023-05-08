import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import INavbar from '@/components/GlobalModel/INavbar.vue';
import IFooter from '@/components/GlobalModel/IFooter.vue';
import IBacktop from '@/components/GlobalModel/IBacktop.vue';

import UserAvatar from '@/components/GlobalModel/UserAvatar.vue';

import HotestPost from '@/components/HotestPost.vue';
import ExamNavbar from '@/components/ExamModel/ExamNavbar.vue';
import GetExamInfo from '@/components/ExamModel/GetExamInfo.vue';

import LoginorRegister from "@/components/LoginorRegister.vue";
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App);

app.use(store);
app.use(router);
app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.component('INavbar', INavbar);
app.component('IFooter',IFooter)
app.component('IBacktop',IBacktop)
app.component('LoginorRegister', LoginorRegister);
app.component('HotestPost',HotestPost)
app.component('ExamNavbar',ExamNavbar)
app.component('GetExamInfo',GetExamInfo)
app.mount('#app');
