<script setup>
  import MotoristaCard from './MotoristaCard.vue'
  import iconeURL from '../assets/iconeadd.png'
  
  const motoristas = [
    {
      imageSrc: 'https://static.vecteezy.com/ti/fotos-gratis/t2/7074324-sorriso-confianca-jovem-profissional-motorista-em-negocio-largo-transporte-foto.jpg',
      nome: 'Joaquim',
      caminhao: 'Scania',
      
    },
    {
      imageSrc: 'https://conteudo.imguol.com.br/c/noticias/0b/2022/06/23/o-motorista-amauri-oliveira-acredita-que-o-auxilio-de-r-400-sera-pouco-pelos-gastos-que-tem-1655995514896_v2_3x4.jpg',
      nome: 'Carlos',
      caminhao: 'Volvo',
     
    },
    {
      imageSrc: 'https://blogdocaminhoneiro.com/wp-content/uploads/2021/06/rodrigo-carvalho-estados-unidos-1.jpg',
      nome: 'Eduardo',
      caminhao: 'Volkswagen',
   
    },
    {
      imageSrc: 'https://fotos-estradao-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2021/08/16193908/Mulheres-Na-Direcao-4.jpg',
      nome: 'Daniela',
      caminhao: 'DAF',

    },
  ]
  </script>
  
<template>
    <main id="Motorista-page">
      <h1>Motorista</h1>
      <div class="new-users">
        <h2 class="subtitulo">Gerenciar</h2>
        <div class="user-list">
          <MotoristaCard
            :imageSrc="iconeURL"
            nome="Adicionar"
            caminhao="Novo Motorista"
            frase=""
            class="novo-motorista-card"
          />
          <MotoristaCard
            v-for="motorista in motoristas"
            :key="motorista.nome"
            :imageSrc="motorista.imageSrc"
            :nome="motorista.nome"
            :caminhao="motorista.caminhao"
            :frase="motorista.frase"
          />
        </div>
      </div>
  
      <div class="recent-orders">
      </div>
    </main>
  </template>

<style>

</style>
  