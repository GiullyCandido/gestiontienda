<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const logout = () => {
    localStorage.removeItem('conectado');  //Al desconectarse se borra 'conectado' de localS.
    router.push('/');
    };
</script>

<template>
    <nav class="navbar navbar-expand-lg colorNavB">
        <div class="container-fluid">
            <RouterLink to="/home" class="navbar-brand fw-bolder">Gestión de Comercio </RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item m-2">
                    <RouterLink to="/clientes" class="navbar-brand">Clientes</RouterLink>
                </li>
                <li class="nav-item m-2">
                    <RouterLink to="/productos" class="navbar-brand">Productos</RouterLink>
                </li>
                <li class="nav-item m-2">
                    <button @click="logout" type="button" class="btn btn-outline-danger">Cerrar Sesión</button>
                </li>
            </ul>
            </div>
        </div>
    </nav>    
</template>

<style>
 .colorNavB{
    background-color: rgb(213, 211, 255);
 }
</style>