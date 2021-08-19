<template>
  <div>
    <input type="text" v-model="nombre" />
    <input type="text" v-model="apellido" />

    <div>
        <router-link :to="{ path: '/segundo-paso/' + nombre + '/' + apellido}">Siguiente</router-link>
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