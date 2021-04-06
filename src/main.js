import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookSquare, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faFacebookSquare, faTwitter, faYoutube);

// createApp.component('font-awesome-icon', FontAwesomeIcon)

createApp(App)
.use(router)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
