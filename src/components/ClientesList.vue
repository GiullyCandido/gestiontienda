<script setup>
import { ref, computed } from 'vue';
import ClienteCard from './ClienteCard.vue';

const clientes = ref([
  {
    "id": 1,
    "nombre": "Pablo",
    "apellido": "Paredes",
    "foto": "../src/assets/fotos_clientes/hombre1.png",
    "ultimaCompra": "10-05-2023"
  },
  {
    "id": 2,
    "nombre": "Ana",
    "apellido": "García",
    "foto": "../src/assets/fotos_clientes/mujer1.png",
    "ultimaCompra": "15-06-2023"
  },
  {
    "id": 3,
    "nombre": "Luis",
    "apellido": "Martínez",
    "foto": "../src/assets/fotos_clientes/hombre2.png",
    "ultimaCompra": "20-07-2023"
  },
  {
    "id": 4,
    "nombre": "Sofía",
    "apellido": "Rodríguez",
    "foto": "../src/assets/fotos_clientes/mujer2.png",
    "ultimaCompra": "05-08-2023"
  },
  {
    "id": 5,
    "nombre": "Javier",
    "apellido": "Hernández",
    "foto": "../src/assets/fotos_clientes/hombre1.png",
    "ultimaCompra": "10-09-2023"
  },
  {
    "id": 6,
    "nombre": "María",
    "apellido": "López",
    "foto": "../src/assets/fotos_clientes/mujer1.png",
    "ultimaCompra": "15-10-2023"
  },
  {
    "id": 7,
    "nombre": "Carlos",
    "apellido": "Gómez",
    "foto": "../src/assets/fotos_clientes/hombre2.png",
    "ultimaCompra": "20-11-2023"
  },
  {
    "id": 8,
    "nombre": "Laura",
    "apellido": "Pérez",
    "foto": "../src/assets/fotos_clientes/mujer2.png",
    "ultimaCompra": "25-12-2023"
  },
  {
    "id": 9,
    "nombre": "José",
    "apellido": "Fernández",
    "foto": "../src/assets/fotos_clientes/hombre1.png",
    "ultimaCompra": "30-01-2024"
  },
  {
    "id": 10,
    "nombre": "Elena",
    "apellido": "Torres",
    "foto": "../src/assets/fotos_clientes/mujer1.png",
    "ultimaCompra": "04-02-2024"
  },
  {
    "id": 11,
    "nombre": "Andrés",
    "apellido": "Ramírez",
    "foto": "../src/assets/fotos_clientes/hombre2.png",
    "ultimaCompra": "09-03-2024"
  },
  {
    "id": 12,
    "nombre": "Claudia",
    "apellido": "Cruz",
    "foto": "../src/assets/fotos_clientes/mujer2.png",
    "ultimaCompra": "14-04-2024"
  },
  {
    "id": 13,
    "nombre": "Fernando",
    "apellido": "Vázquez",
    "foto": "../src/assets/fotos_clientes/hombre1.png",
    "ultimaCompra": "19-05-2024"
  },
  {
    "id": 14,
    "nombre": "Natalia",
    "apellido": "Morales",
    "foto": "../src/assets/fotos_clientes/mujer1.png",
    "ultimaCompra": "24-06-2024"
  },
  {
    "id": 15,
    "nombre": "Miguel",
    "apellido": "Gutiérrez",
    "foto": "../src/assets/fotos_clientes/hombre2.png",
    "ultimaCompra": "29-07-2024"
  }
]
);

const filtro = ref('');

const clientesFiltrados = computed(() => {
  //filter es un método de array que crea un nuevo array con todos los elementos que pasan una prueba definida en una función.
  return clientes.value.filter(cliente => {
    const nombreCompleto = `${cliente.nombre} ${cliente.apellido}`.toLowerCase();
    //includes verifica si nombreCompleto contiene la cadena de filtro.value.
    return nombreCompleto.includes(filtro.value.toLowerCase());
  });
});
</script>

<template>
    <div>
      <div>
        <input class="form-control" type="text" v-model="filtro" placeholder="Buscar clientes..." />
      </div>
      <div v-for="cliente in clientesFiltrados" :key="cliente.id">
        <ClienteCard :cliente="cliente" :filtro="filtro" />
      </div>
    </div>
</template>

<style scoped>
input {
  margin-bottom: 1em;
  padding: 0.5em;
  width: 100%;
}
</style>