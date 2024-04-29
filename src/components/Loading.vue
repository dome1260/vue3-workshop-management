<template>
  <v-dialog
    :model-value="isLoading"
    persistent>
    <v-progress-circular
      color="primary"
      indeterminate
      :size="100"
      :width="6"
      class="mx-auto" />
  </v-dialog>
</template>

<script setup>
import { computed } from 'vue'
import { useLoadingStore } from '@/stores/loading'

const loadingStore = useLoadingStore()

const isLoading = computed(() => loadingStore.isLoading)

</script>
