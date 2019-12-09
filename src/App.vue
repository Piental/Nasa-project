<template>
  <div id="app">
    <Search/>
    <Rovers/>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import Rovers from './components/Rovers.vue'
export default {
  name: 'app',
  components: {
    Search,
   Rovers 
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
