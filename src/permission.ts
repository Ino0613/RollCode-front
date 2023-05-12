
import { ref, reactive, nextTick, watch, unref, computed } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { ElForm, ElFormItem, ElInput, ElButton, ElMessage } from 'element-plus';
import Schema from 'async-validator';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import router from './router'

const store = useStore();


router.beforeEach(async (to, from, next) => {
    const hasToken = store.getters.token
    // if (hasToken) {
    //     if (to.path === '/login') {
    //         next({ path: '/' })
    //     }
    //     else {
    //         const hasGetUserInfo = store.getters.name
    //         if (hasGetUserInfo) {
    //             //信息拿到后，用户请求哪就跳转哪
    //             next()
    //         } else {
    //             try {
    //                 // 如果有令牌，但是没有用户信息，证明用户是第一次登录，通过Vuex设置用户信息
    //                 await store.dispatch('user/getInfo')
    //                 //设置好了之后，依然可以请求哪就跳转哪
    //                 next()
    //             } catch (error) {
    //                 // 如果出错了，把令牌去掉，并让用户重新去到登录页面
    //                 await store.dispatch('user/resetToken')
    //                 ElMessage.error(error || 'Has Error')
    //                 next(`/login?redirect=${to.path}`)
    //                 //关闭进度条
    //             }
    //         }
    //     }
    // }
})