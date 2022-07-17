<template>
  <!-- <div class="list-todo">
    <ul> -->
      <li>
        <div class="btn-checked">
          <input type="checkbox" id="check">
          <label>Checked</label>
        </div>

        
        <div class="prioridade-option">
          <span>Urgente</span>
          <button class="btn-option" v-on:click="openEditDelete">
            <i class="fas fa-ellipsis-v"></i>
          </button>
        </div>

        <div class="option" :class="{ active: editDelete }">
          <div class="delete-edit">
            <a href="#">Editar</a>
            <a href="#">Excluir</a>
          </div>
          <button class="btn-edit-delete" v-on:click="closeEditDelete">
            <i class="fas fa-ellipsis-v"></i>
          </button>
        </div>
        
      </li>
    <!-- </ul>
  </div> -->
</template>

<script>
export default {
  name: "ListTask",
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



<style lang="stylus" >
.list-todo 
    ul 
      li 
        height: 4rem;
        padding-left: 0.87rem; 
        border-radius: 5px;
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        background-color: #ffffff;
        margin-bottom: 0.43rem;
        position: relative;

        .btn-checked 
          display: flex;
          align-items: center;
          gap: 0.80rem;

          input[type="checkbox"]
            appearance: none;
            -webkit-appearance: none;
            height: 32px
            width: 33px;
            background-color: #d5d5d5;
            border-radius: 5px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
          
          label
            font-size: 0.93rem;
            font-weight: 500;
            

          input[type="checkbox"]
            &:after
              content: "\f00c";
              font-size: 20px;
              font-family: "Font Awesome 5 Free";
              font-weight: 550;
              color: white;
              display: none;
          
          input[type="checkbox"]
            &:hover
              background-color: #a5a5a5a5;
          
          input[type="checkbox"]
            &:checked
              background-color: #5bcd3e;
          
          input[type="checkbox"]
            &:checked
              &:after
                display: block;

        .prioridade-option
            display: flex;
            gap: 23px;
            span
               display: block;
               padding: 4px 9px;
               border-radius: 40px;
               font-size: 0.68rem;
               color: #ffffff;
               font-weight: bold;
               background-color: #FF2E79;
            button
               background:none;
               padding: 0px 12px;
               border: none;
               color: #9CAEC1;
               cursor: pointer;
               font-size: 1.2rem;

        .option
          display: none;
          z-index: 120;
          position: absolute;
          right: 9px;
          top: 14px;
          border-radius: 5px;
          box-shadow: 0px 1px 4px 1px rgba(0,0,0,0.15);
          width: 109px;
          height: 74px;
        .active
          display: flex;
            
          padding: 10px 0px 10px 16px;
          background-color: #ffffff;
          .delete-edit
            display: flex;
            flex-direction: column;
            gap: 15px;
            align-items: center;
            justify-content: center;
            a
              color: #5D7893;
              text-decoration: none;
              font-weight: 550;
          .btn-edit-delete
            margin-left: 15px;
            height: 20px;
            padding: 10px;
            display: flex;
            align-items: center;
            cursor: pointer;
            outline: none;
            border: none;
            background: none;
            &:hover
              color: #2693FF;
</style>