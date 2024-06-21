<template>
  <div>
    <section class="print-action">
      <v-btn>
        พิมพ์
      </v-btn>
    </section>
    <section class="print-page">
      <table class="print-page-address__table">
        <tbody>
          <tr>
            <td>
              <div>
                Good Application (สำนักงานใหญ่)
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, hic.
              </div>
              <div>
                เลขประจำตัวผู้เสียอากร 91923812939
              </div>
            </td>
            <td>
              บิลเงินสด/ใบกำกับภาษี
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script setup>

</script>

<style>
@media print {
  @page {
    margin: 0;
    padding: 0;
  }

  header {
    display: none !important;
  }

  nav {
    display: none !important;
  }

  main {
    --v-layout-left: 0 !important;
    --v-layout-top: 0 !important;
  }
}
</style>

<style scoped>
.print-action {
  display: flex;
  margin-bottom: 24px;
}

.print-page {
  width: 100%;
  height: 100%;
  max-width: 210mm;
  max-height: 297mm;
  padding: 16px;
  background-color: lightgray;
}

/* .print-page.print-page--landscape {
  max-width: 297mm;
  max-height: 210mm;
} */

.print-page-address__table {
  width: 100%;
  border-collapse: collapse;
}

.print-page-address__table tbody tr td {
  font-size: 16px;
  font-weight: 400;
  padding: 8px;
  text-align: center;
}

.print-page-address__table tbody tr td:nth-child(1) {
  border: 1px solid black;
}

.print-page-address__table tbody tr td:nth-child(2) {
  width: 30%;
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

/* @media print {
  .print-page.print-page--landscape {
    transform: rotate(270deg) translate(-297mm, 0);
    transform-origin: 0 0;
  }
} */

</style>
