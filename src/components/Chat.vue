<template>
  <div>
    <div id="top">
      <div class="card text-white bg-dark mb-3">
        <h3 class="title">Chat</h3>
        <button class="btn btn-light">
          <router-link to="/">return to the main page</router-link>
        </button>
      </div>
      <h3 v-if="userName == ''">Please login first!</h3>
      <div v-if="userName !== ''" class="container">
        <div class="card text-white bg-dark mb-3">
          <input
            id="message"
            class="form-control"
            placeholder="send a message!"
            type="text"
            v-model="msg"
          />
          <button class="btn btn-light" v-on:click="writePosts()">send</button>
        </div>

        <div v-bind:key="message.id" v-for="message in messages">
          <h6>{{message.name}}:</h6>
          <div class="card text-dark bg-light mb-3">
            <p>{{message.msg}}</p>
            <p>{{message.date.seconds}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import * as firestore from "firebase/firestore";
export default {
  name: "Chat",
  data() {
    return {
      userName: "",
      msg: "",
      email: "",
      date: "",
      messages: []
    };
  },
  methods: {
    writePosts() {
      let database = firebase.firestore();
      let postData = {
        name: this.userName,
        email: this.email,
        msg: this.msg,
        date: new Date()
      };
      console.log(postData);
      // Add a new document with a generated id.
      database
        .collection("chat")
        .add(postData)
        .then(docRef => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(error => {
          console.error("Error adding document: ", error);
        });
      this.msg = "";
      // Call the posts to refresh the page.
      database
        .collection("chat")
        .orderBy("date")
        .get()
        .then(querySnapshot => {
          let posts = [];
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            posts.unshift(doc.data());
            // console.log(doc.id, " => ", doc.data());
          });
          this.messages = posts;
        });
    }
  },
  created() {
    this.userName = localStorage.username;
    this.email = localStorage.email;

    let database = firebase.firestore();

    database
      .collection("chat")
      .orderBy("date")
      .get()
      .then(querySnapshot => {
        let posts = [];
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          posts.unshift(doc.data());
          // console.log(doc.id, " => ", doc.data());
        });
        this.messages = posts;
        console.log(Date(this.messages[0].date.seconds));
      });
  }
};
</script>

<style scoped>
#top {
  padding: 15px;
}
.title {
  font-size: 24px;
}

.card {
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: rgba(0, 0, 0, 0.19) 2px solid;
  word-wrap: break-word;
}

.card .btn {
  margin: 20px auto 0px auto;
  min-width: 120px;
}

.card p {
  text-align: left;
  margin: 1px;
  width: auto;
}

h6 {
  text-align: left;
  margin-bottom: 1px;
  margin-top: 5px;
  margin-left: 10px;
}
</style>
