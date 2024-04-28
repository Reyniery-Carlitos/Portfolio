import { defineStore } from "pinia";
import { ref, Ref } from "vue";
import themes from '../data/themes.json'
import { Theme, Themes } from "../interfaces/theme";

export const useTheme = defineStore('theme', () => {
  const themesData: Ref<Themes> = ref(themes)
  const showPaletteTheme: Ref<boolean> = ref(false)

  const selectedTheme: Ref<Theme> = ref(themesData.value['dark'])
  
  function changeTheme (theme: string) {
    selectedTheme.value = themesData.value[theme]
  }

  function handleShowPaletteTheme (val: boolean) {
    showPaletteTheme.value = val
  }

  return {selectedTheme, changeTheme, themesData, handleShowPaletteTheme, showPaletteTheme}
})