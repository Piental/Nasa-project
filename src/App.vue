<template>
  <div id="app">
    <Header />
    <Search v-bind:selectedRover="selectedRover" v-if="selectedRover==''" />
    <Rovers />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";
import Rovers from "./components/Rovers.vue";
export default {
  name: "app",
  components: {
    Header,
    Search,
    Rovers
  },
  props: ["selectedRover"]
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: whitesmoke;
  background-image: url(./assets/background.png);
  background-size: auto;
  margin: 0px;
  min-height: 720px;
}
body {
  margin: 0%;
}
</style>
