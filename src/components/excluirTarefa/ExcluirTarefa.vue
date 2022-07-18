<template>
  <div class="excluir-task" :class="{ active: activeTask }">
    <div class="excluir-con-can">
      <div class="trash">
        <i class="fa-regular fa-trash-can"></i>
      </div>
      <p>Tem certeza que deseja <span>excluir</span> esta tarefa?</p>
      <span class="sub-delete">Esta ação não  poderá ser desfeita.</span>

      <div class="btn-del">
        <button class="cancel" @click="cancelDelete">Cacelar</button>
        <!-- <button href="sds#" class="confirm" @click="confirmRemoveTask()">Confirmar</button> -->
        <a class="confirm" href="/dashboard" @click="confirmRemoveTask()">Confirmar</a>
      </div>
      <div>
         <h1></h1>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/EventBus';
export default {
  name: "ExcluirTarefa",
  data() {
   return {
      activeTask: false,
      taskSelected: [],
      tasks: [],
   }

  },
  methods: {
    cancelDelete: function() {
      this.activeTask = false
    },
    confirmRemoveTask() {
      this.tasks.splice(this.taskSelected.index, 1);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));

    }
  },
  created(){
      EventBus.$on('btn-excluir-task', (addTask, taskSelected, tasks) => {
      console.log(tasks)
      console.log(taskSelected)
      this.activeTask = addTask
    })
  }
};
</script>

<style lang="stylus" scoped>
   .excluir-task
      display: none;
      position: fixed;
      margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 477px;
      height: 345px;
      border-radius: 8px;
      justify-content: center;
      text-align: center;
      background-color: #FFFFFF;
      z-index: 20;
   .active
      display: flex;

      .excluir-con-can
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         line-height: 30px;
         p
            font-size: 1.25rem;
            font-weight: bold;
         span
            color: #FF4874;
         .trash
            width: 8.5rem;
            height: 8.5rem;
            font-size: 4rem;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #4A6583;
            border-radius: 50%;
            background-color: #EDF6FC;
            margin-bottom: 0.75rem;
         .sub-delete
            font-size: 0.93rem;
            font-weight: 550;
            color: #475E78;
         .btn-del
            display: flex;
            gap: 11px;
            margin-top: 1.80rem;
            .cancel
               border-radius: 4px;
               border: none;
               padding: 0.75rem 1.6rem;
               font-size: 0.93;
               font-weight: bold;
               color: #ffffff
               background-color: #1AD18F;
               cursor: pointer;
               transition: 0.2s;
               &:active
                  background-color: #149969;
            .confirm
               border-radius: 4px;
               border: none;
               padding: 0.75rem 1.6rem;
               font-size: 0.93;
               font-weight: bold;
               color: #ffffff
               background-color: #FF4874;
               cursor: pointer;
               transition: 0.2s;
               text-decoration: none;
               &:active
                  background-color: #cf4062;
</style>