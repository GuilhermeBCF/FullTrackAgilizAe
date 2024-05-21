<script setup>
import Userlist from '../components/Userlist.vue'
import iconeURL from '../assets/iconeadd.png'
  
  const users = [
    { id: 1, name: 'Joaquim', truck: 'Scania', image: 'https://static.vecteezy.com/ti/fotos-gratis/t2/7074324-sorriso-confianca-jovem-profissional-motorista-em-negocio-longo-transporte-foto.jpg' },
    { id: 2, name: 'Carlos', truck: 'Volvo', image: 'https://conteudo.imguol.com.br/c/noticias/0b/2022/06/23/o-motorista-amauri-oliveira-acredita-que-o-auxilio-de-r-400-sera-pouco-pelos-gastos-que-tem-1655995514896_v2_3x4.jpg' },
    //...
  ]
  
  const orders = [
    { id: 1, name: 'Carlos', truck: 'Volvo FH16', date: '2024-05-10', status: 'Concluído' },
    { id: 2, name: 'Joaquim', truck: 'Scania', date: '2024-10-05', status: 'Concluído' },
    //...
  ]
  </script>

<template>
    <main id="Motorista-page">
    <Userlist :users="users" />
      <section class="recent-orders">
        <h2 class="subtitulo">Rotas Recentes</h2>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Caminhão</th>
              <th>Data</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.id">
              <td>{{ order.name }}</td>
              <td>{{ order.truck }}</td>
              <td>{{ order.date }}</td>
              <td :class="order.status === 'Concluído'? 'dada' : 'pend'">{{ order.status }}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  </template>
  

<style>
:root {
    --color-primary: #6C9BCF;
    --color-danger: #8e0101;
    --color-success: #1B9C85;
    --color-warning: #F7D060;
    --color-white: #fff;
    --color-info-dark: #7d8da1;
    --color-dark: black;
    --color-light: rgba(132, 139, 200, 0.18);
    --color-dark-variant: #677483;
    --color-background: #f6f6f9;

    --card-border-radius: 2rem;
    --border-radius-1: 0.4rem;
    --border-radius-2: 1.2rem;

    --card-padding: 1.8rem;
    --padding-1: 1.2rem;

    --box-shadow: 0 1.8rem 3rem var(--color-light);
}

main .new-users {
    margin-top: 3rem;
}

main .new-users p {
    margin-top: 2rem;
}


main .new-users .user-list {
    padding: var(--card-padding);
    border-radius: var(--card-border-radius);
    margin-top: 1rem;
    box-shadow: var(--box-shadow);
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 1.4rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

main .new-users .user-list:hover {
    box-shadow: none;
}



main .new-users .user-list .user:hover {
    box-shadow: none;
}

main .new-users .user-list .user img {
    width: 5rem;
    height: 5rem;
    margin-top: 1rem;
    margin-bottom: 0.4rem;
    border-radius: 50%;
}

main .recent-orders {
    margin-top: 2rem;
}

main .recent-orders h2 {
    margin-bottom: 0.8rem;
}

main .recent-orders table {
    background-color: var(--color-white);
    width: 100%;
    padding: var(--card-padding);
    text-align: center;
    box-shadow: var(--box-shadow);
    border-radius: var(--card-border-radius);
    transition: all 0.3s ease;
}

main .recent-orders table:hover {
    box-shadow: none;
}

main table tbody td {
    height: 4rem;
    border-bottom: 1px solid var(--color-light);
    color: var(--color-dark-variant);
}

main table tbody tr:last-child td {
    border: none;
}

main .recent-orders a {
    text-align: center;
    display: block;
    margin: 1rem auto;
    color: var(--color-primary);
}


.icone {
    margin-top: 3rem;
}

.dada {
    color: chartreuse;
}

.pend {
    color: red;
}



.subtitulo {
    margin-bottom: 10px;
    font-size: 1.2em;
}

.extra-space {
    height: 20px;
}
</style>
