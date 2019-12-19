<template>
  <div>
    <div class="title">Chat</div>
    <h3 v-if="userName == ''">Please login first!</h3>
    <button class="btn btn-light">
      <router-link to="/">return to the main page</router-link>
    </button>
    <div v-if="userName !== ''" class="container">
      <p class="h3 text-primary mt-5">Basic chat example</p>

      <div id="isLogin" class="mt-5">
        <div id="chat">
          <p>Simple chat example</p>
          <input id="message" type="text" v-model="msg" />
          <button class="btn btn-light" v-on:click="writePosts()">Send post</button>
        </div>
      </div>
      <div v-bind:key="message.id" v-for="message in messages">
        <p>{{message.msg}}</p>
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
    }
  },
  created() {
    this.userName = localStorage.username;
    this.email = localStorage.email;

    let database = firebase.firestore();

    database
      .collection("chat")
      .get()
      .then(querySnapshot => {
        let posts = [];
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          posts.push(doc.data());
          // console.log(doc.id, " => ", doc.data());
        });
        this.messages = posts;
        console.log(this.messages[0].name);
      });
  }
};
</script>

<style scoped>
.title {
  padding: 10px;
  font-size: 24px;
}
</style>
