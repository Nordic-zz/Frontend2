<template>
  <div v-if="!showScam" class="backg">
    <button class="button" @click="scam">Sign up</button>
  </div>
  <div v-if="showScam" class="backg2"></div>
</template>

<script>
export default {
    data() {
        return {
            showScam: false
        }
    },
    methods: { 
        scam() {
            this.showScam = true
            console.log('Scam! Click on "Fact Check" to read more')
        }
    }

}
</script>

<style>
    .backg {
        background-image: url('../assets/qai.png');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: 100% 80%;
        min-height: 600px;
    }
    .backg2 {
        background-image: url('../assets/scam.jpg');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: 100% 80%;
        min-height: 600px;
    }
</style>