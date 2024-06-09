<template>
    <div class="texte">
      <h1>Dashboard/Analytics</h1>
    </div>
    <main id="dashboard-page">
      <div class="box">
        <h1>Visitantes</h1>
        <p></p>
        <div class="rotas">
          <i class='bx bx-user-voice' style='color:black'></i>
        </div>
        <div class="botao-primary">
          <button class="cor-botao">Inicio</button>
        </div>
      </div>
      <div class="box">
        <h1>Motorista</h1>
        <p></p>
        <div class="rotas">
          <i class='bx bx-support' style='color:black'></i>
        </div>
        <div class="botao-primary">
          <button class="cor-botao">Motorista</button>
        </div>
      </div>
      <div class="box">
        <h1>Rotas</h1>
        <p></p>
        <div class="rotas">
          <i class='bx bx-map-pin' style='color:black'></i>
        </div>
        <div class="botao-primary">
          <button class="cor-botao">Rotas</button>
        </div>
      </div>
      <div class="chart-container">
        <canvas id="myChart"></canvas>
      </div>
      <div class="box-right">
    <h1>Relatórios</h1>
    <p><i class='bx bxs-report' style='color:black'></i> Relatórios de desempenho mensal</p>
    <div class="botao-secunda">
      <button class="secunda">Download CSV</button>
    </div>
    <div class="botao-secunda">
      <button class="secunda">Download PDF</button>
    </div>
    <div class="botao-secunda">
      <button class="secunda">Gerar Gráfico</button>
    </div>
      </div>
    </main>
  </template>
  
  <script>
  import { Chart, registerables } from 'chart.js';
  Chart.register(...registerables);
  
  export default {
    data() {
      return {};
    },
    mounted() {
      this.renderChart();
    },
    methods: {
      renderChart() {
        const ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Reunioes', 'Rotas', 'Motorista'],
            datasets: [{
              label: '# Histórico',
              data: [12, 19, 3],
              backgroundColor: [
                'rgba(255, 0, 0, 0.514)',
                'rgba(161, 161, 161, 0.39)',
                'rgba(77, 77, 77, 0.493)',
              ],
              borderColor: [
                'rgb(255, 0, 0)',
                'rgb(255, 255, 255)',
                'rgb(0, 0, 0)',
              ],
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    }
  };
  </script>
  
  <style scoped>
  #dashboard-page {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .texte h1 {
    font-size: 2vw;
    margin: 10px;
  }
  
  .box, .chart-container, .box-right {
    margin: 10px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(53, 53, 53, 0.514);
    box-sizing: border-box;
  }
  
  .box {
    flex: 1 1 30%;
    min-width: 250px;
    max-width: 30%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
  }
  
  .chart-container {
    flex: 1 1 100%;
    min-width: 300px;
    max-width: 100%;
    background-color: #000000;
    padding: 10px;
    height: 400px; /* Add this to ensure a proper aspect ratio */
    position: relative;
  }
  
  .box-right {
    flex: 1 1 100%;
    min-width: 300px;
    max-width: 100%;
    padding: 10px;
  }
  .box-right .botao-secunda{
    padding-top: 10px;
  }
  .botao-primary, .botao-secunda {
    align-self: flex-end;
  }
  
  .cor-botao, .secunda {
    color: #FFF;
    background-color: #960000;
    height: 40px;
    width: 90px;
    border-radius: 10px;
  }
  
  .secunda {
    background-color: #000000;
  }
  
  .box h1, .box-right h1 {
    font-size: 2vw;
    margin: 10px 0;
  }
  
  .rotas i {
    font-size: 3rem;
    margin: 10px;
    align-self: center;
  }
  
  @media (max-width: 700px) {
    .box, .chart-container, .box-right {
      min-width: 50%;
      max-width: 10%;
    }
  
    .texte h1 {
      font-size: 4vw;
      text-align: center;
    }
  
    .box h1, .box-right h1 {
      font-size: 25px;
      text-align: center;
    }
  
    .botao-primary, .botao-secunda {
      align-self: center;
      margin-top: 20px;
    }
  
    .rotas i {
      font-size: 2rem;
    }
  
    .chart-container {
      height: 300px; /* Adjusted height for smaller screens */
    }
  }
  </style>
  
