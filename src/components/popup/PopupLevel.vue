<template>
  <PopupLayout
    title="Add experience"
    ok-button-text="Add"
    :ok-button-disabled="+experience === 0"
    @ok="addExperience(experience)"
  >
    <template #body>
      <UiInput
        v-model="experience"
        label="Value"
        type="number"
        @input="setExperience($event.target as HTMLInputElement)"
      />
      <span class="content">
        You will gain {{ level }} levels
      </span>
    </template>
  </PopupLayout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

import { useCharacterStore } from '../../store/character'
import PopupLayout from './PopupLayout.vue'
import UiInput from '../ui/UiInput.vue'
import { levelUp } from '../../composables/levelUp'

const characterStore = useCharacterStore()

let experience = ref(0)

const setExperience = (eventTraget: HTMLInputElement) => {
  if (+eventTraget.value === 0) {
    experience.value = 0
  } else {
    experience.value = +eventTraget.value
  }
}

const level = computed(() => {
  let nextLevel = 1

  if (+characterStore.exp + +experience.value >= 1000) nextLevel = 2
  if (+characterStore.exp + +experience.value >= 3000) nextLevel = 3
  if (+characterStore.exp + +experience.value >= 6000) nextLevel = 4 + Math.floor(((+characterStore.exp + +experience.value) - 6000) / 5000)
  
  return (nextLevel - characterStore.level)
})

const addExperience = (exp: number) => {
  if (experience.value > 0) {
    if (level.value) levelUp(level.value)
    characterStore.addExperience(+exp)
    experience.value = 0
  }
}
</script>

<style lang="scss" scoped>
.content {
  font-family: "Pirata One", sans-serif;
  font-size: 3.2em;
  color: var(--second);
  text-align: center;
}
</style>