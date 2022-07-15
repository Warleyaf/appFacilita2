<template>
  <main>
    <div class="main-container">
      <div class="cabecalho">
        <strong>Minhas Tarefas</strong>
        <p>
          Olá <span>Eduardo Pereira</span>, você tem
          <span>4 tarefas</span> pendentes.
        </p>
      </div>
      <div class="search">
        <input type="text" placeholder="Buscar Tarefas" />
        <button><i class="fas fa-search"></i></button>
      </div>
      <div class="tasks">
        <div class="check">
          <input class="checkbox" type="checkbox" />
          <p>Planejjar alguma coisa</p>
        </div>

        <div class="prioridade-option">
          <span>Urgente</span>
          <button v-on:click="openEditDelete" class="btn-option">
            <i class="fas fa-ellipsis-v"></i>
          </button>
        </div>

        <div class="option" :class="{ active: editDelete }">
          <div class="delete-edit">
            <a href="#">Editar</a>
            <a href="#">Excluir</a>
          </div>
          <button v-on:click="closeEditDelete" class="btn-edit-delete">
            <i class="fas fa-ellipsis-v"></i>
          </button>
        </div>
      </div>
    </div>
    <div id="btn-addTask">
      <button class="addTaskbtn">+</button>
    </div>
  </main>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      editDelete: false,
    };
  },
  methods: {
    openEditDelete: function () {
      this.editDelete = true;
    },
    closeEditDelete: function () {
      this.editDelete = false;
    },
  },
};
</script>

<style src="./Main.styl" lang="styl">