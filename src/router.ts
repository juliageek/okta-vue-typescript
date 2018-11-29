import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Login from './components/Login.vue';
import Auth from '@okta/okta-vue';
// import { Getter } from 'vuex-class'
import { store } from './store';

Vue.use(Router);
Vue.use(Auth, {
  issuer: process.env.VUE_APP_OKTA_ISSUER,
  client_id: process.env.VUE_APP_OKTA_CLIENT_ID,
  redirect_uri: process.env.VUE_APP_OKTA_REDIRECT_URI,
  scope: process.env.VUE_APP_OKTA_SCOPES
});

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/auth',
      name: 'login',
      component: Login
    },
    {
      path: '/implicit/callback',
      component: Auth.handleCallback()
    }
  ],
});

/* router.beforeResolve(async (from, to, next) => {
  // Get the current user
  await store.dispatch('loadUser');
  const user = store.getters.authUser;

  console.log('user is:::::::::::', user);

  // Check required auth and permissions
  const requiredAccess = from.matched.map(record => record.meta.requiresAuth).filter(access => access !== undefined)
  const requiredAuth = requiredAccess.length > 0;

  if (requiredAuth) {
    if (!user) {
      return next({ path: '/auth/login' })
    } else {
      const hasAccess = user.access.includes(from.meta.app);
      // Forbidden, go to root
      if (!hasAccess) {
        return next({ path: '/forbidden' })
      }
    }
  }
  return next()
}); */

export default router;
