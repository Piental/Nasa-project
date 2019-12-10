<template>
<div class="rovers">

    <h1>Rovers</h1>
 <button v-if="selectedRover !== ''" @click="goBack()">return</button>  
<div v-bind:key="rover.id" v-for="rover in rovers"> 
<div v-if="selectedRover == ''" v-bind="rover" @click="showSearch($event)">
<h2>{{rover.name}}</h2>
<p>Landing Date: {{rover.landing_date}}</p>
</div>
  </div>
   
<Images v-if="selectedRover !== ''" v-bind:selectedRover='selectedRover'/>
  </div>
</template>

<script>
import axios from 'axios' 
import Images from './Images.vue'
export default {
  name: 'Rovers',
  components: {
    Images
  },
  data () {
    return {
      rovers: [],
      selectedRover: ""
    }
  },
  methods: {
showSearch() {
this.selectedRover = event.toElement.firstChild.innerText;
console.log(event)},
goBack() {
  this.selectedRover="";
}

  },

  created()  {
          let url = "https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=Grpbub1rsWu0VD1sEedIHf8Eeh1qcawwg7rQ3e8l";
        axios.get(url).then( response => {
            console.log(response.data.rovers);
            this.rovers = response.data.rovers;
        })
        .catch(error => {
    console.log(error);
  })
      }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.results img {
    height: 300px;
    margin: 10px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>