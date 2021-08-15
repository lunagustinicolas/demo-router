<template>
  <div>
    <input type="text" v-model="nombre" />
    <input type="text" v-model="apellido" />

    <div>
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