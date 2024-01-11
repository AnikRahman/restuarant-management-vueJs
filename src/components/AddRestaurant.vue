<template>
    <div>
      <h1>Add Restaurant</h1>
      <div>
        <label for="restoname">Name:</label>
        <input v-model="restoname" id="restoname" />
  
        <label for="location">Location:</label>
        <input v-model="location" id="location" />
  
        <label for="cuisine">Cuisine:</label>
        <input v-model="cuisine" id="cuisine" />
  
        <button @click="addRestaurant">Add Restaurant</button>
      </div>
      <p>
        <router-link to="/">Back To Home</router-link>
      </p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'AddRestaurant',
    data() {
      return {
        restoname: '',
        location: '',
        cuisine: ''
      };
    },
    methods: {
      async addRestaurant() {
        console.log('Adding restaurant:', this.restoname);
        let result = await axios.post("http://localhost:3000/restaurants", {
          name: this.restoname,
          location: this.location,
          cuisine: this.cuisine
        });
  
        console.warn(result);
      }
    }
  };
  </script>
  
  <style scoped>
    /* Add your styles here */
  </style>
  