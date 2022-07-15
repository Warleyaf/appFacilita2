<template>
  <section>
    <CadastrarTarefa />
    <Navleft />
    <div class="container">
      <Navuser />
      <div class="cont-main">
        <Categories />
        <Main />
      </div>
    </div>
  </section>
</template>

<script>
import "../styles/global.styl";
import Navleft from "../components/navleft/Navleft.vue";
import Navuser from "../components/navuser/Navuser.vue";
import Categories from "../components/categories/Categories.vue";
import Main from "../components/main/Main.vue";
import CadastrarTarefa from "../components/cadastrarTarefa/CadastrarTarefa.vue";

export default {
  name: "Dashboard",
  components: {
    Navleft,
    Navuser,
    Categories,
    Main,
    CadastrarTarefa,
  },
};
</script>

<style src="./dashboard.styl" lang="styl">
