<script setup>
    import NavBar from '../components/NavBar.vue';
    import ClientesList from '../components/ClientesList.vue';
</script>

<template>
    <header>
        <NavBar></NavBar>
    </header>
    <div class="container">
      <h1 class="mt-3 mb-3">Listado de Clientes</h1>
      
      <ClientesList />
    </div>
  </template>