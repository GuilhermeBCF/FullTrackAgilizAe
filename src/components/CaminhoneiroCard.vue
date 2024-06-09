<template>
  <div class="carde">
    <div class="info">
    <h3>{{ caminhoneiro.nomeCaminhoneiro }}</h3>
    <img :src="imgPerfil" class="img-perfil" alt="Imagem de perfil">
    <p><b>Marca do Caminhão:</b> {{ caminhoneiro.marcaCaminhao }}</p>
    <p><b>Cor do Caminhão:</b> {{ caminhoneiro.corCaminhao }}</p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'CaminhoneiroCard',
  props: {
    caminhoneiro: Object,
    imgPerfil: String
  }
};
</script>

<style scoped>
.carde {
  flex: 0 0 auto;
  border: 1px solid #ccc;
  width: 20vw;
  padding: 5vw;
  margin: 8px;
  border-radius: 8px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  white-space: normal; /* necessário para que o texto não seja recortado */
  word-wrap: break-word; /* necessário para que o texto não seja recortado */
}
.img-perfil {
  width: 100%; 
}
.info {
  text-align: center;
}
h3{
  justify-content: center;
  font-size: 1.2vw;
}
p{
  font-size: 1vw;
}

.input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    width: 100%;
    color: #FFF !important;
  }
</style>
