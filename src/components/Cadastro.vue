<template>
  <div class="register">
    <h1>Registro de Motorista</h1>
    <form class="form" @submit.prevent="registerDriver">
      <div class="nome">
        <label for="name">Nome:</label>
        <input type="text" id="name" v-model="name">
      </div>
      <div class="cpf">
        <label for="cpf">CPF:</label>
        <input type="text" id="cpf" v-model="cpf">
      </div>
      <div class="botao">
        <button type="submit">Registrar</button>
      </div>
    </form>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      name: '',
      cpf: ''
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    async registerDriver() {
      if (!this.name || !this.cpf) {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      if (this.name.length < 10) {
        alert('O nome deve ter pelo menos 10 caracteres.');
        return;
      }

      const driverData = {
        Nome: this.name,
        CPF: this.cpf
      };

      try {
        const response = await fetch('http://localhost:5016/api/Caminhoneiro', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(driverData)
        });

        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(`Erro na resposta da rede: ${response.status} - ${errorMessage}`);
        }

        const result = await response.json();
        alert('Registro bem-sucedido!');
        this.router.push('/voltar-motorista');

      } catch (error) {
        console.error('Houve um problema com o registro:', error);
        alert(`Falha no registro: ${error.message}`);
      }
    }
  }
};
</script>


  
<style scoped>


.register {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vw;
  margin-left: -10vh;

}

h1 {
  margin-bottom: 3rem;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: radial-gradient(circle,rgb(109, 109, 109) 0%, rgba(6,6,6) 100%);
  border-radius: 10px;
  color: white;
  width: 300px;
}

label {
  color: white;
}

.nome,
.cpf {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
}

.nome label,
.cpf label {
  margin-bottom: 0.5rem;
}

.nome input,
.cpf input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}

.botao {
  background-color: #f30000;
  width: 5vw;
  height: 35px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1vw;
}

.input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    width: 100%;
    color: #FFF !important;
  }


button {
  color: rgb(255, 255, 255);
  border: none;
  background: none;
  cursor: pointer;
  width: 100%;
  height: 100%;
}

button:hover {
  background-color: rgb(255, 255, 255);
  color:#f30000;
  border-radius:5px;
}

</style>
