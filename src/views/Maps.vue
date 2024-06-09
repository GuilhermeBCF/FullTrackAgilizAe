<template>
	<main class="page" id="maps-page">
	  <div class="container">
		<form id="coordinatesForm" class="form">
		  <label for="startLat">Latitude Inicial:</label>
		  <input type="text" id="startLat" v-model="startLat" placeholder="Ex: -22.236207" required>
		  <label for="startLng">Longitude Inicial:</label>
		  <input type="text" id="startLng" v-model="startLng" placeholder="Ex: -49.966406" required>
		  
		  <label for="endLat">Latitude Final:</label>
		  <input type="text" id="endLat" v-model="endLat" placeholder="Ex: -22.234160" required>
		  <label for="endLng">Longitude Final:</label>
		  <input type="text" id="endLng" v-model="endLng" placeholder="Ex: -49.644830" required>
		  
		  <button type="button" class="botaolight" @click="createRoutes">CRIAR ROTAS</button>
		</form>
		<div id="map" class="map"></div>
	  </div>
	</main>
  </template>
  
  <style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
}

.input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    width: 100%;
    color: #FFF !important;
  }

.form {
  max-width: 600px;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form label {
  font-size: 14px;
  color: #333;
}

.form input[type="text"] {
  width: calc(100% - 20px);
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
}

.botaolight {
  background: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-weight: 700;
  text-transform: uppercase;
  color: #333333;
  transition: .3s;
  cursor: pointer;
}

.botaolight:hover {
  background-color: rgb(92, 0, 0);
  color: white;
}

.map {
  height: 80vh;
  width: 100%;
  max-width: calc(100% - 40px);
  margin-top: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

@media (min-width: 768px) {
  .container {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }

  .form {
    width: 50%;
    margin-right: 20px;
  }

  .map {
    width: 50%;
    max-width: none;
    margin-top: 0;
  }
}
  </style>
  
  <script>
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  
  export default {
	name: 'Maps',
	data() {
	  return {
		startLat: '',
		startLng: '',
		endLat: '',
		endLng: ''
	  };
	},
	mounted() {
	  this.map = L.map('map').setView([-22.236207, -49.966406], 13);
	  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	  }).addTo(this.map);
	},
	methods: {
	  createRoutes() {
		if (this.startLat && this.startLng && this.endLat && this.endLng) {
		  const startPoint = L.marker([this.startLat, this.startLng]).addTo(this.map)
			.bindPopup('Ponto Inicial').openPopup();
		  const endPoint = L.marker([this.endLat, this.endLng]).addTo(this.map)
			.bindPopup('Ponto Final').openPopup();
  
		  const route = L.polyline([[this.startLat, this.startLng], [this.endLat, this.endLng]], { color: 'blue' }).addTo(this.map);
		  this.map.fitBounds(route.getBounds());
		} else {
		  alert('Por favor, insira todas as coordenadas.');
		}
	  }
	}
  };
  </script>
  
