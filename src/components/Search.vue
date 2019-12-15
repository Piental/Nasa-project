<template>
  <div class="search" v-if="selectedRover !==''">
    <h2>Type in your search term</h2>
    <form @submit.prevent="getResult(query)">
      <input type="text" placeholder="Type in your search" v-model="query" />
    </form>
    <div class="results" v-if="results">
      <div v-bind:key="result.id" v-for="result in results">
        <img v-bind:src="result.links[0].href" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      msg: "Search Nasa",
      query: "",
      results: ""
    };
  },
  props: ["selectedRover"],
  methods: {
    getResult(query) {
      axios
        .get(
          "https://images-api.nasa.gov/search?q=" + query + "&media_type=image"
        )
        .then(response => {
          console.log(response.data.collection.items);
          this.results = response.data.collection.items;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
