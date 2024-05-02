<script setup lang="ts">
import "animate.css";
import { storeToRefs } from "pinia";
import { useTheme } from "../../stores/theme";

const storeTheme = useTheme();
const { selectedTheme } = storeToRefs(storeTheme);
</script>

<template>
  <div
    class="arrow-container animate__animated animate__bounceInUp animate__delay-1s"
    :style="{ 'background-color': selectedTheme.fontColor }"
  >
    <a href="#Intro">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="128"
        height="128"
        viewBox="0 0 1024 1024"
      >
        <path
          :fill="selectedTheme.bgColor"
          d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496"
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
    height: 40px;
    width: 40px;
  }

  svg {
    height: 25px;
  }
}

@media only screen and (min-width: 768px) {
  .arrow-container {
    bottom: 50px;
    right: 50px;
  }
}
</style>
