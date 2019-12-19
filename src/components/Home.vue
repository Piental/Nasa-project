<template>
  <div>
    <Header />
    <Rovers />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Rovers from "./Rovers.vue";

export default {
  name: "Home",
  components: {
    Header,
    Rovers
  },
  props: ["selectedRover"]
};
</script>

<style>
</style>
