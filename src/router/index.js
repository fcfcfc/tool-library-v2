import Vue from 'vue'
import VueRouter from 'vue-router'
import element from '@/router/element';
import testPinia from '@/router/testPinia';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeView.vue')
    }
].concat(element, testPinia)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
