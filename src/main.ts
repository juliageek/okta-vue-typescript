import { Vue } from 'vue-property-decorator'
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import { store } from './store';
import './assets/scss/screen.scss'

Vue.use(Vuetify);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
