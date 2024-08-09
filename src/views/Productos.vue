<script setup>
    import NavBar from '../components/NavBar.vue'
    import ProductosLista from '../components/ListadoDeProductos.vue'

</script>

<template>
    <header>
        <header>
            <NavBar></NavBar>
        </header>
        <div class="container-fluid">
            <ProductosLista class="mt-5"></ProductosLista>
        </div>
    </header>
</template>