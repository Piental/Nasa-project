<template>
  <div v-if="userName !== ''">
    <div class="flexbox">
      <div class="card text-white bg-dark mb-3">
        <h3>You are sucessfully logged in!</h3>
        <button class="btn btn-light">
          <router-link to="/">return to the main page</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Login",

  data() {
    return {
      userName: "",
      email: ""
    };
  },

  created() {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        this.userName = result.user.displayName;
        this.email = result.user.email;
        localStorage.username = this.userName;
        localStorage.email = this.email;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.flexbox {
  display: flex;
  align-content: center;
  height: 300px;
}

h3 {
  margin: 20px;
}

.card {
  border-radius: 15px;
  margin: auto 5% auto 5%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: rgba(0, 0, 0, 0.19) 2px solid;
}

.btn {
  margin: 20px;
}
</style>
