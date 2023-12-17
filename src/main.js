import { createApp } from 'vue';
import '../src/assets/scss/style.scss';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { VueWindowSizePlugin } from 'vue-window-size/plugin';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

library.add(faStar, faStarEmpty);

createApp(App).use(VueWindowSizePlugin).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
