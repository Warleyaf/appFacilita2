<template>
  <div class="login">
    <div class="login-info">
      <strong>Entre com seus dados de acesso.</strong>
      <form action="">
        <label for="user">Nome de usuário ou E-mail</label>
        <input type="text" />

        <label for="password">Senha:</label>
        <input type="password" />

        <router-link class="button" to="/dashboard">Entrar</router-link>
      </form>

      <a href="#">Esqueci minha senha</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style lang="stylus">
   #main 
      background-color: #ffffff;
      margin: 0 auto;
      display: flex;
      .login  
         margin: 0 auto;
         display: flex;
         align-items: center;  

         .login-info 
            width: 23rem;
            strong 
               color: #283848;   
            form
               margin-top: 2.25rem;
               display: flex;
               flex-direction: column;   
               label
                  font-size: 0.875rem;
                  font-weight: 600;
                  color: #4e657b;
                  margin-bottom: 5px;
               input 
                  height: 3.43rem;
                  border-radius: 5px;
                  border: 2px solid #BFDAEB;
                  padding-left: 1.25rem;
                  font-size: 1.25rem;
                  outline: none;
                  &:focus 
                     border: 2px solid #2693FF;
               input
                  &:nth-child(2)
                     margin-bottom: 1.37rem;  

            .button 
               margin: 1.12rem 0 2.62rem 0;
               height: 3.43rem;
               border-radius: 5px;
               border: none;
               background-color: #1AD18F;
               font-weight: 700;
               color: #ffffff;
               cursor: pointer;
               transform: 0.4s;
               text-decoration: none;
               display: flex;
               align-items: center;
               justify-content: center;
               font-size: 1rem;

            button
               &:active
                  background-color: #13b97c;

            a 
               font-size: 0.81rem;
               font-weight: 600;
               color: #2693FF;
</style>