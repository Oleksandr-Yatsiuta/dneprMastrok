import Vue from 'vue';
import VueModal from '@kouts/vue-modal'
import '@kouts/vue-modal/dist/vue-modal.css'
import VueTheMask from 'vue-the-mask'
import SweetModal from 'sweet-modal-vue/src/plugin.js'
import App from './App.vue';

// font awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';

// import necessary icons from font-awesome
import {
    faArrowUp,
    faLaptop,
    faLock,
    faLockOpen,
    faClock,
    faTruck,
    faCheckCircle,
    faUserCircle,
    faMobile,
    faSortNumericDown,
    faIdCard,
    faMoneyBillAlt,
    faMapMarkerAlt,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons';
// add them to the library
library.add(
    faArrowUp,
    faLaptop,
    faLock,
    faLockOpen,
    faClock,
    faTruck,
    faCheckCircle,
    faUserCircle,
    faMobile,
    faSortNumericDown,
    faIdCard,
    faMoneyBillAlt,
    faMapMarkerAlt,
    faEnvelope,
)

Vue.use(SweetModal)

Vue.component('Modal', VueModal)

Vue.use(VueTheMask)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
new Vue({
    render: h => h(App),
}).$mount('#app')