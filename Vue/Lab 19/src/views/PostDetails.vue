<template>
  <p v-if="error">
    {{error}}
  </p>
  <div v-if="loading"><Loader /></div>

  <div v-if="post" class="post">
    <h2 class="title mb-1">{{ post.title }}</h2>
    <div class="content_info mb-1">
      <p>Author: {{ post.author }}</p>
    </div>
    <p class="body">{{ post.body }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue'
import axios from 'axios'
import Loader from '../components/Loader.vue';

  const { params: {id} } = useRoute()
  const post = ref(null)
  const error = ref(null)
  const loading = ref(false)


  const getPost = async () => {
    try {
      loading.value = true
      const res = await axios.get(`http://localhost:3000/posts/${id}`)
      if(res.status !== 200) {
        throw new Error(res.statusText)
      }
      console.log(res.data)
      post.value = res.data
      loading.value = false

    } catch (err) {
      console.log(err.message)
      error.value = "Det gick inte att hämta inlägget"
      loading.value = false
    }
    
  }

  getPost()

</script>

<style scoped>
  .title {
    text-align: center;
    font-size: 2rem;
  }
  .body {
    white-space: pre;
  }
</style>