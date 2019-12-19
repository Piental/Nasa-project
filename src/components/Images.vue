<template>
  <div class="info">
    <div class="card">
      <img v-if="this.selectedRover.name == 'Curiosity'" src="../assets/curiosity_cameras.jpg" />
      <img v-else src="../assets/spirit_cameras.jpg" />
    </div>
    <div class="card text-white bg-dark mb-3">
      <h5>Search for the pictures:</h5>
      <form @submit="addDate">
        <div class="flexcontainer">
          <span>Date:</span>
          <input class="date form-control" v-model="date" name="date" type="date" min="2000-01-02" />

          <b-form-select v-model="camera" id="cameras" class="btn btn-light">
            <option>All cameras</option>
            <option v-bind:key="camera.id" v-for="camera in selectedRover.cameras">{{ camera.name }}</option>
          </b-form-select>

          <input type="submit" value="Search" class="btn btn-primary" />
        </div>
      </form>
    </div>
    <div class="row">
      <div
        class="card text-white bg-dark col-xs-12 col-sm-6"
        v-bind:key="result.id"
        v-for="result in results"
      >
        <div v-b-modal="modalId(result)">
          <img v-bind:src="result.img_src" />
          <p v-bind="results">Photo ID: {{ result.id }}</p>
          <p v-bind="results">Earth date: {{ result.earth_date }}</p>
          <p v-bind="results">Sol: {{ result.sol }}</p>
          <p v-bind="results">Camera full name: {{ result.camera.full_name }}</p>
          <b-modal :id="'modal' + result">
            <b-img v-bind:src="result.img_src" />
          </b-modal>
        </div>
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
    modalId(result) {
      return "modal" + result;
    },
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
  flex-wrap: wrap;
  justify-content: center;
  top: 20px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: rgba(0, 0, 0, 0.795) 2px solid;
  width: 98%;
  margin: 0px auto;
}
.btn {
  margin: 5px;
  height: 40px;
  border-color: aliceblue;
}
.date {
  width: 200px;
  margin: 5px;
}
img {
  width: 100%;
}

h5 {
  padding: 5px;
}

p {
  margin-bottom: 0%;
}

.info {
  padding: 1px;
}

span {
  align-self: center;
  font-size: 18px;
}

.row {
  max-width: 667px;
  margin: 0px;
}

#cameras {
  width: 155px;
}
</style>
