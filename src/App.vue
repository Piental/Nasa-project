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
  margin: 0px;
  min-width: 375px;
  min-height: 667px;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
body {
  padding-bottom: -20px;
}
</style>
