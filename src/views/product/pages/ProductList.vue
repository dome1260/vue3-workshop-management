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
      :headers="headers"
      :items="items"
      @click:row="goToDetail">
      <template #[`item.image`]="{ item }">
        <img
          :src="item.product_image"
          width="100"
          class="my-1">
      </template>
      <template #[`item.price`]="{ value }">
        {{ fullNumber(value) }} บาท
      </template>
      <template #[`item.actions`]>
        <v-btn
          color="error"
          variant="text"
          @click="deleteItem()">
          <v-icon> mdi:mdi-trash-can-outline </v-icon>
        </v-btn>
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
import Swal from 'sweetalert2'

const route = useRoute()
const router = useRouter()
const loadingStore = useLoadingStore()

// const loading = ref(false)

const headers = ref([
  {
    title: 'รูปสินค้า',
    value: 'image',
    align: 'center'
  },
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
  },
  {
    title: '',
    key: 'actions',
    sortable: false
  }
])

const items = ref([])
const isProcessing = ref(false)

const fullNumber = (val) => {
  return val.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

const goToDetail = (_event, { item }) => {
  if (!isProcessing.value) {
    router.push({ name: 'ProductDetail', params: { id: item.id } })
  } else {
    isProcessing.value = false
  }
}

const deleteItem = () => {
  isProcessing.value = true
  Swal.fire('ลบข้อมูลสำเร็จ')
}

const getProducts = async () => {
  try {
    // loading.value = true
    loadingStore.addLoading()
    const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/products`)
    items.value = response.data.data
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
