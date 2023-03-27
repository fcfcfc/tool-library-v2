import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import 'scss-flex'
import 'default-passive-events'
import 'normalize.css'
import { Slider, Menu, MenuItem, Submenu } from 'element-ui'

Vue.config.productionTip = false

Vue.use(Slider)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
