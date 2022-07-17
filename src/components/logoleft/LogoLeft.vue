<template>
   <div class="logo-left">
      <div>
         <img src="../../assets/logofacilita.svg" alt="" >
         <span class="titulo-logo"><strong>FACILITA</strong>TASKS</span>
         <p>Gestão de tarefas pessoais</p>
      </div>
      
   </div>
</template>

<script>
   export default {
      name: 'LogoLeft',
   }
</script>

<style lang="stylus">
   #main 
      background-color: #ffffff;
      margin: 0 auto;
      display: flex;


      .logo-left 
         width: 39rem;
         height: 100vh;
         background-color: #2693FF;
         color: #FFFFFF;
         display: flex;
         justify-content: center;
         align-items: center;


         .titulo-logo
            display: block;
            font-size: 3rem;

</style>