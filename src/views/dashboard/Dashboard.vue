<template>
  <v-container fluid>
    <h1> Dashboard </h1>
    <v-row>
      <v-col>
        <v-card rounded="lg" class="pa-4" variant="outlined">
          <label class="d-block font-weight-bold mb-2"> จำนวนลูกค้าทั้งหมด </label>
          {{ numberFormat(1214) }}
        </v-card>
      </v-col>
      <v-col>
        <v-card rounded="lg" class="pa-4" variant="outlined">
          <label class="d-block font-weight-bold mb-2"> จำนวนสินค้าทั้งหมด </label>
          {{ numberFormat(293) }}
        </v-card>
      </v-col>
      <v-col>
        <v-card rounded="lg" class="pa-4" variant="outlined">
          <label class="d-block font-weight-bold mb-2"> จำนวนออเดอร์ทั้งหมด </label>
          {{ numberFormat(12033) }}
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <BarChart />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-row>
          <v-col>
            <PieChart />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import BarChart from './components/BarChart.vue'
import PieChart from './components/PieChart.vue'

const numberFormat = (value) => {
  return value.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    minimumFractionDigits: 0
  })
}

</script>
