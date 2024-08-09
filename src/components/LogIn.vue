<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const emailValido = ref(false);
const errorEmail = ref('');
const errorPassword = ref('');
const router = useRouter();

const validarEmail = () => {
  errorEmail.value = '';
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión para validar el formato de email, no permite espacios, no permite 2 @, etc.
  if (!emailPattern.test(email.value)) {
    errorEmail.value = 'Email inválido';
  } else if (email.value !== 'admin@istra.dor') {
    errorEmail.value = 'Email no encontrado';
  } else {
    emailValido.value = true;
  }
};

const validarPassword = () => {
  errorPassword.value = '';
  if (password.value.length < 8) {
    errorPassword.value = 'La contraseña debe tener al menos 8 caracteres';
  }
};

const puedeEnviar = computed(() => {
  return emailValido.value && password.value.length >= 8;
});

const login = () => {
  if (password.value === 'supersecreta') {
    alert('Inicio de sesión exitoso');
    localStorage.setItem('conectado', 'true'); //Al iniciar sesion se guarda el valor conectado como 'true' en LS.
    router.push('/home');
  } else {
    errorPassword.value = 'Contraseña incorrecta';
  }
};

// Verifico si el usuario ya está logueado
if (localStorage.getItem('conectado') === 'true') {
  router.push('/home');
}

</script>

<template>
  <div class="container mt-4">
    <h2 class="mb-4 text-center">Iniciar Sesión</h2>
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-4">
        <div v-if="!emailValido" class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" class="form-control" v-model="email" @input="validarEmail" />
          <p v-if="errorEmail" class="text-danger">{{ errorEmail }}</p>
        </div>
        <div v-else class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" class="form-control" v-model="password" @input="validarPassword" />
          <p v-if="errorPassword" class="text-danger">{{ errorPassword }}</p>
        </div>
        <button @click="login" class="btn btn-primary btn-block mt-2" :disabled="!puedeEnviar">Iniciar Sesión</button>
      </div>
    </div>
  </div>
</template>



