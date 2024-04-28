<script setup lang="ts">
defineProps<{
  color: string
}>()
</script>

<template>
  <div class="container-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path :fill="color" d="M2 3h3.5L12 15l6.5-12H22L12 21zm4.5 0h3L12 7.58L14.5 3h3L12 13.08z"/></svg>
    <span :style="{'color': color}"> VueJS </span>
  </div>
</template>
