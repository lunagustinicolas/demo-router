<template>
  <div>
    PRIMER PASO
    <div>
        <router-link to="/ultimo-paso">Siguiente</router-link>
        <router-link :to="{ path: '/segundo-paso'}">Siguiente</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: "",
      apellido: "",
    };
  },

};
</script>

<style>
</style>