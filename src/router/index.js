import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeView.vue')
    },
    {
        path: '/element',
        name: 'element',
        redirect: '/element/slider',
        component: () => import('@/views/RouterView.vue'),
        children: [
            {
                path: 'slider',
                name: 'slider',
                component: () => import('@/views/element/SliderCom.vue')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
