<template>
  <div>
  <input type="number" v-model="dni" />
  {{$route.query.as}}
<router-link :to="{ path: '/ultimo-paso/' + $route.params.nombre + '/' + $route.params.apellido + '/' + dni}">Siguiente</router-link>
  </div>

  
</template>

<script>
export default {
  data() {
    return {
        dni: "",
    };
  },
};
</script>

<style>
</style>