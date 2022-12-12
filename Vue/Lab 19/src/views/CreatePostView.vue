<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <h2 class="title">Create a new post</h2>

      <div class="form-group">
        <label for="title" class="form-label">Title: </label>
        <input type="text" class="form-control" id="title" v-model.trim="post.title">
        <p class="error" v-if="errors.title">Please enter a title</p>
      </div>

      <div class="form-group">
        <label for="body" class="form-label">Content: </label>
        <textarea class="form-control" id="body" v-model.trim="post.body"></textarea>
        <p class="error" v-if="errors.body">Please enter some content</p>
      </div>

      <div class="form-group">
        <label for="author" class="form-label">Author: </label>
        <select class="form-control" id="author" v-model="post.author">
          <option value="" selected disabled></option>
          <option v-for="author in authors" :key="author" :value="author">{{author}}</option>
        </select>
        <p class="error" v-if="errors.author">Please choose an author</p>
      </div>

      <button class="btn btn-primary">Create Post</button>
      
    </form>
    
  </div>
</template>

<script setup>
  import axios from 'axios'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router';

  const router = useRouter()

  const post = ref({
    title: '',
    body: '',
    imgUrl: '',
    categories: [''],
    author: ''
  })
  const errors = ref({
    title: false,
    body: false,
    imgUrl: false,
    categories: false,
    author: false
  })
  const authors = ref(['Christer', 'Annan'])

  const handleSubmit = async () => {
    
    errors.value.title = !post.value.title ? true : false
    errors.value.body = !post.value.body ? true : false
    errors.value.imgUrl = !post.value.imgUrl ? true : false
    errors.value.author = !post.value.author ? true : false
    // if(!post.value.categories.length || !post.value.categories[0]) {
    if(!post.value.categories.length || post.value.categories.findIndex(t => t=='') !== -1) {
      errors.value.categories = true
    } else {
      errors.value.categories = false
    }


    // if(errors.value.title || errors.value.body || errors.value.imgUrl || errors.value.categories || errors.value.author) {
    //   console.log('fel i formuläret')
    //   return
    // }

    if(Object.values(errors.value).includes(true)) {
      console.log('fel i formuläret')
      return
    }

    const res = await axios.post('http://localhost:3000/posts', post.value)
    if(res.status === 201) {
      router.push({ name: 'home' })
    }

  }

  const addCategory = () => {
    post.value.categories.push('')
  }

  const removeCategory = (i) => {
    post.value.categories.splice(i, 1)
  }

</script>

<style scoped>
  .create {
    margin-bottom: 2rem;
  }
  .title {
    text-align: center;
    font-size: 1.8rem;
  }
  .form-group {
    margin-bottom: 2rem;
  }
  .form-label {
    display: block;
    margin-bottom: .5rem;
  }
  .form-control {
    width: 100%;
    display: block;
  }
  .error {
    font-size: .9rem;
    color: firebrick;
    margin-top: .4rem;
  }
  textarea {
    resize: none;
    height: 250px;
    overflow: auto;
  }
  .input-group {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  .fa-trash {
    color: firebrick;
    font-size: 1.2rem;
  }
</style>