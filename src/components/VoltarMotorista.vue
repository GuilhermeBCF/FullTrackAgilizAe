<template>
    <div class="register">
      <h1>Registro de Caminhão</h1>
      <form class="form" @submit.prevent="registerCaminhao">
        <div class="input-group">
          <label for="marca">Marca:</label>
          <input type="text" id="marca" v-model="marca">
        </div>
        <div class="input-group">
          <label for="placa">Placa:</label>
          <input type="text" id="placa" v-model="placa">
        </div>
        <div class="input-group">
          <label for="cor">Cor:</label>
          <input type="text" id="cor" v-model="cor">
        </div>
        <div class="input-group">
          <label for="caminhoneiroId">ID do Caminhoneiro:</label>
          <input type="number" id="caminhoneiroId" v-model="caminhoneiroId">
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
        marca: '',
        placa: '',
        cor: '',
        caminhoneiroId: ''
      };
    },
    setup() {
      const router = useRouter();
      return { router };
    },
    methods: {
      async registerCaminhao() {
        if (!this.marca || !this.placa || !this.cor || !this.caminhoneiroId) {
          alert('Por favor, preencha todos os campos.');
          return;
        }
  
        const caminhaoData = {
          Marca: this.marca,
          Placa: this.placa,
          Cor: this.cor,
          CaminhoneiroId: parseInt(this.caminhoneiroId)
        };
  
        try {
          const response = await fetch('http://localhost:5016/api/Caminhao', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(caminhaoData)
          });
  
          if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Erro na resposta da rede: ${response.status} - ${errorMessage}`);
          }
  
          const result = await response.json();
          alert('Registro de caminhão bem-sucedido!');
          this.router.push('/motorista');
  
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
  margin-top: 2vw;
  margin-left: -10vh;
}

h1 {
  margin-bottom: 7rem;
}

.marca{
  color: #FFF;
}
.placa{
  color: #FFF;
}
.cor{
  color: #FFF;
}
.caminhoneiroId{
  color: #FFF;
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
  
  .input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    width: 100%;
    color: #FFF;
  }
  
  .input-group label {
    margin-bottom: 0.5rem;
    
  }
  
  .input-group input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
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
  
  button {
    color: white;
    border: none;
    background: none;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }

  </style>
  
