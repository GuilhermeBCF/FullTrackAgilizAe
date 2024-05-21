<template>
  <div class="user">
    <img :src="imageSrc" alt="Foto de {{ nome }}" />
    <h2>{{ nome }}</h2>
    <h5>{{ caminhao }}</h5>
    <p>{{ frase }}</p>
    <router-link to="/cadastro" class="botaolight">Saiba mais</router-link>
  </div>
</template>
  
  <script>
  export default {
    props: {
      imageSrc: String,
      nome: String,
      caminhao: String,
      frase: String,
    },
  }
  </script>
  
<style scoped>
.user {
  clip-path: polygon(100% 0, 100% 90%, 85% 100%, 0 100%, 0 0);
  color: white;
  background: radial-gradient(circle,rgba(96, 96, 96) 0%, rgba(6,6,6) 100%);
  padding: 1rem;
  box-shadow: var(--box-shadow);
  transition: all 0.3s ease;
  text-align: center;
  width: 15rem;
  height: 20rem;
}

.user .botaolight {
  background: #fff;
  padding: 8px;
  font-size: 100%;
  border-radius: 5px;
  font-weight: 700;
  text-transform: uppercase;
  color: #333333;
  transition: .3s;
}

.user .botaolight:hover {
  background-color: red;
  color: white;
}

</style>