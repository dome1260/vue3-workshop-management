<template>
  <div class="about">
    <h1>This is an about page</h1>

    <router-link :to="{ name: 'home' }">
      Home Page
    </router-link>

    <br><br>

    <v-btn
      color="primary"
      @click="goHome()">
      Back to Home Page
    </v-btn>

    <br><br>

    {{ route.query.id }}

  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter()

const route = useRoute()

const goHome = () => {
  router.push({ name: 'home' })
  // router.go(-1)
}

</script>

<style>
</style>
