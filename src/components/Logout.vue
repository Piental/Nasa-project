<template>
  <div v-if="userName == ''">
    <div class="flexbox">
      <div class="card text-white bg-dark mb-3">
        <h3>You are logged out!</h3>
        <button class="btn btn-light">
          <router-link to="/">return to the main page</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Logout",

  data() {
    return {
      userName: ""
    };
  },

  created() {
    localStorage.username = this.userName;
    console.log(localStorage.username);
  }
};
</script>

<style scoped>
.flexbox {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: auto;
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
