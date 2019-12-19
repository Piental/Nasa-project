<template>
  <div class="header">
    <img id="logo" src="../assets/nasa-logo.png" />
    <b id="title">Nasa's Mars Rovers Gallery</b>
    <div class="header-right">
      <router-link v-if="userName == ''" to="/Login">Login</router-link>
      <router-link v-if="userName !== ''" to="/Logout">Logout</router-link>
      <router-link to="/Chat">Chat</router-link>
    </div>
  </div>
</template>
<script>
import Login from "./Login.vue";
import Logout from "./Logout.vue";
export default {
  name: "Header",
  data() {
    return {
      userName: ""
    };
  },
  created() {
    this.userName = localStorage.username;
    console.log(this.userName);
  }
};
</script>

<style scoped>
.header {
  display: grid;
  grid-template-columns: 70px auto 100px;
  overflow: hidden;
  background-color: #000000;
  border-bottom: #ddd 1px solid;
  position: fixed;
  z-index: 2000;
}

#logo {
  stop-opacity: inherit;
  grid-column-start: 1;
  grid-column-end: 2;
  height: 50px;
  align-self: center;
}

.header a {
  float: left;
  color: whitesmoke;
  text-align: center;
  padding: 5px;
  align-self: center;
  text-decoration: none;
  font-size: 10px;
  line-height: 20px;
  border-radius: 4px;
}

#title {
  grid-column-start: 2;
  grid-column-end: 3;
  font-size: 16px;
  align-self: center;
}

.header a:hover {
  background-color: #ddd;
  color: black;
}

.header a.active {
  background-color: dodgerblue;
  color: white;
}

.header-right {
  grid-column-start: 3;
  grid-column-end: 4;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
}
</style>
