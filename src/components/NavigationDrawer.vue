<template>
  <v-navigation-drawer
    color="grey"
    floating>
    <v-list class="px-2">
      <v-list-item
        v-for="(menu, i) in menus"
        :key="`drawer-menu-${i + 1}`"
        :to="{ name: menu.to }"
        class="mb-2">
        <v-icon> {{ menu.icon }} </v-icon>
        {{ menu.name }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'

const menus = ref([
  {
    name: 'สินค้า',
    icon: 'mdi-product',
    to: 'ProductList'
  }
])

</script>
