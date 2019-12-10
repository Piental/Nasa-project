<template>
<div>
    <form @submit="addDate">
        <input v-model='date' name='date' type="date" min="2000-01-02">
        <input type="submit" value="submit" class="btn">
    </form> 
<p>{{selectedRover}}</p>
    <div v-bind:key="result.id" v-for="result in results">
        <img v-bind:src="result.img_src" />
    </div>
</div>    
</template>

<script>
import axios from 'axios';
export default {
name: "Images",
data () {
return {
date:'',
results: ''
    }
  },
props:["selectedRover"],

methods: {

addDate(e) {
    e.preventDefault();
    console.log(this.date);
    axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=' + this.date + '&api_key=Grpbub1rsWu0VD1sEedIHf8Eeh1qcawwg7rQ3e8l').then(response => {
    console.log(response.data.photos);
    this.results = response.data.photos;
});
      } 
    }
}
</script>
<style scoped>

</style>