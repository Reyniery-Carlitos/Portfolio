import { defineStore } from "pinia";
import { type Ref, ref } from "vue";
import dataES from '../data/es-info.json'
import dataEN from '../data/en-info.json'
import { type Personal, type Info2 } from "../interfaces/personal";
import { type Languajes } from "../interfaces/languaje";

export const usePersonalInfo = defineStore('personal', () => {
  const data: Ref<Personal> = ref(dataEN)    
  const selectedLanguaje: Ref<Languajes> = ref('ENG')
  const counterTags: Ref<{[key: string]: number}> = ref({})
  const filteredProjects: Ref<Info2[]> = ref([])

  function changeSelectedLanguaje (languaje: Languajes) {
    selectedLanguaje.value = languaje

    if (languaje === 'ENG') {
      data.value = dataEN
      calculate()
      filterProjectsByTag('All')
    } else {
      data.value = dataES
      calculate()
      filterProjectsByTag('Todas')
    }
  }

  function filterProjectsByTag (tag: string) {
    if (tag === 'All' || tag === 'Todas') {
      filteredProjects.value = data.value.projects.info
    } else {
      filteredProjects.value = data.value.projects.info.filter((t) => {
        return t.tags.indexOf(tag) !== -1
      })
    }
  }

  filterProjectsByTag('All') 
  

  function calculate () {
    data.value.tags.forEach((tag) => {
      counterTags.value[tag] = 0
      data.value.projects.info.forEach((project) => {
        if (tag === 'All' || tag === 'Todas') {
          counterTags.value[tag] += 1
        }

        if (project.tags.indexOf(tag) !== -1) {
          counterTags.value[tag] += 1
          return
        }
      })
    })
    return counterTags
  }

  calculate()
  return {data, selectedLanguaje, changeSelectedLanguaje, counterTags, filterProjectsByTag, filteredProjects}
})