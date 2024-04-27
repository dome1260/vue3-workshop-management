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
        <v-icon start> mdi-plus </v-icon>
        เพิ่มสินค้า
      </v-btn>
    </div>
    <v-data-table
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
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

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

const items = ref([
  {
    id: 1,
    name: 'เสื้อ',
    price: 1999,
    description: 'เสื้อกันหนาว คอยาว'
  },
  {
    id: 2,
    name: 'กางเกง',
    price: 2999,
    description: 'กางเกงขายาว'
  },
  {
    id: 3,
    name: 'ถุงมือ',
    price: 999,
    description: 'ถุงมือสีดำ'
  }
])

const fullNumber = (val) => {
  return val.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

const goToDetail = (_event, { item }) => {
  router.push({ name: 'ProductDetail', params: { id: item.id } })
}

</script>

<style scoped>

</style>
