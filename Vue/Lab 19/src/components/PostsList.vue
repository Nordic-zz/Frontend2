<template>
  <p v-if="error">
    {{error}}
  </p>
  <div v-if="posts.length">
    <BlogPost v-for="post in posts" :key="post.id" :post="post" />
  </div>
  <p v-else>No posts to show</p>
</template>

<script setup>
import { ref, watch } from 'vue'
import axios from 'axios'
import BlogPost from './BlogPost.vue'
import { useRoute } from 'vue-router';

  const posts = ref([])
  const error = ref(null)  
  const route = useRoute()

  const getPosts = async () => {
    try {
      error.value = null
      console.log('query = ' + route.query.searchQuery)

      const url = route.query.searchQuery 
      ? `http://localhost:3000/posts?q=${route.query.searchQuery}`
      : 'http://localhost:3000/posts'

      const res = await axios.get(url)
      if(res.status !== 200) {
        throw new Error(res.statusText)
      }

      posts.value = res.data
      
    } catch (err) {
      console.log(err.message)
      error.value = "Det gick inte att hämta inläggen"
    }    
  }
  await getPosts()
  watch(() => route.query, getPosts)
</script> -->

<style scoped>

</style>