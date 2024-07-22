<template>
  <highcharts :options="chartOptions"></highcharts>
</template>

<script setup>
import { ref } from 'vue'

const chartOptions = ref({
  chart: {
    type: 'pie'
  },
  title: {
    text: 'กลุ่มลูกค้า'
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
  },
  series: [
    {
      innerSize: '75%',
      data: [
        {
          name: 'วัยรุ่น',
          y: 20,
        },
        {
          name: 'ผู้สูงอายุ',
          y: 40,
        },
        {
          name: 'ผู้ใหญ่',
          y: 40,
        }
      ]
    }
  ]
})

</script>
