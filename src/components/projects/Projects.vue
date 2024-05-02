<script setup lang="ts">
// import { Ref, ref } from 'vue';
import { storeToRefs } from 'pinia';

import { usePersonalInfo } from '../../stores/personal';
import { useTheme } from '../../stores/theme';
// import { type Info2 } from '../../interfaces/personal';

import Tag from './Tag.vue'
import Card from './Card.vue';
// import Modal from '../modal/Modal.vue';

const store = usePersonalInfo()
const storeTheme = useTheme()

const {data, filteredProjects, counterTags} = storeToRefs(store)
const {selectedTheme} = storeToRefs(storeTheme)

// const showModal: Ref<boolean> = ref(false)
// const projectSelected: Ref<Info2 | null> = ref(null)

function filterProjects (tag: string) {
  store.filterProjectsByTag(tag)
}

// function handleShowModal(project: Info2) {
//   showModal.value = true
//   projectSelected.value = project
// }
</script>

<template> 
  <section class="projects-container" :id="data.navItems[2]" :style="{'background-color': selectedTheme.bgColor}">
    <div class="title-container">
      <h2 :style="{'color': selectedTheme.fontColor}"> {{ data.projects.title }} </h2>
      <p :style="{'color': selectedTheme.fontColor}"> {{ data.projects.description }} </p>
    </div>

    <div class="tags-container">
      <Tag v-for="tag of data.tags" :key="tag" :title="tag" :quantity="counterTags[tag]" @click="filterProjects(tag)" />
    </div>

    <div class="cards-container">
      <Card v-for="project of filteredProjects" :title="project.title" :img="project.img" :description="project.description" :tags="project.tags" :urls="project.urls" />
    </div>
  </section>
</template>

<style scoped>
.title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  justify-self: center;
  z-index: 20;

  h2 {
    font-size: 3rem;
  }

  p {
    font-size: 1.2rem;
    margin-top: 10px;
  }
}

.projects-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-bottom: 50px;
  width: 100%;
}

.tags-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  flex-wrap: wrap;
  gap: 10px;
  z-index: 20;
}

.cards-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  width: 80%;
  z-index: 20;
}

@media only screen and (min-width: 768px) {
  .cards-container {
    grid-template-columns: repeat(2, 50%);
  }
}

@media only screen and (min-width: 1024px) {
  .cards-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media only screen and (min-width: 1280px) {
  .cards-container {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>