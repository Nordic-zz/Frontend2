<template>
  <div class="post">
    <div class="content">
      <h2 class="content_title mb-1">{{ post.title }}</h2>
      <div class="content_info mb-1">
        <p>Author: {{ post.author }}</p>
      </div>
      <p class="content_body">{{ bodySnippet }}</p>
      <RouterLink class="btn btn-primary bottom-right" :to="{ name: 'details', params: { id: post.id }}">Read more</RouterLink>
    </div>
  </div>
</template>

<!-- <script>
  export default {
    props: ['post'],
    setup(props) {
      console.log(props.post)
    }
  }
</script> -->
<script setup>
  import { computed } from 'vue'
  const props = defineProps(['post'])

  const bodySnippet = computed(() => {
    return props.post.body.substring(0, 75) + '...'
  })

</script>

<style scoped>
  .post {
    display: flex;
    background-color: #fff;
    border-bottom: 1px solid #c0c5ce;
  }
  .content {
    flex: 1;
    padding: 1rem 2rem;
    position: relative;
  }
 
  .content_title {
    text-align: center;
  }
  .bottom-right {
    position: absolute;
    bottom: 1.5rem;
    right: 2rem;
  }
</style>