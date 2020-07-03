import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mesas from '../views/Mesas.vue'
import Contato from '../views/Contato.vue'
import Login from '../views/Login.vue'
import CriarConta from "../views/CriarConta.vue"
import Pedido from "../views/Pedido.vue"

Vue.use(VueRouter)

const routes = [
    {
    path: '/mesas',
    name: 'Mesas',
    component: Mesas
  },
  {
    path: '/contato',
    name: 'Contato',
    component: Contato
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/criarconta',
    name: 'CriarConta',
    component: CriarConta
  },
  {
    path: '/pedido',
    name: 'Pedido',
    component: Pedido
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
