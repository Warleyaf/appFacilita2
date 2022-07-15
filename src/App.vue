<template>
  <div id="app">
    <Dashboard />
  </div>
</template>

<script>
import './styles/global.styl';

import Dashboard from './pages/Dashboard.vue';

export default {
  name: 'App',
  components: {
    Dashboard
  }
}
</script>
