<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>
      <router-link to="/">UNO</router-link>
    </div>
    <div>
      <router-link to="/segundo-paso">DOS</router-link>
    </div>
    <div>
      <router-link to="/ultimo-paso">ULTIMO</router-link>
    </div>
    <!--<router-link :to="{ path: '/segundo-paso'}">Siguiente</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

