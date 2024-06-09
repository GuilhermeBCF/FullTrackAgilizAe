<template>
	<main id="Home-page">
	  <div class="box">
		<div class="box-content">
		  <h1><b>Full</b>track</h1>
		  <p>Auxilia no controle da logística e gestão de tempo da sua empresa.</p>
		  <div class="button">
		  <button class="botao1">Saiba mais</button>
		</div>
		</div>
	  </div>
	  <div class="image-container">
		<img :src="logoURL" alt="Fulltime Agiliza logo" class="box-image">
	  </div>
  
	  <div class="box">
		<div class="box-content">
		  <h1><b>Projeto</b></h1>
		  <p>Desenvolvido por: Gabriel Bueno, Bruno Bueno, Lucas Panizio, Guilhermer Bernardes e Lucas Lima.</p>
		  <div class="button">
			<button class="botao-git">Github</button>
		  </div>
		</div>
	  </div>
	  <div class="image-container">
		<img :src="image2URL" alt="Image 2" class="box-image">
	  </div>
  
	  <div class="box">
		<div class="box-content">
			<h1>Agili<b>za</b></h1>
			<p>Um sistema para gerenciar rotas e colaboradores.</p>
			<div class="button">
			<button class="botao-git">Clique aqui</button>
		  </div>
		</div>
	  </div>
	  <div class="image-container">
		<img :src="image3URL" alt="Image 3" class="box-image">
	  </div>
	</main>
  </template>
  
  
<script setup>
import logoURL from '../assets/fulltime_agiliza.svg'
import image2URL from '../assets/notebook_page.svg'
import image3URL from '../assets/loc_geo.svg'
</script>

<style>
  #Home-page {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .box {
    width: calc(33.33% - 20px); 
    margin: 10px;
    background-color: #ffffff;
    border-radius: 10px; 
    box-shadow: 0 0 10px rgba(54, 54, 54, 0.233); 
    height: 200px; 
    box-sizing: border-box; 
  }
  
  .box-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
  }
  .box-content h1{
	position: relative;
	font-size: 200%;
	color: #000000;
	padding-top: 3%;
	padding-right: 45%;
  }
  .box-content b{
	color: #000;
  }
  .box-content p{
	font-size: 65%;
	width: 50%;
	padding-top: 2%;
  }
  .box-content .botao1{
	background-color: rgb(37, 37, 37);
	padding: 10px 10px;
	color: #FFF;
	border-radius: 5px;
  }

  .box-content .botao-git{
  	background-color: rgb(37, 37, 37);
	padding: 10px 20px;
	color: #FFF;
	border-radius: 5px;
	}
  
  .image-container {
    display: flex;
    justify-content: center;
    width: 30%;
    margin-top: 10px;
  }
  
  .box-image {
    width: 80%;
    height: auto;
  }
  
  @media (max-width: 768px) {
    .box {
      width: 100%;
      margin-right: 0;
    }
	#Home-page{
		margin-left: 50px;
	}
  }
</style>
  
