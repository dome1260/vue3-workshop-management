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
        <v-col col="12" md=8>
          <label> รูปภาพ </label>
          <v-card
            v-if="form.productImage.url"
            width="200"
            height="200"
            variant="outlined"
            style="position: relative;"
            class="d-flex justify-center align-center pa-4 mt-2">
            <v-btn
              color="error"
              style="position: absolute; top: 0; right: 0;"
              @click="removeImage()">
              x
            </v-btn>
            <img :src="form.productImage.url" width="100%">
          </v-card>
          <v-card
            v-else
            width="200"
            height="200"
            variant="outlined"
            class="d-flex justify-center align-center pa-4 mt-2"
            @click="openUploadFile()">
            <img
              v-if="form.productImage.file"
              :src="form.productImage.url"
              width="100%">
            <div
              v-else
              class="d-flex flex-column align-center">
              <v-icon>
                mdi:mdi-tray-arrow-up
              </v-icon>
              <div>
                อัปโหลดรูปภาพสินค้า
              </div>
            </div>
          </v-card>
          <input
            ref="fileInput"
            type="file"
            name="file"
            class="d-none"
            @change="onChangeFile($event)">
        </v-col>
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
  description: '',
  productImage: {
    url: '',
    file: null
  }
})
const fileInput = ref(null)

const openUploadFile = () => {
  fileInput.value.click()
}

const removeImage = () => {
  form.value.productImage.file = null
  form.value.productImage.url = ''
}

const onChangeFile = (_event) => {
  if (_event.target.files.length) {
    form.value.productImage.file = _event.target.files[0]
    form.value.productImage.url = URL.createObjectURL(_event.target.files[0])

    fileInput.value.files = null // NOTE
  }
}

const getUserById = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/products/${route.params.id}`)
    form.value = {
      ...response.data.data,
      productImage: {
        url: response.data.data.product_image,
        file: null
      }
    }

  } catch (error) {
    console.error('[ERROR] get user by id', error)
  }
}

const onSubmit = async () => {
  try {
    loading.value = true
    let imageUploadedUrl = ''
    if (form.value.productImage.file) {
      const formData = new FormData()
      formData.append('file', form.value.productImage.file)

      const responseUploaded = await axios.post(`${import.meta.env.VITE_APP_API_URL}/upload`, formData ,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      imageUploadedUrl = responseUploaded.data?.data?.publicUrl
    }

    await axios.put(`${import.meta.env.VITE_APP_API_URL}/products/${route.params.id}`, {
      name: form.value.name,
      price: Number(form.value.price),
      description: form.value.description,
      product_image: imageUploadedUrl || form.value.productImage.url
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
