<template>
  <header id="header">
    <nav class="navleft">
      <img src="../../assets/Logo.png" alt="" />

      <ul>
        <li>
          <a href="#">
            <i class="far fa-chart-bar"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <li>
          <a href="#">
            <i class="far fa-check-circle"></i>
            <span>Tarefas</span>
          </a>
        </li>

        <li>
          <a href="#">
            <i class="far fa-check-circle"></i>
            <span>Configurações</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navleft",
};
</script>

<style src="./Navleft.styl" lang="styl">
