<template>
    <div>
      <h1>Sign In</h1>
      <form @submit.prevent="signIn">
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
  
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
  
        <button type="submit">Sign In</button>
      </form>
      <p>
        <router-link to="/sign-up">Don't have an account? Sign Up</router-link>
      </p>
    </div>
  </template>
  
  <script>
import axios from 'axios';

  export default {
    name: 'SignIn',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      async signIn() {
        console.log('Signing in with:', this.username, this.password);
        let result = await axios.get(`http://localhost:3000/users?username=${this.username}&password=${this.password}`)
        console.warn(result)

        if(result.status==200 && result.data.length > 0){
        localStorage.setItem("user-info",JSON.stringify(result.data[0]))
        this.$router.push({name:'HomePage'})
       }
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  