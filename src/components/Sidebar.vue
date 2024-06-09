<template>
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
		<div class="logo">
			<img :src="logoURL" alt="Vue" /> 
		</div>
        

		<div class="menu-toggle-wrap">
            <div class="projeto">
                <h1>Agiliza-Aê</h1>
            </div>
			<button class="menu-toggle" @click="ToggleMenu">
				<span class="material-icons">keyboard_double_arrow_right</span>
			</button>
		</div>

		<h3>Menu</h3>
		<div class="menu">
			<router-link to="/home" class="button">
				<span class="material-icons">home</span>
				<span class="text">Home</span>
			</router-link>
			<router-link to="/dashboard" class="button">
				<span class="material-icons">dashboard</span>
				<span class="text">Dashboards</span>
			</router-link>
			<router-link to="/motorista" class="button">
				<span class="material-icons">group</span>
				<span class="text">Motorista</span>
			</router-link>
			<router-link to="/maps" class="button">
				<span class="material-icons">place</span>
				<span class="text">Maps</span>
			</router-link>
		</div>

		<div class="flex"></div>
		
	</aside>
</template>

<script setup>
import { ref } from 'vue'
import logoURL from '../assets/fulltime_agiliza.svg'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<style scoped>
aside {
  display: flex;
  flex-direction: column;
  background-color: transparent;
  color: transparent; 
  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;
  transition: 0.5s ease-in-out;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    transition: background-color 0.5s ease-in-out;
    z-index: -1;
  }

  &:hover:after {
    background-color: #bdbbbb; /* Background semi-transparente ao passar o mouse */
  }

  &.is-expanded {
    background-color: #bdbbbb; /* Background color ao expandir */
    width: var(--sidebar-width);
  }

  .flex {
    flex: 1 1 0%;
  }

  .logo {
    margin-bottom: 1rem;

    img {
		background-color: transparent;
		position: absolute;
		top: 0vw;
		left: -1.5vw;
      width: 6rem;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    position: relative;
    top: 0;
    transition: 0.2s ease-in-out;

    .projeto h1 {
      font-size: 20px;
      padding-top: 31px;
      padding-right: 3vw;
	  color: #FFF;
    }

    .menu-toggle {
		margin-top: 17px;
      transition: 0.2s ease-in-out;

      .material-icons {
        font-size: 2rem;
        color: #272727; 
        transition: 0.2s ease-out;
      }

      &:hover .material-icons {
        color: #8f0000; /* Substituído por uma cor específica */
        transform: translateX(0.5rem);
      }
    }
  }

  h3,
  .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  h3 {
    color: #9e9e9e; /* Substituído por uma cor específica */
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    text-align: center;
    padding-bottom: 5vh;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      transition: 0.2s ease-in-out;
      padding: 0.5rem 1rem;

      .material-icons {
        font-size: 2rem;
        color: #272727; /* Substituído por uma cor específica */
        transition: 0.2s ease-in-out;
      }

      .text {
        color: #f0f0f0; /* Substituído por uma cor específica */
        transition: 0.2s ease-in-out;
      }

      &:hover {
        background-color: #212121; /* Substituído por uma cor específica */

        .material-icons,
        .text {
          color: #ff0000; /* Substituído por uma cor específica */
        }
      }

      &.router-link-exact-active {
        background-color: transparent; /* Substituído por uma cor específica */
        border-right: 5px solid #8f0000; /* Substituído por uma cor específica */

        .material-icons,
        .text {
          color: #8f0000; /* Substituído por uma cor específica */
        }
      }
    }
  }

  .footer {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    p {
      font-size: 0.875rem;
      color: #9e9e9e; /* Substituído por uma cor específica */
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem;
      
      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    h3,
    .button .text {
      opacity: 1;
    }

    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }

    .footer {
      opacity: 0;
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: 99;
  }
}
</style>
