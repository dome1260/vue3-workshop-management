<template>
  <v-container>
    <div class="d-flex align-center mb-4">
      <v-icon start>
        {{ route.meta.icon }}
      </v-icon>
      <h1> {{ route.meta.title }} </h1>
      <v-spacer />
      <v-btn
        :to="{ name: 'ProductEdit', params: { id: route.params.id } }"
        color="warning"
        class="mr-4"
        flat>
        <v-icon start> mdi-square-edit-outline </v-icon>
        แก้ไข
      </v-btn>
      <v-btn
        color="error"
        flat>
        <v-icon start> mdi-trash-can-outline </v-icon>
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
          <h2> ชื่อ: Product A </h2>
          <p> ราค: 10900 </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quos, numquam suscipit nobis recusandae iste ratione dignissimos minima quibusdam, dolores officiis repudiandae minus eius laudantium temporibus. Placeat voluptates ipsum ea quos? Magnam, eligendi, minima reiciendis quam ex ipsam laborum, non consectetur unde consequatur totam. Soluta eveniet minima nulla voluptas autem.
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

</script>
