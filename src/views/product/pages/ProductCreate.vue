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
          <label> รายละเอียด </label>
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
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()

const loading = ref(false)

const form = reactive({
  name: '',
  price: null,
  description: ''
})

const onSubmit = async () => {
  try {
    loading.value = true

    await axios.post(`${import.meta.env.VITE_APP_API_URL}/products`, {
      name: form.name,
      price: Number(form.price),
      description: form.description
    })

    router.push({ name: 'ProductList' })

  } catch (error) {
    console.error('[ERROR] submit create product =>', error)
  } finally {
    loading.value = false
  }
}

</script>
