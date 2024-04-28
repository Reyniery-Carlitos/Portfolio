<script setup lang="ts">
import 'animate.css'
import { storeToRefs } from 'pinia';
import { usePersonalInfo } from '../../stores/personal';
import { useTheme } from '../../stores/theme';

const store = usePersonalInfo();
const storeTheme = useTheme()

const {data} = storeToRefs(store)
const {selectedTheme} = storeToRefs(storeTheme)

</script>

<template>
  <section class="intro-container" :id="data.navItems[0]" :style="{'background-color': selectedTheme.bgColor}" >
    <img class="logo animate__animated animate__backInLeft animate__delay-1s" src="../../assets/logo.jpg" alt="Logo image" />

    <div class="info-container">
      <h1 :style="{'color': selectedTheme.fontColor}" class="animate__animated animate__backInDown animate__delay-1s"> {{ data.title  }} </h1>
      <p :style="{'color': selectedTheme.fontColor}" class="animate__animated animate__backInDown animate__delay-1s">
        {{ data.description }}
      </p>

      <div class="container-buttons animate__animated animate__backInRight animate__delay-1s">
        <a :style="{'background-color': selectedTheme.btnPrimary, 'color': selectedTheme.btnPrimaryFontColor}" :href="data.social.telegram" target="_blank"> Contact me </a>
        <a :style="{'background-color': selectedTheme.btnSecondary, 'color': selectedTheme.btnSecondaryFontColor, 'border': ('2px solid ' + selectedTheme.btnSecondaryBorder)}" :href="'#' + data.navItems[2]"> Projects </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro-container {
  display: grid;
  grid-template-rows: 60% 40%;
  place-items: center;
  place-content: center;
  height: 100vh;
  margin-top: 100px;
  padding: 0px 20px;
  width: 100%;
}

.logo {
  border-radius: 50%;
  width: 70%;
}

.info-container {
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }

  .container-buttons {
    display: flex;
    gap: 20px;

    button, a {
      border-radius: 10px;
      padding: 8px 30px;
      font-weight: bold;
      border: none;
    }

    a {
      text-decoration: none;
    }
  }
}

@media only screen and (min-width: 768px) {
  .intro-container {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(2, 50%);
  }

  .info-container {
    align-self: center;

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.1rem;
    }

    .container-buttons {
      button {
        font-size: 0.8rem;
        border: none;
      }
    }
  }
}

@media only screen and (min-width: 1024px) {
  .info-container {
    h1 {
      font-size: 5rem;
    }

    p {
      font-size: 1.5rem;
    }

    .container-buttons {
      button {
        font-size: 1rem;
        border: none;
      }
    }
  }
}
</style>

