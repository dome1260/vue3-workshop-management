<template>
  <v-container
    style="min-height: 100vh;"
    class="pa-0"
    fluid>
    <v-row
      style="min-height: 100vh;"
      no-gutters>
      <v-col cols="9">
        background template
      </v-col>
      <v-col
        cols="3"
        class="d-flex flex-column justify-center align-center bg-grey text-black">
        <div style="min-width: 240px;">
          <h1 class="mb-4"> เข้าสู่ระบบ </h1>
          <v-form
            ref="VForm"
            @submit.prevent="login()">
            <label>
              <!-- <v-icon> mdi:mdi-account-badge </v-icon>
              <v-icon> fas fa-home </v-icon> -->
              ชื่อผู้ใช้
            </label>
            <v-text-field
              v-model="form.username"
              bg-color="white"
              variant="outlined"
              density="compact" />
            <label> รหัสผ่าน </label>
            <v-text-field
              v-model="form.password"
              type="password"
              bg-color="white"
              variant="outlined"
              density="compact" />
            <div class="text-right pt-4">
              <v-btn
                :loading="loading"
                type="submit"
                flat>
                เข้าสู่ระบบ
              </v-btn>
            </div>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { useUserStore } from '@/stores/user'
import axios from 'axios'

const router = useRouter()
const userStore = useUserStore()

const loading = ref(false)
const form = reactive({
  username: '',
  password: ''
})

// const login = () => {
//   if (form.username === 'admin' && form.password === 'admin') {
//     userStore.login({
//       username: form.username,
//       accessToken: 'token_admin_1234'
//     })
//     router.push({ name: 'home' })
//   } else {
//     Swal.fire('username หรือ password ไม่ถูกต้อง โปรดลองใหม่อีกครั้ง')
//   }
// }

const setLoading = (val) => {
  loading.value = val
}

const login = async () => {
  try {
    setLoading(true)
    const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/auth/login`, {
      username: form.username,
      password: form.password
    })
    userStore.setUserData(response.data.data)
    Swal.fire('เข้าสู่ระบบสำเร็จ')
    router.push({ name: 'home' })
  } catch (error) {
    console.error('[ERROR] login', error)
    Swal.fire({
      icon: 'error',
      text: error?.message
    })
  } finally {
    setLoading(false)
  }
}

</script>

<style scoped>
</style>
