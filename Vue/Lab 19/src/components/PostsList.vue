<template>
  <p v-if="error">
    {{error}}
  </p>
  <!-- <div v-if="loading"><Loader /></div> -->
  <div v-if="posts.length">
    <BlogPost v-for="post in posts" :key="post.id" :post="post" />
  </div>
  <p v-else>No posts to show</p>
</template>

<!-- <script setup>
import { ref } from 'vue'
import axios from 'axios'
import Loader from './Loader.vue'
import BlogPost from './BlogPost.vue'
  //http://localhost:3000/posts
  const posts = ref([])
  const error = ref(null)
  const loading = ref(false)

  const getPosts = async () => {
    loading.value = true
    try {
      error.value = null
      const res = await axios.get('http://localhost:3000/posts')
      if(res.status !== 200) {
        throw new Error(res.statusText)
      }

      posts.value = res.data
      loading.value = false
    } catch (err) {
      console.log(err.message)
      error.value = "Det gick inte att hämta inläggen"
      loading.value = false
    }
    
  }

  getPosts()
</script> -->
<script setup>
import { ref } from 'vue'
import axios from 'axios'
import Loader from './Loader.vue'
import BlogPost from './BlogPost.vue'
  //http://localhost:3000/posts
  const posts = ref([])
  const error = ref(null)
  const loading = ref(false)

    loading.value = true
    try {
      error.value = null
      const res = await axios.get('http://localhost:3000/posts')
      if(res.status !== 200) {
        throw new Error(res.statusText)
      }

      posts.value = res.data
      loading.value = false
    } catch (err) {
      console.log(err.message)
      error.value = "Det gick inte att hämta inläggen"
      loading.value = false
    }
    

</script>

<style scoped>

</style>