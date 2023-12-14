import { createApp } from 'vue';
import '../src/assets/scss/style.scss';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

library.add(faStar, faStarEmpty);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
