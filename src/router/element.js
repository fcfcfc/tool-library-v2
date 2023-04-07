export default [
    {
        path: '/element',
        redirect: '/element/slider',
        component: {
            render: e => e('router-view')
        },
        children: [
            {
                path: 'slider',
                name: 'slider',
                component: () => import('@/views/element/SliderCom.vue')
            }
        ]
    }
]