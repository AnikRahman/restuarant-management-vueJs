<template>
    <h1>HomePage  Welcome You</h1>

    <p>
        <router-link to ="/sign-in">Go to Sign In</router-link>
      </p>

      <p>
        <router-link to ="/sign-Up">Go to Sign In</router-link>
      </p>
</template>

<script>
export default{
    name: 'HomePage',
    mounted(){
      let user = localStorage.getItem('user-info');
      if(!user){
        this.$router.push({name:'SignUp'})
      }
    }
}

</script>