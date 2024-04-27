<template>
  <v-app>
    <Navbar v-if="route.name !== 'login' && route.name !== 'not-found'" />
    <NavigationDrawer v-if="route.name !== 'login' && route.name !== 'not-found'" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

import Navbar from '@/components/Navbar.vue'
import NavigationDrawer from '@/components/NavigationDrawer.vue'

// import Swal from 'sweetalert2'

const route = useRoute()

onMounted(() => {
  // Swal.fire('Hello World!!')
})

</script>

<style scoped>

</style>
