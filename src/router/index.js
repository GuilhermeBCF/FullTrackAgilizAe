import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cadastro from '../components/Cadastro.vue'
import VoltarMotorista from '../components/VoltarMotorista.vue'

const routes = [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      component: () => import('../views/Dashboard.vue')
    },
    {
      path: '/motorista',
      component: () => import('../views/Motorista.vue')
    },
    {
      path: '/maps',
      component: () => import('../views/Maps.vue')
    },
    {
      path: '/cadastro',
      component: Cadastro
    },
    {
      path: '/voltar-motorista',
      component: VoltarMotorista
    }
];


const router = createRouter({
  history: createWebHistory(),
  routes  
});

export default router;
