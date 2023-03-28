export default [
    {
        path: '/testPinia',
        name: 'testPinia',
        redirect: '/testPinia/piniaPage1',
        component: () => import('@/views/RouterView.vue'),
        children: [
            {
                path: 'piniaPage1',
                name: 'piniaPage1',
                component: () => import('@/views/testPinia/PiniaPage1.vue')
            },
            {
                path: 'piniaPage2',
                name: 'piniaPage2',
                component: () => import('@/views/testPinia/PiniaPage2.vue')
            }
        ]
    }
]