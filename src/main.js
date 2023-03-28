import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { createPinia, PiniaVuePlugin } from 'pinia'
import piniaPersistence from 'pinia-plugin-persistedstate'
import 'scss-flex'
import 'default-passive-events'
import 'normalize.css'
import { Slider, Menu, MenuItem, Submenu, InputNumber } from 'element-ui'

const pinia = createPinia()

pinia.use(piniaPersistence)

Vue.config.productionTip = false

Vue.use(PiniaVuePlugin)
Vue.use(Slider)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(InputNumber)

new Vue({
    router,
    pinia,
    render: h => h(App)
}).$mount('#app')
