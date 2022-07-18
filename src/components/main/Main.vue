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

      <div class="list-todo">
        <ul>
          <li v-for="(task, index) in tasks" :key="index">
            <div class="btn-checked">
              <input type="checkbox" id="check" />
              <label>{{ task.subject }}: {{ task.description }}</label>
            </div>

            <div class="prioridade-option">
              <span>Urgente</span>
              <button class="btn-option" v-on:click="openEditDelete">
                <i class="fas fa-ellipsis-v"></i>
              </button>
            </div>

            <div class="option" :class="{ active: editDelete }">
              <div class="delete-edit">
                <a href="#" @click="btnEditTask(index)">Editar</a>
                <a href="#" @click="btnExcluirTask(task, index)">Excluir</a>
              </div>
              <button class="btn-edit-delete" v-on:click="closeEditDelete">
                <i class="fas fa-ellipsis-v"></i>
              </button>
            </div>
          </li>
        </ul>
      </div>

    </div>
    <div id="btn-addTask" @click="btnAddTask()">
      <button class="addTaskbtn">+</button>
    </div>
  </main>
</template>

<!--==========Script======-->

<script>
import { EventBus } from "@/EventBus";
export default {
  name: "Main",
  data() {
    return {
      editDelete: false,
      addTask: true,
      tasks: [],
      taskSelected: [],
    };
  },
  methods: {
    openEditDelete: function () {
      this.editDelete = true;
    },
    closeEditDelete: function () {
      this.editDelete = false;
    },
    btnAddTask() {
      console.log("Meu cumpadeee");
      EventBus.$emit("btn-add-task", this.addTask);
    },
    btnEditTask(index) {
      console.log(index);
      EventBus.$emit("btn-edit-task", this.addTask);
    },

    btnExcluirTask(task, index) {
      this.taskSelected = task;
      this.taskSelected.index = index;
      EventBus.$emit(
        "btn-excluir-task",
        this.addTask,
        this.taskSelected,
        this.tasks
      );
    },
  },

  created() {
    this.tasks = localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [];
  },
};
</script>

<style src="./Main.styl" lang="styl">