import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const auth = ref({
    user: {
      id: null,
      username: '',
      firstName: '',
      lastName: ''
    },
    accessToken: '',
    tokenExpire: null
  })

  if (localStorage.getItem('workshop_auth')) {
    auth.value = JSON.parse(localStorage.getItem('workshop_auth'))
  }

  const getUserData = computed(() => auth.value)

  const setUserData = (payload) => {
    auth.value = payload
    localStorage.setItem('workshop_auth', JSON.stringify(auth.value))
  }

  const resetUserData = () => {
    auth.value = {
      user: {
        id: null,
        username: '',
        firstName: '',
        lastName: ''
      },
      accessToken: '',
      tokenExpire: null
    }
    localStorage.clear()
  }

  return {
    getUserData,
    setUserData,
    resetUserData
  }
})
