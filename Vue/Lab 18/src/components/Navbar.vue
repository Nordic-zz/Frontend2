
<template>
    <nav>
        <ul>
            <li class="logo">
                Lab 18
            </li>
            <li class="name" v-if="loggedIn">
                {{ name }}
            </li>
            <li class="name" v-if="!loggedIn">
                Logga in
            </li>
            <li class="logout" v-if="loggedIn">
                <form @submit.prevent="handleSubmit">
                    <button>Logga Ut</button>
                </form>
            </li>
        </ul>
    </nav>
  
</template>
<script>
    export default {
        props: ['name', 'loggedIn'],
        emits: ['log-out'],
        methods: {
            handleSubmit() {
                this.$emit('log-out')
            }
        }
    }
</script>

<style scoped>
form {
    margin: 0px;
}
nav {
    display: flex; 
    background-color: rgb(206, 205, 205);
}
ul {
    display: flex; 
    list-style: none;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 10px;
}
li {
    text-align: center;
    padding: 0px 30px;
}
li button{
    padding: 5px 15px;
    border-radius: 10px;
    border: 1px solid;
}
.logo {
    text-align: left;
}.name {
    text-align: center;
}.logout {
    text-align: right;
}
</style>