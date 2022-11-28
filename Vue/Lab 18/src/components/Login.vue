<template>
    
  <form @submit.prevent="handleSubmit">
    <input type="text" id="name" v-model="name">
    <br>
    <input type="password" id="password" v-model="password">
    <br>
    <p v-if="loggedIn">Logga ut för att logga in igen</p>
    <button v-else>Logga In</button>
  </form>
</template>

<script>
export default {
    props: ['loggedIn'],
    emits: ['show-name'],
    
    data() {
      return {
        name: '',
        password: ''
      }
    },
    methods: {
      handleSubmit() {
        this.$emit('show-name', this.name)
        this.name = ''
        this.password = ''
      }
    }
}
</script>
<style>

form {
    margin: 20px;
}
input {
    margin: 10px;
    padding: 5px;
}
form button {
    margin: 10px;
    padding: 5px 15px;
    border-radius: 10px;
    border: 1px solid;
    cursor: pointer;
}
</style>