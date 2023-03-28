export default [
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