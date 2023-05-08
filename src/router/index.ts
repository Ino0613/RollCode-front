import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuestionsView from '../views/QuestionsView.vue'
import InterView from '../views/InterView.vue'
import ExamView from '@/views/ExamView.vue'
import Recommendations from '../components/HomeModel/Recommendations.vue'
import LoginorRegister from '../components/LoginorRegister.vue'
import PostDynamicVue from '@/components/PostModel/PostDynamic.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      { path: '', component: Recommendations, name: 'recommendations' },
      { path: 'home', component: HomeView, name: 'home' },
      { path: 'about', component: InterView, name: 'about' }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/questions',
    name: 'questions',
    component: QuestionsView
  },
  {
    path: '/interview',
    name: 'interview',
    component: InterView
  },
  {
    path: '/LoginorRegister',
    name: 'LoginorRegister',
    component: LoginorRegister
  },
  {
    path: '/exam',
    name: 'Exam',
    component: ExamView
  },
  {
    path: '/exam/:type',
    name: 'exam',
    component: ExamView
  },
  {
    path: '/postadd',
    name: 'postAdd',
    component: PostDynamicVue
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
