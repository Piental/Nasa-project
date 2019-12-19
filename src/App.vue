<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: whitesmoke;
  background-image: url(./assets/background.png);
  background-size: cover;
  margin: 0px;
  min-height: 667px;
  min-width: 375px;
  position: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
body {
  margin: 0%;
}
</style>
