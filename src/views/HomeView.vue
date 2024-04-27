<template>
  <v-container>
    <h1> Home </h1>
    <div>
      {{ authData }}
    </div>
  </v-container>
</template>

<script setup>
import { computed } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const authData = computed(() => userStore.getUserData)

</script>

<style scoped>

</style>
