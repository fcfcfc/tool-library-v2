import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import 'scss-flex'
import 'default-passive-events'
import 'normalize.css'
import { Slider, Menu, MenuItem, Submenu, InputNumber } from 'element-ui'

Vue.config.productionTip = false

Vue.use(Slider)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(InputNumber)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
