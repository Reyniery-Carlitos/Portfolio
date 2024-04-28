<script setup lang="ts">
import React from '../icons/ReactIcon.vue'
import Tailwind from '../icons/Tailwind.vue'
import Vue from '../icons/Vue.vue'
import Html from '../icons/Html.vue'
import Typescript from '../icons/Typescript.vue'
import Bootstrap from '../icons/Bootstrap.vue'
import Nodejs from '../icons/Nodejs.vue'
import Expressjs from '../icons/Expressjs.vue'
import Laravel from '../icons/Laravel.vue'
import Git from '../icons/Git.vue'
import Python from '../icons/Python.vue'
import Mysql from '../icons/Mysql.vue'
import Css from '../icons/Css.vue';

import { storeToRefs } from "pinia";
import { useTheme } from "../../stores/theme";

const storeTheme = useTheme();
const { selectedTheme } = storeToRefs(storeTheme);
</script>

<template>
  <Html :color="selectedTheme.fontColor" />
  <Css :color="selectedTheme.fontColor" />
  <Tailwind :color="selectedTheme.fontColor" />
  <React :color="selectedTheme.fontColor" />
  <Vue :color="selectedTheme.fontColor" />
  <Typescript :color="selectedTheme.fontColor" />
  <Bootstrap :color="selectedTheme.fontColor" />
  <Nodejs :color="selectedTheme.fontColor" />
  <Expressjs :color="selectedTheme.fontColor" :secondary-color="selectedTheme.bgColor" />
  <Laravel :color="selectedTheme.fontColor" />
  <Python :color="selectedTheme.fontColor" />
  <Git :color="selectedTheme.fontColor" />
  <Mysql :color="selectedTheme.fontColor" />
</template>

<style>
.container-icon {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
}

.container-icon span {
  font-size: 2rem;
  font-weight: bold
}
</style>