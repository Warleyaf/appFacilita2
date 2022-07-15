<template>
  <div class="container-task">
    <div id="container-tarefa">
      <div class="adicionar-tarefa">
        <h1>Cadastrar Tarefa</h1>
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
              <button type="submit">Adicionar</button>
            </div>
          </div>
        </form>
        <div class="sair">
          <button><i class="fas fa-times"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CadastrarTarefa",
};
</script>

<style src="./CadastrarTarefa.styl" lang="styl">