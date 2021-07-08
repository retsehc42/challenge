import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

 
 

import  TNav  from '@/components/TNav.vue'
Vue.component('t-nav', TNav)

import  TButton  from '@/components/TButton.vue'
Vue.component('t-button', TButton)

import Tbc  from '@/components/Tbc.vue'
Vue.component('tbc', Tbc)

import Photo  from '@/components/Photo.vue'
Vue.component('photo', Photo)

import Suggested  from '@/components/Suggested.vue'
Vue.component('suggested', Suggested )

import Newsfeed  from '@/components/Newsfeed.vue'
Vue.component('newsfeed', Newsfeed )

import Posts  from '@/components/Posts.vue'
Vue.component('posts', Posts)

// import Drawer  from '@/components/Drawer.vue'
// Vue.component('drawer', Drawer)

import VModal from 'vue-js-modal/dist/index.nocss.js'
import 'vue-js-modal/dist/styles.css'
Vue.use(VModal)

import VueCarousel from 'vue-carousel'; 
Vue.use(VueCarousel);

//Vue toast Notification
import VueToast from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';
Vue.use(VueToast);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
