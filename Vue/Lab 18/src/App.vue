<template>
  <header>
    <Navbar 
      :name="name"
      :loggedIn="loggedIn"
      @log-out="handleLogOut"
    />
  </header>

  <main>
    <Login 
      :loggedIn="loggedIn"
      @show-name="handleName"
    />
  </main>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Login from './components/Login.vue';

  export default {
    components: {
      Navbar,
      Login
    },
    data() {
      return {
        name: '',
        loggedIn: false
      }
    },
    methods: {
      handleName(name) {
        this.name = name
        this.loggedIn = true
        console.log("this-name =" + this.name)
        console.log("name = " + name)
      },
      handleLogOut() {
        this.loggedIn = false
      }
    }
  }
</script>



<style scoped>
</style>
