<template>
  <div>
    <HeaderBar/>
    <h1>Hello {{username}}, Welcome !</h1> 
    <p>
      <router-link to="/sign-in">Go to Sign In</router-link>
    </p>
    <p>
      <router-link to="/sign-up">Go to Sign Up</router-link>
    </p>
  </div>
</template>

<script>
import HeaderBar from './HeaderBar.vue'; // Import HeaderBar component

export default {
  name: 'HomePage',
  data(){
    return{
      username:''
    }
  },
  components: {
    HeaderBar
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    this.username = JSON.parse(user).username;
    if (!user) {
      this.$router.push({ name: 'SignUp' });
    }
  }
}
</script>
