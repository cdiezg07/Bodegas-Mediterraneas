import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Principal",
    component: () => import("../views/Principal.vue"),
  },
  {
    path: "/Login",
    name: "Login",

    component: () => import("../views/Login.vue"),
  },
  {
    path: "/Registro",
    name: "Registro",

    component: () => import("../views/Registro.vue"),
  },
  {
    path: "/MiPerfil",
    name: "MiPerfil",

    component: () => import("../views/MiPerfil.vue"),
  },
  {
    path: "/Evento",
    name: "Evento",

    component: () => import("../views/Evento.vue"),
  },
  {
    path: "/Producto",
    name: "Producto",

    component: () => import("../views/Producto.vue"),
  },
  {
    path: "/Tienda",
    name: "Tienda",

    component: () => import("../views/Tienda.vue"),
  },
  {
    path: "/Cesta",
    name: "Cesta",

    component: () => import("../views/Cesta.vue"),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
