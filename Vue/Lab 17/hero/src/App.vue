<template>
  <Nav />
  <Hero />
  <Footer />
</template>

<script>
import Nav from './components/Nav.vue'
import Hero from './components/Hero.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Hero,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
