<script setup lang="ts">
import { Url } from '../../interfaces/personal';
import Tag from './Tag.vue';
import { useTheme } from '../../stores/theme';
import { storeToRefs } from 'pinia';

const storeTheme = useTheme()
const {selectedTheme} = storeToRefs(storeTheme)

defineProps<{
  img: string,
  title: string,
  tags: string[],
  description: string,
  urls: Array<Url>
}>()

</script>

<template>
  <div class="card" :style="{'background-color': selectedTheme.cardBgColor}">
    <div class="img-container">
      <img :src="img" alt="Project img">
    </div>

    <div class="info-container">
      <h3 :style="{'color': selectedTheme.fontColor}"> {{ title }} </h3>

      <div class="tag-container">
        <Tag class="tag" v-for="tag of tags" :title="tag" :key="tag" />
      </div>

      <p :style="{'color': selectedTheme.fontColor}"> {{ description }} </p>
    </div>

    <div class="button-container">
      <template v-for="u of urls" :key="u.url">
        <a target="__blank" :style="{'background-color': selectedTheme.btnPrimary, 'color': selectedTheme.btnPrimaryFontColor}" :href="u.url" v-if="u.url !== ''"> {{ u.title }} </a>
      </template>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding-bottom: 25px;
  width: 100%;

  .img-container {
    text-align: center;
    width: 100%;
  }

  img {
    object-fit: cover;
    max-width: 100%;
    height: 300px;
  }
}

.info-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 10px;
  height: 70%;
  width: 100%;

  h3 {
    font-size: 1.5rem;
  }

  p {
    line-height: 25px;
  }
}

.tag-container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.button-container {
  display: flex;
  padding-top: 20px;
  gap: 20px;

  a {
    text-decoration: none;
    padding: 10px 25px;
    border-radius: 10px;
    border: none;
    font-weight: bold;
    font-size: 1rem;
  }
}

.tag {
  width: auto;
  padding: 4px 10px;
}


</style>