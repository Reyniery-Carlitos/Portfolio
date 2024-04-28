<script setup lang="ts">
import { Info2 } from "../../interfaces/personal";

defineProps<{
  project: Info2 | null;
}>()
</script>

<template>
  <section class="modal-container">
    <div class="info-container">
      <h2>{{ project?.title }}</h2>
      <p>{{ project?.description }}</p>

      <div class="img-container">
        
      </div>
    </div>
  </section>
</template>

<style scoped>
.modal-container {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;
  height: 100%;
  width: 50%;
}

.img-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  width: 100%;

  img {
    width: 80%;
  }
}
</style>
