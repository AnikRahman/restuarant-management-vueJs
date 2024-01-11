<template>
    <div class="signup-container">
      <h1>SignUp</h1>
      <form>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" placeholder="Enter your username" />
        </div>
  
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" placeholder="Enter your email" />
        </div>
  
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" placeholder="Enter your password" />
        </div>
  
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="Confirm your password" />
        </div>
  
        <button @click.prevent="signUp">Sign Up</button>
      </form>

      <p>
        <router-link to ="/sign-in">Go to Sign In</router-link>
      </p>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    name: 'SignUp',
    data() {
      return {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      };
    },
    methods: {
      async signUp() {
       let result = await axios.post("http://localhost:3000/users",{
        username : this.username,
        email : this.email,
        password : this.password,
        confirmPassword:this.confirmPassword
       });
       console.warn(result);
       if(result.status==201){
        localStorage.setItem("user-info",JSON.stringify(result.data))
        this.$router.push({name:'HomePage'})
       }
      },
    },
    mounted(){
      let user = localStorage.getItem('user-info');
      if(user){
        this.$router.push({name:'HomePage'})
      }
    }
  };
  </script>
  
  <style scoped>
  .signup-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  h1 {
    color: #333;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    color: #555;
  }
  
  input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }
  
  button {
    background-color: #3498db;
    color: #fff;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #2980b9;
  }
  </style>
  