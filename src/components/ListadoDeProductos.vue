<script setup>
  import { ref, computed, onMounted } from 'vue';

  const productos = ref([]);
  const filtro = ref('');
  const criterioOrden = ref('Ordenar');

  const stockClase = (stock) => {
    if (stock === 0) return 'rojo';
    if (stock < 4) return 'amarillo';
    return 'verde';
  };

  const stockTexto = (stock) => {
    if (stock === 0) return 'agotado';
    if (stock < 4) return 'últimas unidades';
    return 'disponible';
  };

  function formatearPrecio(precio) {
  return precio.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  // Computed para filtrar y ordenar productos
  const productosFiltradosYOrdenados = computed(() => {
    let productosFiltrados = productos.value.filter(producto => 
      producto.nombre.toLowerCase().includes(filtro.value.toLowerCase())
    );

    //método sort(): ordena los elementos de un array in-place(sobreescribe) y devuelve el array ordenado, segun su valor Unicode.
    //toma dos elementos de la lista (denominados a y b) y los compara para decidir cuál va primero.
    //Sintax:
    //array.sort([compareFunction])
    //Si se provee compareFunction, los elementos del array son ordenados de acuerdo al valor que retorna dicha función de comparación. Siendo a y b dos elementos comparados, entonces:
    //Valor negativo: es menor que 0, se sitúa "a" en un indice menor que "b". Es decir, a viene primero.
    //Cero (0): a y b son considerados iguales.
    //Valor positivo: es mayor que 0, se sitúa b en un indice menor que a.

    return productosFiltrados.sort((a, b) => {
      switch (criterioOrden.value) {
        case 'stock-asc':
          return a.stock - b.stock;
        case 'stock-desc':
          return b.stock - a.stock;
        case 'precio-asc':
          return a.precio - b.precio;
        case 'precio-desc':
          return b.precio - a.precio;
        case 'nombre-asc':
          return a.nombre.localeCompare(b.nombre);
        case 'nombre-desc':
          return b.nombre.localeCompare(a.nombre);
        default:
          return 0;
      }
    });
  });

  const resaltarTexto = (texto, filtro) => {
    if (!filtro) return texto;
    const regex = new RegExp(`(${filtro})`, 'gi');
    return texto.replace(regex, '<b>$1</b>');
  };


  onMounted(() => {
    productos.value = JSON.parse(localStorage.getItem('productos')) || [];
  });
</script>

<template>
  <div>

    <div class="row mt-2">
      <div class="col-lg-9 col-sm-12 mb-2">
        <input class="form-control" type="text" v-model="filtro" placeholder="Buscar productos..." />
      </div>

      <div class="col-lg-3 col-sm-12">
        <select class="form-select" v-model="criterioOrden">\
          <option>Ordenar</option>
          <option value="nombre-asc">Nombre (A-Z)</option>
          <option value="nombre-desc">Nombre (Z-A)</option>
          <option value="precio-asc">Precio (Menor a Mayor)</option>
          <option value="precio-desc">Precio (Mayor a Menor)</option>
          <option value="stock-asc">Stock (Menor a Mayor)</option>
          <option value="stock-desc">Stock (Mayor a Menor)</option>
        </select>
      </div>
  </div>

  <div class="row mt-4">
    <div v-for="producto in productosFiltradosYOrdenados" :key="producto.nombre" class="col-lg-3 col-md-6 col-sm-12 mb-4">
      <div class="card h-100">
        <img :src="`../src/assets/fotos_productos/${producto.foto}`" class="card-img-top" :alt="producto.nombre" />
        <div class="card-body">
          <h5 class="card-title" v-html="resaltarTexto(producto.nombre, filtro)"></h5>
          <p class="card-text">ARS {{ formatearPrecio(producto.precio) }}</p>
          <p :class="stockClase(producto.stock)">
            Stock: {{ stockTexto(producto.stock) }}
          </p>
          <router-link :to="`/editar-producto/${producto.nombre}`" class="btn btn-primary">Alterar producto</router-link>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style>
  .rojo {
    color: red;
  }
  .amarillo {
    color: rgb(209, 209, 58);
  }
  .verde {
    color: green;
  }
</style>
