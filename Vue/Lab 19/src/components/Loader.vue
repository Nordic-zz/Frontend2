<template>
  <div class="spinner"></div>
</template>

<style scoped>
.spinner {
  width: 40px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid transparent;
  border-top-color: rgb(51, 51, 88);
  border-bottom-color: rgb(51, 51, 88);
  animation: spin 600ms infinite ease;
}

@keyframes spin {
  from { rotate: 0deg;}
  to { rotate: 360deg; }
}
</style>