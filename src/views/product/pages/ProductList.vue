<template>
  <v-container>
    <div class="d-flex align-center mb-4">
      <v-icon start>
        {{ route.meta.icon }}
      </v-icon>
      <h1> {{ route.meta.title }} </h1>
      <v-spacer />
      <v-btn
        :to="{ name: 'ProductCreate' }"
        color="primary"
        flat>
        <v-icon start> mdi:mdi-plus </v-icon>
        เพิ่มสินค้า
      </v-btn>
    </div>
    <v-data-table
      :loading="loading"
      :headers="headers"
      :items="items"
      @click:row="goToDetail">
      <template #[`item.price`]="{ value }">
        <div class="text-right">
          {{ fullNumber(value) }} บาท
        </div>
      </template>
      <template #bottom>
      </template>
    </v-data-table>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import { useLoadingStore } from '@/stores/loading'

const route = useRoute()
const router = useRouter()
const loadingStore = useLoadingStore()

// const loading = ref(false)

const headers = ref([
  {
    title: 'ชื่อ',
    value: 'name',
  },
  {
    title: 'ราคา',
    value: 'price',
  },
  {
    title: 'รายละเอียด',
    value: 'description',
  }
])

const items = ref([])

const fullNumber = (val) => {
  return val.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

const goToDetail = (_event, { item }) => {
  router.push({ name: 'ProductDetail', params: { id: item.id } })
}

const getProducts = async () => {
  try {
    // loading.value = true
    loadingStore.addLoading()
    const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/products`)
    items.value = response.data
  } catch (error) {
    console.error('[ERROR] get products =>', error)
  } finally {
    // loading.value = false
    loadingStore.removeLoading()
  }
}

onMounted(() => {
  getProducts()
})

</script>

<style scoped>

</style>
