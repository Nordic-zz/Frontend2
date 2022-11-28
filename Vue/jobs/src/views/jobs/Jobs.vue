<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
    <router-link :to="{ name: 'JobDetails', params: { id: job.id}}">
      <h2>{{ job.title }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
    data () {
        return {
            jobs: [
                { title: 'UX Designer', id: 1, details: 'Designing web pages'},
                { title: 'WEB Developer', id: 2, details: 'Coding web applications'},
                { title: 'Vue Developer', id: 3, details: 'Frontend coder'}
            ]
        }
    }
}
</script>

<style>

</style>