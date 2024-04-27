import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const auth = ref({
    username: '',
    accessToken: ''
  })

  if (localStorage.getItem('workshop_auth')) {
    auth.value = JSON.parse(localStorage.getItem('workshop_auth'))
  }

  const getUserData = computed(() => auth.value)

  const login = (payload) => {
    auth.value.username = payload.username
    auth.value.accessToken = payload.accessToken

    localStorage.setItem('workshop_auth', JSON.stringify(auth.value))
  }

  return {
    getUserData,
    login
  }
})
