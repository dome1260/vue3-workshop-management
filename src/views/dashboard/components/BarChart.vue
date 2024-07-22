<template>
  <highcharts :options="chartOptions"></highcharts>
</template>

<script setup>
import { ref } from 'vue'

const chartOptions = ref({
  chart: {
    type: 'column'
  },
  title: {
    text: 'กราฟคะแนนของลูกค้า',
  },
  xAxis: {
    categories: [
      'ม.ค.',
      'ก.พ.',
      'มี.ค.'
    ]
  },
  yAxis: {
    type: 'logarithmic',
    title: {
      text: 'คะแนน'
    }
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    column: {
      borderWidth: 0,
      maxPointWidth: 20
    }
  },
  series: [
    {
      name: 'ลูกค้า A',
      data: [100, 225, 2122157],
      color: '#FF0000'
    },
    {
      name: 'ลูกค้า B',
      data: [302, 100, 240],
      color: '#00FF00'
    }
  ]
})

</script>
