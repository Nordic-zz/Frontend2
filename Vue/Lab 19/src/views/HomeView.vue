<template>
  <div>
    <Suspense>
      <PostsList />

      <template #fallback>
        <Loader />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
  import Loader from '../components/Loader.vue';
import PostsList from '../components/PostsList.vue'


</script>

<style scoped>

</style>
