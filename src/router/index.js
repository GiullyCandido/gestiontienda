import { createRouter, createWebHistory } from 'vue-router';
import LogInAdmin from '../views/LogInAdmin.vue';
import HomeAdmin from '../views/HomeAdmin.vue';
import Clientes from '../views/Clientes.vue';
import Productos from '../views/Productos.vue';
import EditarProducto from '../views/EditarProducto.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'logIn',
      component: LogInAdmin
    },
    {
      path: '/home',
      name: 'home',
      component: HomeAdmin,
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: Clientes,
    },
    {
      path: '/productos',
      name: 'productos',
      component: Productos,
    },
    {
      path: '/editar-producto/:nombre',
      name: 'EditarProducto',
      component: EditarProducto,
      props: true
    } 
  ]
})

export default router
