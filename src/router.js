import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
import Dashboard from './pages/Dashboard.vue';

Vue.use(Router)

export default new Router({
   mode: 'history',
   routes: [
      {
         path: '/',
         name: 'home',
         component: Home
      },
      {
         path: '/dashboard',
         name: 'dashboard',
         component: Dashboard
      }
   ]
})