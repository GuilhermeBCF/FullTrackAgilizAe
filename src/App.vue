<template>
	<div class="app">
	  <Sidebar />
	  <main>
		<router-view />
	  </main>
	</div>
  </template>
  
  <script setup>
  import Sidebar from './components/Sidebar.vue';
  import { useRouter } from 'vue-router';
  
//   const router = useRouter();
//   router.push('/');
  
//   const handleLoginSuccess = () => {
// 	router.push('/home');
//   };
  </script>
  
  <style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
  
  :root {
	--primary: #f30000;
	--primary-alt: #ffffff;
	--grey: #ffffff;
	--dark: #000000;
	--dark-alt: #ffffff;
	--light: #ffffff;
	--sidebar-width: 300px;
  }
  
  * {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Poppins', sans-serif;
  }
  
  body {
	background-color: #eeeeee;
	overflow-x: hidden;	
  }
  
  .input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    width: 100%;
    color: #FFF !important;
  }

  button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
  }
  
  .app {
	display: flex;
	flex-wrap: wrap;
  
	main {
	  flex: 1 1 0;
	  padding: 2rem;
	  transition: padding-left 0.3s ease;
  
	  @media (max-width: 1024px) {
		padding-left: 6rem;
	  }
  
	  @media (max-width: 768px) {
		padding: 1rem;
	  }
	}
  }
  
  .sidebar {
	width: var(--sidebar-width);
	transition: width 0.3s ease;
  
	@media (max-width: 768px) {
	  width: 100%;
	}
  }
  
  .error-message {
	color: red;
	margin-top: 10px;
  }
  </style>
  
