<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import './styles/global.styl';

import Dashboard from './pages/Dashboard.vue';
import Home from './pages/Home.vue';

export default {
  name: 'App',
  components: {
    Dashboard,
    Home
  }
}
</script>
