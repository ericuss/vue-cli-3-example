import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store/store';

// Views
import Home from './views/Home.vue';
import About from './views/About.vue';
import Login from './views/Login.vue';
import Users from './views/Users.vue';

Vue.use(Router);


function requireAuth(to, from, next) {
  if (!store.state.login.isLogued) {
    next({
      path: '/login',
      query: { redirect: to.path },
    });
  } else {
    next();
  }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: requireAuth,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
      beforeEnter: requireAuth,
    },
  ],
});
