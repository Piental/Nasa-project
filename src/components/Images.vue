<template>
  <div>
    <div class="info">
      <img v-if="this.selectedRover.name == 'Curiosity'" src="../assets/curiosity_cameras.jpg" />
      <img v-else src="../assets/spirit_cameras.jpg" />
    </div>
    <div class="card text-white bg-dark mb-3">
      <h5>Search for the pictures:</h5>
      <form @submit="addDate">
        <div class="flexcontainer">
          <input class="date form-control" v-model="date" name="date" type="date" min="2000-01-02" />
          <div class="input-group-append">
            <select
              v-model="camera"
              class="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <option class="dropdown-item">All cameras</option>
              <option
                v-bind:key="camera.id"
                v-for="camera in selectedRover.cameras"
                class="dropdown-item"
              >{{camera.name}}</option>
            </select>
          </div>

          <input type="submit" value="Search" class="btn btn-outline-info" />
        </div>
      </form>
    </div>
    <div v-bind:key="result.id" v-for="result in results">
      <img v-bind:src="result.img_src" />
      <div>
        <p v-bind="results">Photo ID: {{result.id}}</p>
        <p v-bind="results">Earth date: {{result.earth_date}}</p>
        <p v-bind="results">Sol: {{result.sol}}</p>
        <p v-bind="results">Camera full name: {{result.camera.full_name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Images",
  data() {
    return {
      date: "",
      camera: "All cameras",
      results: "",
      cameraKey: ""
    };
  },
  props: ["selectedRover"],

  methods: {
    addDate(e) {
      if (this.camera != "All cameras") {
        this.cameraKey = "&camera=";
      }
      e.preventDefault();
      axios
        .get(
          "https://api.nasa.gov/mars-photos/api/v1/rovers/" +
            this.selectedRover.name +
            "/photos?earth_date=" +
            this.date +
            this.cameraKey +
            this.camera +
            "&api_key=Grpbub1rsWu0VD1sEedIHf8Eeh1qcawwg7rQ3e8l"
        )
        .then(response => {
          this.results = response.data.photos;
        });
      this.cameraKey = "";
    }
  }
};
</script>
<style scoped>
.flexcontainer {
  display: flex;
  justify-content: space-around;
}
.card {
  margin: 9px;
}
.date {
  width: 140px;
}
img {
  width: 356px;
  padding: 2px 2px;
}
</style>