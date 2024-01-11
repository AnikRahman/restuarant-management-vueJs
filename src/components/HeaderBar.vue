<template>
    <div class="header-bar">
      <router-link to="/">Home</router-link>
      <router-link to="/add-restaurant">Add Restaurant</router-link>
      <router-link to="/update-restaurant">Update Restaurant</router-link>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeaderBar',
    methods: {
      logout() {
        localStorage.removeItem('user-info');
        this.$router.push({ name: 'SignIn' });
      }
    }
  }
  </script>
  
  <style scoped>
  .header-bar {
    background-color: #f0f0f0;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
  
  .router-link {
    margin-right: 10px;
  }
  </style>
  