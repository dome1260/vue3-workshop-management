<template>
  <v-container>
    <div class="d-flex align-center mb-4">
      <v-icon start>
        {{ route.meta.icon }}
      </v-icon>
      <h1> {{ route.meta.title }} </h1>
    </div>
    <v-form ref="ProductForm">
      <v-row>
        <v-col cols="12" md="8">
          <label> ชื่อสินค้า </label>
          <v-text-field
            variant="outlined"
            density="compact" />
        </v-col>
        <v-col cols="12" md="8">
          <label> ราคา </label>
          <v-text-field
            type="number"
            variant="outlined"
            density="compact" />
        </v-col>
        <v-col cols="12" md="8">
          <v-textarea
            variant="outlined"
            rows="4"
            no-resize />
        </v-col>
        <v-col cols="12">
          <v-btn
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
import { useRoute } from 'vue-router'

const route = useRoute()

</script>
