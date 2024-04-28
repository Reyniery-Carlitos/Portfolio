<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useTheme } from '../../stores/theme';

const storeTheme = useTheme()

const { selectedTheme } = storeToRefs(storeTheme)

defineProps<{
  title: string,
  quantity?: number
}>()

</script>

<template>
  <div class="tag" :style="{'background-color': selectedTheme.tagBgColor, 'color': selectedTheme.tagColor}">
    <span> {{ title }} {{ quantity ? `(${quantity})` : null }} </span>
  </div>
</template>

<style scoped>
  .tag {
    width: 150px;
    text-align: center;
    padding: 7px;
    border-radius: 20px;
    cursor: pointer;
  }
</style>