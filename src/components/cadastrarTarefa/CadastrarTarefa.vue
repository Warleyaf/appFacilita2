<template>
  <div class="container-task" :class="{ active: activeTask }">
    <div id="container-tarefa">
      <div class="adicionar-tarefa">
        <h1>Cadastrar Tarefa</h1>
        <form action="">
          <label for="">Título:</label>
          <input type="text" v-model="form.subject" required/>

          <label for="">Descrição</label>
          <textarea name="" id="" cols="25" rows="8" v-model="form.description" required></textarea>

          <div class="radio-btn">
            <div class="radio-select">
              <input type="radio" name="prioridade" id="urgente" />
              <label for="urgente">Urgente</label>

              <input type="radio" name="prioridade" id="importante" />
              <label for="importante">Importante</label>
            </div>
            <!-- <div class="submit">
              <button type="submit" @click="saveTask">Adicionar</button>
            </div> -->
            <div class="submit">
              <a href="/dashboard" @click="saveTask">Adicionar</a> 
            </div>
          </div>
        </form>
        <div class="sair">
          <button @click="closeTask"><i class="fas fa-times"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/EventBus';
export default {
  name: "CadastrarTarefa",
  data(){
    return {
      activeTask: false,
      form: {
        subject: "",
        description: "",
      }
      
    }
  },
  methods: {
    closeTask: function() {
      this.activeTask = false
    },

    saveTask() {
      let tasks = (localStorage.getItem("tasks")) ? JSON.parse(localStorage.getItem("tasks")) : [];
      tasks.push(this.form);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  },

  created() {
    EventBus.$on('btn-add-task', (addTask) => {
      this.activeTask = addTask
    })
  }
};
</script>

<style src="./CadastrarTarefa.styl" lang="styl">