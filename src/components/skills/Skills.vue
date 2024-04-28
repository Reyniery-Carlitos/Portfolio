<script setup lang="ts">
import { storeToRefs } from 'pinia';
import Card from './Card.vue'

import { usePersonalInfo } from '../../stores/personal';
import { useTheme } from '../../stores/theme';

const store = usePersonalInfo()
const storeTheme = useTheme()

const {selectedTheme} = storeToRefs(storeTheme)
const {data} = storeToRefs(store)
</script>

<template>
  <section :id="data.navItems[1]" :style="{'background-color': selectedTheme.bgColor}" class="skills-container">
    <div class="title-container" id="Skills">
      <h2 :style="{'color': selectedTheme.fontColor}"> {{ data.skills.title }} </h2>
      <p :style="{'color': selectedTheme.fontColor}"> {{ data.skills.description }} </p>
    </div>    
    <div class="cards-container">
      <Card />
    </div>
  </section>
</template>

<style scoped> 
.skills-container {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-bottom: 100px;
  width: 100%;
}

.title-container {
  text-align: center;
  align-self: center;
  width: 80%;

  h2 {
    font-size: 3rem;
  }

  p {
    font-size: 1.2rem;
    margin-top: 10px;
  }
}

.cards-container {
  display: grid;
  grid-template-columns: 1fr;
  align-self: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  width: 80%;
}

@media only screen and (min-width: 520px) {
  .cards-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (min-width: 768px) {
  .cards-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media only screen and (min-width: 1024px) {
  .cards-container {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media only screen and (min-width: 1280px) {
  .cards-container {
    grid-template-columns: repeat(5, 1fr);
  }
}

</style>