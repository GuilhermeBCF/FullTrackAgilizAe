<template>
  <div class="register">
    <h1>Registro de Motorista</h1>
    <form class="form" @submit.prevent="submitForm">
      <div class="nome">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
      </div>

      <div class="cpf">
        <label for="cpf">CPF:</label>
        <input type="text" id="cpf" v-model="cpf" required>
      </div>
      <div class="botao">
        <button type="submit">registrar</button>
      </div>
    </form>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      name: '',
      cpf: ''
    }
  },
  methods: {
    submitForm() {
      console.log(`Name: ${this.name}, CPF: ${this.cpf}`);
    }
  }
}
</script>
  
<style scoped>
.register{
    
    margin-left: 60vh;
    margin-top: 10%;
}

.nome{
  padding-top: 3rem;
  margin-left: 5rem;
}
.cpf{
  margin-top: 3rem;
  margin-left: 5rem;
}

.cpf input{
  margin-left: 1.2rem;
}

.botao{
  margin-top: 2rem;
  background-color: #f30000;
  width: 90px;
  height: 35px;
  margin-left: 40%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

button{
  color:white;
  text-align: center;
}

form{
  padding-bottom: 2rem;
  margin-top:3rem;
  background-color: grey;
  background-size: cover;
  border-radius: 10px;
  color:white;
}


</style>