<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTheme } from '../../stores/theme';
import Close from '../icons/Close.vue';

const storeTheme = useTheme()
const {themesData, selectedTheme, showPaletteTheme} = storeToRefs(storeTheme)


function changeTheme (theme: string) {
  storeTheme.changeTheme(theme)
}

function closePaletteTheme() {
  storeTheme.handleShowPaletteTheme(false)
}

</script>


<template>
  <section class="themes-container" :style="{'background-color': selectedTheme.bgColor}" v-if="showPaletteTheme">
    <div v-for="(theme, key) in themesData" class="theme-container" @click="changeTheme(key.toString())">
      <div class="palette-container">
        <div :style="{'background-color': theme.bgColor}"> </div>
        <div :style="{'background-color': theme.fontColor}"> </div>
        <div :style="{'background-color': theme.cardBgColor}"> </div>
        <div :style="{'background-color': theme.btnSecondary}"> </div>
        <div :style="{'background-color': theme.btnPrimary}"> </div>
      </div>

      <div class="title-container">
        <span :style="{'color': selectedTheme.fontColor}"> {{ key.toString().toUpperCase() }} </span>
      </div>
    </div>

    <Close class="close" :color="selectedTheme.fontColor" @click="closePaletteTheme" />

  </section>
</template>

<style scoped> 
.themes-container {
  position: fixed;
  display: grid;
  overflow-x: scroll;
  flex-wrap: wrap;
  grid-template-columns: repeat(4, 1fr) 50px;
  gap: 20px;
  justify-content: center;
  height: 100px;
  padding: 10px;
  overflow: hidden;
  width: 100%;
  z-index: 200;
}

.theme-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
}

.title-container {
  font-size:  0.5rem;
  font-weight: bold;
}

.palette-container {
  border-radius: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  width: 100%;
  height: 70%;

  span {
    height: 100%;
  }
}

.close {
  align-self: center;
  height: 50px;
  width: 50px;
}

@media only screen and (min-width: 520px) {
  .title-container {
    font-size: 0.7rem;
  }
}
</style>
