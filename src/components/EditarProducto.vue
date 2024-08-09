<script setup>
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const producto = ref(null);
const errores = ref({});

const productosData = JSON.parse(localStorage.getItem('productos')) || [];

// Contador de caracteres
const maxNombreLength = 100;
const nombreLength = computed(() => producto.value?.nombre?.length || 0);
const nombreCharsLeft = computed(() => maxNombreLength - nombreLength.value);

//validar antes de alterar
const validarProducto = () => {
  errores.value = {};

  // Expresión regular para validar letras, números, espacios y caracteres acentuados
  const nombreValido = /^[a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ\s]+$/;

  
  if (!producto.value.nombre || producto.value.nombre.length < 10 || producto.value.nombre.length > 100) {
    errores.value.nombre = 'El nombre debe tener entre 10 y 100 caracteres.';
  } 
  else if (!nombreValido.test(producto.value.nombre)) {
    errores.value.nombre = 'El nombre solo puede contener letras, números, espacios y caracteres acentuados.';
  }

  if (!producto.value.precio || producto.value.precio < 0) {
    errores.value.precio = 'El precio debe ser un número positivo.';
  }

  if (!Number.isInteger(producto.value.stock) || producto.value.stock < 0) {
    errores.value.stock = 'El stock debe ser un número entero positivo.';
  }

  return Object.keys(errores.value).length === 0;
};

const guardarCambios = () => {
  if (validarProducto()) {
    const index = productosData.findIndex(p => p.nombre === producto.value.nombre);
    if (index !== -1) {
      productosData[index] = producto.value;
      localStorage.setItem('productos', JSON.stringify(productosData));
      router.push('/productos');
    }
  }
};

// Cambiar color de los inputs:
const nombreInputClass = computed(() => {
  if (!producto.value.nombre) return 'is-invalid';
  if (producto.value.nombre.length < 10 || producto.value.nombre.length > 100) return 'is-invalid';
   // Expresión regular para validar letras, números, espacios y caracteres acentuados
  const nombreValido = /^[a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ\s]+$/;
  if (!nombreValido.test(producto.value.nombre)) return 'is-invalid';

  return 'is-valid';
});

const precioInputClass = computed(() => {
  if (!producto.value.precio) return '';
  if (producto.value.precio < 0) return 'is-invalid';
  return 'is-valid';
});

const stockInputClass = computed(() => {
  if (!Number.isInteger(producto.value.stock) || producto.value.stock < 0) return 'is-invalid';
  return 'is-valid';
});

// Renderizar el producto que se va a editar, 
// Busca en el array productosData el primer producto cuyo nombre coincida exactamente con el nombre que se pasa en la URL(params) .
producto.value = productosData.find(p => p.nombre === route.params.nombre);

const eliminarProducto = () => {
  const index = productosData.findIndex(p => p.nombre === route.params.nombre);
  //findIndex: si este metodo no encontra el indice del producto en el erray, devuelve -1.
  if (index !== -1) {
    //elimino del array "temporario" productosData.
    productosData.splice(index, 1);
    //actualizo el localStorage
    localStorage.setItem('productos', JSON.stringify(productosData));
    router.push('/productos');
  }
};
</script>

<template>
  <div v-if="producto" class="container mt-4 col-lg-6 col-sm-12">
    <form @submit.prevent="guardarCambios" class="border p-4 rounded bg-light">
      <div class="mb-3 text-center">
        <img :src="`../src/assets/fotos_productos/${producto.foto}`" alt="Foto del producto" class="img-fluid rounded mb-3 w-50 mx-auto" />
      </div>

      <!-- Nombre del Producto -->
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre:</label>
        <input
          id="nombre"
          v-model="producto.nombre"
          type="text"
          class="form-control"
          :class="nombreInputClass"
          placeholder="Ingrese el nombre del producto"
        />
        <div v-if="errores.nombre" class="form-text text-danger">{{ errores.nombre }}</div>
        <div class="form-text">{{ nombreCharsLeft }} caracteres restantes</div>
      </div>

      <!-- Precio -->
      <div class="mb-3">
        <label for="precio" class="form-label">Precio:</label>
        <input
          id="precio"
          v-model.number="producto.precio"
          type="number"
          step="0.01"
          class="form-control"
          :class="precioInputClass"
          placeholder="Ingrese el precio del producto"
        />
        <div v-if="errores.precio" class="form-text text-danger">{{ errores.precio }}</div>
      </div>

      <!-- Stock -->
      <div class="mb-3">
        <label for="stock" class="form-label">Stock:</label>
        <input
          id="stock"
          v-model.number="producto.stock"
          type="number"
          class="form-control"
          :class="stockInputClass"
          placeholder="Ingrese el stock del producto"
        />
        <div v-if="errores.stock" class="form-text text-danger">{{ errores.stock }}</div>
      </div>

      <div class="d-flex justify-content-between mb-3">
        <button @click="eliminarProducto" class="btn btn-danger">Eliminar Producto</button>
        <button type="submit" class="btn btn-primary">Guardar Cambios</button>
      </div>
    </form>
  </div>
</template>

<style>
.is-invalid {
  border-color: red;
}
.is-valid {
  border-color: green;
}
</style>
