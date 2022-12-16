<template>
  <nav class="navbar container">
    <RouterLink to="/" class="navbar-brand">Christers Blog</RouterLink>
    <form @submit.prevent="handleSubmit" >
      <input type="search" class="form-control" placeholder="Search" v-model="searchQuery" >
      <button class="btn"><i class="fa-solid fa-magnifying-glass"></i></button>
    </form>
    <ul class="nav-links">
      <li><RouterLink to="/" class="link">Blogs</RouterLink></li>
      <li><RouterLink to="/create" class="btn btn-primary">Create new</RouterLink></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

  const router = useRouter()
  const searchQuery = ref('')

  const handleSubmit = () => {
    router.push({ name: 'home', query: { searchQuery: searchQuery.value }})
  }

</script>

<style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 2rem;
  }
  .navbar-brand {
    font-size: 2rem;
    color: #000;
    text-decoration: none;
    font-weight: 700;
  }
  .nav-links {
    display: flex;
    list-style: none;
    align-items: center;
    gap: 1rem;
  }
  .link {
    color: #000;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 700;
  }
</style>