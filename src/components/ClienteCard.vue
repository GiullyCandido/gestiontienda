<script setup>

const props = defineProps({
  cliente: Object,
  filtro: String
});

const resaltarTexto = (texto, filtro) => {
  if (!filtro) return texto;
  // (expresión regular)
  //objeto RegExp(): 
  //`(${filtro})`: grupo de captura. Cualquier parte del texto que coincida con la variable filtro será capturada.
  //'gi': Estas son las banderas para la expresión regular. g: Búsqueda global, lo que significa que la expresión regular buscará todas las coincidencias en el texto, no solo la primera. i: Insensible(insensitive) a mayúsculas y minúsculas.
  const regex = new RegExp(`(${filtro})`, 'gi');
  // metodo .remplace: reemplaza las coincidencias encontradas por la expresión regular con el segundo argumento proporcionado.
  return texto.replace(regex, '<b>$1</b>');
  //"$1": Es una referencia al primer grupo de captura en la expresión regular. En este caso, es cualquier texto que coincida con filtro.
};
</script>

<template>
  <div class="cliente-card d-flex mb-4">
    <img :src="cliente.foto" alt="Foto de Cliente" class="foto-circular" />
    <div class="d-flex flex-column ms-3">
      <div class="d-flex align-items-center mb-2">
        <p class="mb-0 me-2 fw-bold">Nombre:</p>
        <p class="mb-0" v-html="resaltarTexto(cliente.nombre, filtro)"></p>
      </div>
      <div class="d-flex align-items-center mb-2">
        <p class="mb-0 me-2 fw-bold">Apellido:</p>
        <p class="mb-0" v-html="resaltarTexto(cliente.apellido, filtro)"></p>
      </div>
      <div class="align-items-center">
        <p class="mb-0 fw-bold">Fecha de la última compra:</p>
        <p class="mb-0 ml-2">{{ cliente.ultimaCompra }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.foto-circular {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>