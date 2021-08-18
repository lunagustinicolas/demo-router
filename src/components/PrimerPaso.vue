<template>
  <div>
    PRIMER PASO
    <div>
        <router-link to="/ultimo-paso">Siguiente</router-link>
        <router-link :to="{ path: '/segundo-paso/' + nombre + '/' + apellido, query: { s: 23, as:2}}">Siguiente</router-link>
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
  computed: {},
};
</script>

<style>
</style>