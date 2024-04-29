import  { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', () => {
  const loadingCount = ref(0)

  const isLoading = computed(() => !!loadingCount.value)

  const addLoading = () => {
    loadingCount.value++
  }

  const removeLoading = () => {
    loadingCount.value = (loadingCount.value - 1) < 0 ? 0 : loadingCount.value - 1
  }

  return {
    isLoading,
    addLoading,
    removeLoading
  }
})
