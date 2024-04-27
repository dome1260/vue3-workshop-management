<template>
  <v-container
    style="min-height: 100vh;"
    class="d-flex flex-column justify-center align-center ga-4">
    <h1> 404 Not Found </h1>
    <h2> Something went wrong </h2>
    <!-- <router-link :to="{ name: 'home' }">
      Back to Home Page
    </router-link> -->
    <v-btn
      :to="{ name: 'home' }"
      color="primary"
      flat>
      Back to Home Page
    </v-btn>
  </v-container>
</template>

<script setup>
</script>
