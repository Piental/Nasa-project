import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "jquery";
import "popper.js";
import VueRouter from "vue-router";
import firebase from "firebase/app";
import Login from "./components/Login.vue";
import Logout from "./components/Logout.vue";
import Home from "./components/Home.vue";
import Chat from "./components/Chat.vue";


Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyCiwzXkESA6NjYGftnDEdzYGqX4C1vUt6g",
  authDomain: "nasa-project-190f6.firebaseapp.com",
  databaseURL: "https://nasa-project-190f6.firebaseio.com",
  projectId: "nasa-project-190f6",
  storageBucket: "nasa-project-190f6.appspot.com",
  messagingSenderId: "1095526379845",
  appId: "1:1095526379845:web:475dc9344127438a43ce2c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



Vue.use(BootstrapVue);
Vue.use(VueRouter);

const routes = [{
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");