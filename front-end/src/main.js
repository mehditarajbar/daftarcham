import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


createApp({
    extends:App,
    beforeCreate(){this.$store.dispatch('setUser')},

})
    .use(store)
    .use(router)
    .use(VueSweetalert2)
    .mount('#app')
