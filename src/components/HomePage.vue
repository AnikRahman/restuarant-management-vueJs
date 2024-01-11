<template>
  <div>
    <HeaderBar/>
    <h1>HomePage Welcome You</h1> 
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
  components: {
    HeaderBar
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if (!user) {
      this.$router.push({ name: 'SignUp' });
    }
  }
}
</script>
