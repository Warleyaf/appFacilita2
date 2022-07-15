<template>
  <div class="excluir-task">
    <div class="excluir-con-can">
      <div class="trash">
        <i class="fa-regular fa-trash-can"></i>
      </div>
      <p>Tem certeza que deseja <span>excluir</span> esta tarefa?</p>
      <span class="sub-delete">Esta ação não poderá ser desfeita.</span>

      <div class="btn-del">
        <button class="cancel">Cacelar</button>
        <button class="confirm">Confirmar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteTask",
};
</script>

<style lang="stylus" scoped>
   .excluir-task
      position: fixed;
      margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 477px;
      height: 345px;
      display: flex;
      border-radius: 8px;
      justify-content: center;
      text-align: center;
      background-color: #FFFFFF;
      z-index: 20; 
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
               &:active
                  background-color: #cf4062;
</style>