<template>
  <div class="rovers">
    <h1>Rovers</h1>
    <button class="btn btn-light" v-if="selectedRover !== ''" @click="goBack()">return</button>
    <div class="CardContainer" v-bind:key="rover.id" v-for="rover in rovers">
      <div
        class="card text-white bg-dark mb-3"
        type="submit"
        v-bind="rover"
        v-if="selectedRover == '' || selectedRover.name == rover.name"
        @click="showSearch(rover)"
      >
        <div class="card-body">
          <h2 class="card-title">{{ rover.name }}</h2>
          <h6 class="card-subtitle" v-if="selectedRover !== ''">Launch Date: {{ rover.launch_date }}</h6>
          <h6
            class="card-subtitle"
            v-if="selectedRover !== ''"
          >Landing Date: {{ rover.landing_date }}</h6>
          <h6
            class="card-subtitle"
            v-if="selectedRover !== ''"
          >Latest pictures from: {{ rover.max_date }}</h6>
          <h6 class="card-subtitle" v-if="selectedRover !== ''">Status: {{ rover.status }}</h6>
        </div>
      </div>
    </div>
    <Images class="image" v-if="selectedRover !== ''" v-bind:selectedRover="selectedRover" />
    <Search v-if="selectedRover == ''" v-bind:selectedRover="selectedRover" />
  </div>
</template>

<script>
import axios from "axios";
import Search from "./Search.vue";
import Images from "./Images.vue";
export default {
  name: "Rovers",
  components: {
    Images,
    Search
  },
  data() {
    return {
      rovers: [],
      selectedRover: []
    };
  },
  methods: {
    showSearch(rover) {
      console.log(rover);
      this.selectedRover = rover;
    },
    goBack() {
      this.selectedRover = "";
    }
  },

  created() {
    this.selectedRover = "";
    let url =
      "https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=Grpbub1rsWu0VD1sEedIHf8Eeh1qcawwg7rQ3e8l";
    axios
      .get(url)
      .then(response => {
        console.log(response.data.rovers);
        this.rovers = response.data.rovers;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 97%;
  margin: 8px auto 0 auto;
}

h6 {
  margin: 2px;
}
h1 {
  padding-top: 55px;
}

.btn {
  height: 45px;
  width: 97%;
  padding: 2px 2px;
}
</style>
