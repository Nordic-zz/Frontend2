<template>  
  <p>Reaction time: {{ score }} ms</p>
  <p>{{ rank }}</p>
</template>

<script>
export default {
    props: ['score'],
    data () {
        return {
            rank: null
        }
    },
    mounted() {
        if (this.score < 300)
            this.rank = "Don't cheat!"
        else if (this.score < 350)
            this.rank = "Awesome!"
        else if (this.score < 400)
            this.rank = "You can do better"
        else 
            this.rank = "Wake up!"
    }
}
</script>

<style>

</style>

