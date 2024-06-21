<template>
  <v-container>
    <div class="d-flex align-center mb-4">
      <v-icon start>
        {{ route.meta.icon }}
      </v-icon>
      <h1> {{ route.meta.title }} </h1>
      <v-spacer />
      <v-btn
        :to="{ name: 'ProductPrint', params: { id: route.params.id } }"
        color="primary"
        class="mr-4"
        flat>
        พิมพ์
      </v-btn>
      <v-btn
        :to="{ name: 'ProductEdit', params: { id: route.params.id } }"
        color="warning"
        class="mr-4"
        flat>
        <v-icon start> mdi:mdi-square-edit-outline </v-icon>
        แก้ไข
      </v-btn>
      <v-btn
        :loading="deleting"
        color="error"
        flat
        @click="deleteProductById()">
        <v-icon start> mdi:mdi-trash-can-outline </v-icon>
        ลบ
      </v-btn>
    </div>
    <v-row>
      <v-col cols="12" md="4">
        <div
          style="width: 100%; height: 300px;"
          class="bg-grey">
        </div>
      </v-col>
      <v-col cols="12" md="8">
        <div class="d-flex flex-column ga-4">
          <h2> ชื่อ: {{ productInfo.name }} </h2>
          <p> ราค: {{ fullNumber(productInfo.price || 0) }} </p>
          <p>
            {{ productInfo.description }}
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useLoadingStore } from '@/stores/loading'

const route = useRoute()
const router = useRouter()
const loadingStore = useLoadingStore()

const deleting = ref(false)

const productInfo = ref({
  name: '',
  price: null,
  description: ''
})

const fullNumber = (val) => {
  return val.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

const getProductById = async () => {
  try {
    loadingStore.addLoading()
    const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/products/${route.params.id}`)
    productInfo.value = response.data.data
  } catch (error) {
    console.error('[ERROR] get user by id', error)
  } finally {
    loadingStore.removeLoading()
  }
}

const deleteProductById = async () => {
  try {
    deleting.value = true
    await axios.delete(`${import.meta.env.VITE_APP_API_URL}/products/${route.params.id}`)

    Swal.fire('ลบข้อมูลสำเร็จ')

    router.replace({ name: 'ProductList' })

  } catch (error) {
    console.error('[ERROR] delete product by id', error)
  } finally {
    deleting.value = false
  }
}

onMounted(() => {
  getProductById()
})

</script>
