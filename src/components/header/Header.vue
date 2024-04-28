<script setup lang="ts">
import 'animate.css'
import { type Ref, ref } from "vue";
import { storeToRefs } from "pinia";

import Github from "../icons/Github.vue";
import Hamburguer from "../icons/Hamburguer.vue";
import Close from "../icons/Close.vue";

import { usePersonalInfo } from "../../stores/personal";
import { useTheme } from "../../stores/theme";
import { Languajes } from "../../interfaces/languaje";

const showLateral: Ref<boolean> = ref(false);
const store = usePersonalInfo()
const storeTheme = useTheme()
const {data, selectedLanguaje} = storeToRefs(store)
const {selectedTheme} = storeToRefs(storeTheme)

function showLateralFunc() {
  showLateral.value = true;
}

function hideLateral() {
  showLateral.value = false;
}

function changeLanguaje (languaje: Languajes) {
  store.changeSelectedLanguaje(languaje)
}

function openPaletteThemes () {
  storeTheme.handleShowPaletteTheme(true)
}

</script>

<template>
  <header :style="{'background-color': selectedTheme.bgColor}">
    <img class="logo animate__animated animate__bounceIn animate__delay-1s" src="/public/assets/logo.jpg" alt="Logo image" @click="openPaletteThemes" />

    <Hamburguer class="hamburguer-icon animate__animated animate__bounceIn animate__delay-1s" @click="showLateralFunc" :color="selectedTheme.fontColor" />

    <div :class="showLateral ? 'expanded' : 'container'" :style="showLateral ? {'background-color': selectedTheme.bgColor}: null">
      <nav class="nav-container animate__animated animate__bounceIn animate__delay-1s">
        <Close @click="hideLateral" class="close" :color="selectedTheme.fontColor" />
        <ul class="ul-container">
          <li v-for="navItem of data.navItems" :key="navItem"> <a :href="navItem === 'Contact me' || navItem === 'Contactame' ? 'https://t.me/KrlitoxR': '#' + navItem" :target="navItem === 'Contact me' || navItem === 'Contactame' ? '_blank' : ''" :style="{'color': selectedTheme.fontColor}" @click="hideLateral"> {{ navItem }} </a> </li>
        </ul>
      </nav>

      <div class="languajes-container animate__animated animate__bounceIn animate__delay-1s">
        <span :class="selectedLanguaje === 'ENG' ? 'bold': ''" @click="changeLanguaje('ENG')" :style="{'color': selectedTheme.fontColor, 'border-right': ('2px solid ' + selectedTheme.fontColor)}"> ENG </span>
        <span :class="selectedLanguaje === 'ESP' ? 'bold': ''" @click="changeLanguaje('ESP')" :style="{'color': selectedTheme.fontColor}"> ESP </span>
      </div>

      <div class="links-container">
        <a :href="data.social.github" target="_blank">
          <Github class="github-icon animate__animated animate__bounceIn animate__delay-1s" :color="selectedTheme.fontColor" />
        </a>
        <a class="cv animate__animated animate__bounceIn animate__delay-1s" :style="{'background-color': selectedTheme.btnPrimary, 'color': selectedTheme.btnPrimaryFontColor}" :href="data.cv" target="_blank"> Curriculum </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  height: 100px;
  width: 100%;
  padding: 0px 20px;
  position: fixed;
  z-index: 100;
}

.logo,
.hamburguer-icon {
  height: 60px;
  width: 60px;
}

.logo {
  border-radius: 50%;
}

.hamburguer-icon {
  justify-self: flex-end;
}

.container {
  display: none;
}

.expanded {
  background-color: #fff;
  display: grid;
  grid-template-rows: 1fr 100px 100px;
  align-items: center;
  justify-content: center;
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;


  .nav-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .close {
    width: 50px;
    height: 50px;
  }
}

.ul-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}

.ul-container li {
  list-style: none;
  font-size: 2rem;
}

.ul-container li a {
  text-decoration: none;
}

.links-container,
.languajes-container {
  text-align: center;
}

.languajes-container {
  font-size: 1.5rem;
}

.languajes-container > span {
  padding: 10px;
}

.bold {
  font-weight: bold;
}

.links-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.expanded .github-icon {
  height: 50px;
  width: 50px;
}

.cv {
  display: flex;
  align-items: center;
  border-radius: 10px;
  font-weight: bold;
  height: 50px;
  padding: 0px 10px;
  text-transform: uppercase;

  text-decoration: none;
}

@media only screen and (min-width: 768px) {
  header {
    grid-template-columns: 100px 1fr;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 100px 250px;
    align-items: center;
  }

  .nav-container {
    justify-self: center;
  }

  .ul-container {
    flex-direction: row;
    gap: 40px;
  }

  .ul-container li {
    font-size: 1.3rem;
  }

  .languajes-container {
    display: flex; 
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }

  .languajes-container > span {
    padding: 0px 10px;
  }

  .hamburguer-icon {
    display: none;
  }

  .close {
    display: none;
  }

  .github-icon {
    width: 60px;
    height: 60px;
  }

  .links-container {
    text-align: end;
  }
}
</style>
