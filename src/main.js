import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import { pinia } from './pinia';
import ToastService from 'primevue/toastservice';

import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

const app = createApp(App);
app.use(pinia);
app.use(PrimeVue, { unstyled: false });
app.use(ToastService);
app.mount('#app');
