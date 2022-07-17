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
          <ListTask />
          
        </ul>
      </div>
    </div>
    <div id="btn-addTask" @click="btnAddTask()">
      <button class="addTaskbtn">+</button>
    </div>
  </main>
</template>

<script>
import ListTask from "../listtask/ListTask.vue";
import { EventBus } from "@/EventBus";
export default {
  name: "Main",
  components: {
    ListTask,
  },
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

    btnEditTask() {
      console.log("Eai");
      EventBus.$emit("btn-edit-task", this.addTask);
    },
    btnExcluirTask(task, index) {
      console.log("Testando");
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