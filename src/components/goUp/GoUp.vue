<script setup lang="ts">
import 'animate.css'
import { storeToRefs } from "pinia";
import { useTheme } from "../../stores/theme";

const storeTheme = useTheme();
const { selectedTheme } = storeToRefs(storeTheme);

</script>

<template>
  <div
    class="arrow-container animate__animated animate__bounceInUp animate__delay-1s "
    :style="{ 'background-color': selectedTheme.fontColor }"

  >
    <a href="#Intro">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="128"
        height="128"
        viewBox="0 0 24 24"
      >
        <path
          :fill="selectedTheme.bgColor"
          d="m11 8.8l-2.9 2.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L13 8.8V17q0 .425-.288.713T12 18q-.425 0-.712-.288T11 17z"
        />
      </svg>
    </a>
  </div>
</template>

<style scoped>
.arrow-container {
  position: fixed;
  display: flex;
  align-items: center;
  border-radius: 50%;
  bottom: 10px;
  right: 10px;

  a {
    display: flex;
    align-items: center;
    height: 50px;
    width: 50px;
  }
}

@media only screen and (min-width: 768px) {
  .arrow-container {
    bottom: 50px;
    right: 50px;
  }
}
</style>
