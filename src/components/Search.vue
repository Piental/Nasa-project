<template>
  <div class="search">
    <div class="searchbar text-white bg-dark mb-3">
      <h4>Type in for the Nasa pictures of any object!</h4>
      <form @submit.prevent="getResult(query)">
        <input class="form-control" type="text" placeholder="Type in your search" v-model="query" />
        <input type="submit" value="Search" class="btn-lg btn-primary" />
      </form>
    </div>
    <div class="results" v-if="results">
      <div v-bind:key="result.id" v-for="result in results">
        <img class="img" v-bind:src="result.links[0].href" />
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
  methods: {
    getResult(query) {
      axios
        .get(
          "https://images-api.nasa.gov/search?q=" + query + "&media_type=image"
        )
        .then(response => {
          console.log(response.data.collection.items);
          this.results = response.data.collection.items;
          console.log(this.rover);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchbar {
  margin: 9px;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: rgba(0, 0, 0, 0.19) 2px solid;
  border-radius: 15px;
}
.img {
  width: 97%;
  margin: 9px auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: rgba(0, 0, 0, 0.795) 2px solid;
}

.btn-lg {
  margin: 10px;
}

h4 {
  margin: 10px;
}
</style>
