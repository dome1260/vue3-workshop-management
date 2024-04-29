<template>
  <v-container>
    <div class="d-flex align-center mb-4">
      <v-icon start>
        {{ route.meta.icon }}
      </v-icon>
      <h1> {{ route.meta.title }} </h1>
    </div>
    <v-form
      ref="ProductForm"
      @submit.prevent="onSubmit()">
      <v-row>
        <v-col cols="12" md="8">
          <label> ชื่อสินค้า </label>
          <v-text-field
            v-model="form.name"
            variant="outlined"
            density="compact" />
        </v-col>
        <v-col cols="12" md="8">
          <label> ราคา </label>
          <v-text-field
            v-model="form.price"
            type="number"
            variant="outlined"
            density="compact" />
        </v-col>
        <v-col cols="12" md="8">
          <v-textarea
            v-model="form.description"
            variant="outlined"
            rows="4"
            no-resize />
        </v-col>
        <v-col cols="12">
          <v-btn
            :loading="loading"
            type="submit"
            color="primary"
            flat>
            บันทึก
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import Swal from 'sweetalert2'

const route = useRoute()
const router = useRouter()

const loading = ref(false)

const form = ref({
  name: '',
  price: null,
  description: ''
})

const getUserById = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/products/${route.params.id}`)

    form.value = response.data

  } catch (error) {
    console.error('[ERROR] get user by id', error)
  }
}

const onSubmit = async () => {
  try {
    loading.value = true
    await axios.put(`${import.meta.env.VITE_APP_API_URL}/products/${route.params.id}`, {
      name: form.value.name,
      price: Number(form.value.price),
      description: form.value.description
    })

    Swal.fire('แก้ไขข้อมูลสำเร็จ')

    router.replace({ name: 'ProductDetail', params: { id: route.params.id } })

  } catch (error) {
    console.error('[ERROR] submit update user =>', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  getUserById()
})

</script>
