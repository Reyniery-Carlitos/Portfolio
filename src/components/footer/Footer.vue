<script setup lang="ts">
import Github from "../icons/Github.vue";
import Linkedin from "../icons/Linkedin.vue";
import Email from '../icons/Email.vue';
import Telegram from '../icons/Telegram.vue'
import Whatsapp from '../icons/Whatsapp.vue'

import { storeToRefs } from "pinia";
import { useTheme } from "../../stores/theme";
import { usePersonalInfo } from "../../stores/personal";

const store = usePersonalInfo()
const storeTheme = useTheme();

const { selectedTheme } = storeToRefs(storeTheme);
const {data} = storeToRefs(store)

</script>

<template>
  <footer id="footer" class="footer" :style="{'background-color': selectedTheme.footerBgColor}">
    <div class="links">
      <a :href="data.social.github" target="_blank">
        <Github :color="selectedTheme.fontColor" />
      </a>

      <a :href="data.social.linkedin" target="_blank">
        <Linkedin :color="selectedTheme.fontColor" />
      </a>

      <a :href="'mailto:' + data.social.email" target="_blank">
        <Email :color="selectedTheme.fontColor" />
      </a>
      
      <a :href="data.social.telegram" target="_blank">
        <Telegram :color="selectedTheme.fontColor" />
      </a>
      
      <a :href="data.social.whatsapp" target="_blank">
        <Whatsapp :color="selectedTheme.fontColor" />
      </a>
    </div>

    <div class="created-with" :style="{'color': selectedTheme.fontColor}">
      <span> {{ data.footer.createdWith }} </span>
    </div>
 
    <div class="created-by" :style="{'color': selectedTheme.fontColor}">
      <span>
        {{data.footer.createdBy}}
        <a :href="data.social.github" target="_blank":style="{'color': selectedTheme.fontColor}"> Carlos Rubio </a>
      </span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px 0px;
  width: 100%;
}

.footer .links{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  svg {
    width: 50px;
    height: 50px;
  }
}

.footer .created-with {
  font-size: 1rem;
  font-weight: 500;
}

.footer .created-by {
  font-size: 1rem;

  a {
    font-weight: bold;
    text-decoration: none;
  }
}
</style>
