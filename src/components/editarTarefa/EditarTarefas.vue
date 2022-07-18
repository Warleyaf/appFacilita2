<template>
  <div class="container-edit" :class="{ active: activeTask }">
    <div id="container-edita">
      <div class="editar-tarefa">
        <h1>Editar Tarefa</h1>
        <form action="">
          <label for="">Título:</label>
          <input type="text" />

          <label for="">Descrição</label>
          <textarea name="" id="" cols="25" rows="8"></textarea>

          <div class="radio-btn">
            <div class="radio-select">
              <input type="radio" name="prioridade" id="urgente" />
              <label for="urgente">Urgente</label>

              <input type="radio" name="prioridade" id="importante" />
              <label for="importante">Importante</label>
            </div>
            <div class="submit">
              <button type="submit" @click="edit()">Editar</button>
            </div>
          </div>
        </form>
        <div class="sair">
          <button @click="closeEdit"><i class="fas fa-times"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/EventBus';
export default {
  name: "EditarTarefas",
  data() {
    return {
      activeTask: false,
      taskSelected: [],
    }
  },
  methods: {
    closeEdit: function() {
      this.activeTask = false
    },
    edit() {
     
    }
  },
  created() {
    EventBus.$on('btn-edit-task', (addTask) => {
      console.log(addTask)
      this.activeTask = addTask
    })
  }
};
</script>

<style src="./EditarTarefas.styl" lang="styl">