<template>
  <h1>Ninja reaction timer</h1>
  <button @click="start" :disabled="isPlaying">play</button>
  <Block v-if='isPlaying' :delay="delay" @end="endGame" />
  <Results v-if='showResults' :score="score" />
</template>

<script>
import Block from './components/Block.vue'
import Results from './components/Results.vue'

export default {
  name: 'App',
  components: { Block, Results },
  data() {
    return {
      delay: null,
      score: null,
      isPlaying: false,
      showResults: false
    }
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() + 5000
      this.toggleFlags()
      this.showResults = false
    },
    endGame(reactionTime) {
      this.score = reactionTime
      this.toggleFlags()
    },
    toggleFlags() {
      this.isPlaying = !this.isPlaying
      this.showResults = !this.showResults
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
