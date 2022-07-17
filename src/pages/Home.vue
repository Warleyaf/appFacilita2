<template>
<div id="main">
   <LogoLeft />
   <Login />
</div>
   
</template>

<script>
   import LogoLeft from '../components/logoleft/LogoLeft.vue';
   import Login from '../components/login/Login.vue'
   export default {
      name: 'Home',
      components: {
         LogoLeft,
         Login,
      }
   }
</script>
