<template>
  <div class="print-container">
    <section class="print-action">
      <v-btn
        color="success"
        flat
        @click="onPrint()">
        พิมพ์
      </v-btn>
    </section>
    <section
      v-for="i in 5"
      class="print-page">
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
      <table class="print-page-customer__table">
        <tbody>
          <tr>
            <td>
              ลูกค้า
            </td>
            <td>
              โรงเรียน
            </td>
            <td>
              เลขที่
            </td>
            <td>
              GC19320012903
            </td>
          </tr>
          <tr>
            <td>
              ที่อยู่
            </td>
            <td>
              123123 ถ.ABC ซอย 12/23
            </td>
            <td>
              วันที่
            </td>
            <td>
              28/06/2567
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              อ.เมือง จ.กรุงเทพมหานคร
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <table class="print-page-customer-tax-id__table">
        <tr>
          <td>
            เลขที่ผู้เสียภาษี
          </td>
          <td>
            109102309210
          </td>
        </tr>
      </table>
      <table class="print-page-order__table">
        <thead>
          <tr>
            <th> ที่ </th>
            <th> รายการ </th>
            <th> จำนวน </th>
            <th> ราคาต่อหน่วย </th>
            <th> จำนวนเงิน </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, i) in items">
            <td> {{ i + 1 }} </td>
            <td>
              {{ item.name }}
            </td>
            <td> {{ numberFormat(item.qty, 0, 0) }} </td>
            <td> {{ numberFormat(item.pricePerUnit, 2, 2) }} </td>
            <td> {{ numberFormat(item.totalPrice, 2, 2) }} </td>
          </tr>
          <tr v-for="i in (5 - items.length)">
            <td style="width: 37.5;"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2">
              AAAA
            </td>
            <td colspan="2">
              BBBB
            </td>
            <td>
              434
            </td>
          </tr>
          <tr>
            <td
              colspan="2"
              rowspan="2">
              หมายเหตุ
            </td>
            <td colspan="2">
              ภาษีมูลค่าเพิ่ม
            </td>
            <td>
              {{ numberFormat(30.42, 2, 2) }}
            </td>
          </tr>
          <tr>
            <td colspan="2"> รวมทั้งสิ้น </td>
            <td> {{ numberFormat(434.58, 2, 2) }} </td>
          </tr>
        </tfoot>
      </table>
      <table class="print-page-signature__table">
        <tbody>
          <tr>
            <td>
              ผู้จ่ายเงิน
            </td>
            <td>
              ผู้รับเงิน
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  {
    name: 'Lorem ipsum dolor sit amet.',
    qty: 1,
    pricePerUnit: 465,
    totalPrice: 465
  }
])

const onPrint = () => {
  window.print()
}

const numberFormat = (value, min, max) => {
  return value.toLocaleString(undefined, {
    minimumFractionDigits: min,
    maximumFractionDigits: max
  })
}

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
.print-container {
  padding: 16px;
}

.print-action {
  display: flex;
  justify-content: end;
  margin-bottom: 24px;
}

.print-page {
  width: 100%;
  height: 100%;
  max-width: 210mm;
  max-height: 297mm;
  padding: 16px;
  margin: 0 auto;
  /* background-color: lightgray; */
  background-color: white;
  box-shadow: 2px 0px 18px 0px rgba(0,0,0,0.75);
  margin-bottom: 48px;
  page-break-after: always;
}

/* .print-page.print-page--landscape {
  max-width: 297mm;
  max-height: 210mm;
} */

table tbody tr td,
table thead tr th,
table tfoot tr td {
  font-size: 14px;
  font-weight: 400;
  padding: 8px;
  vertical-align: top;
}

.print-page-address__table {
  width: 100%;
  border-collapse: collapse;
}

.print-page-address__table tbody tr td {
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

.print-page-customer__table {
  width: 100%;
  border-collapse: collapse;
}

.print-page-customer__table tbody tr td {
  padding: 4px 8px;
}

.print-page-customer__table tbody tr td:nth-child(1) {
  width: 50px;
  border-left: 1px solid black;
}

.print-page-customer__table tbody tr td:nth-child(2) {
  width: 482.5px;
}

.print-page-customer__table tbody tr td:nth-child(3) {
  width: 55px;
  border-left: 1px solid black;
  border-right: 1px solid black;
}

.print-page-customer__table tbody tr td:nth-child(4) {
  text-align: center;
  border-right: 1px solid black;
}

.print-page-customer__table tbody tr:nth-child(3) td:nth-child(3) {
  border-bottom: 1px solid black;
}

.print-page-customer__table tbody tr:nth-child(3) td:nth-child(4) {
  border-bottom: 1px solid black;
}

.print-page-customer-tax-id__table {
  width: 100%;
  border-collapse: collapse;
}

.print-page-customer-tax-id__table tbody tr td:nth-child(1) {
  width: 120px;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}

.print-page-customer-tax-id__table tbody tr td:nth-child(2) {
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

.print-page-order__table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
}

.print-page-order__table thead tr th {
  padding: 4px;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}

.print-page-order__table thead tr th:nth-child(1) {
  width: 50px;
}

.print-page-order__table thead tr th:nth-child(3) {
  width: 80px;
}

.print-page-order__table thead tr th:nth-child(4) {
  width: 89px;
}

.print-page-order__table thead tr th:nth-child(5) {
  width: 84px;
  border-right: 1px solid black;
}

.print-page-order__table tbody tr td {
  border-left: 1px solid black;
}

.print-page-order__table tbody tr td:last-child {
  border-right: 1px solid black;
}

.print-page-order__table tbody tr td:nth-child(1),
.print-page-order__table tbody tr td:nth-child(3) {
  text-align: center;
}

.print-page-order__table tbody tr td:nth-child(4),
.print-page-order__table tbody tr td:nth-child(5) {
  text-align: right;
}

.print-page-order__table tfoot tr td {
  padding: 4px 8px;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}

.print-page-order__table tfoot tr:first-child td:nth-child(1),
.print-page-order__table tfoot tr td:nth-child(2) {
  text-align: center;
}

.print-page-order__table tfoot tr td:last-child {
  text-align: right;
  border-right: 1px solid black;
}

.print-page-order__table tfoot tr:last-child td:first-child {
  text-align: center;
}

.print-page-signature__table {
  width: 100%;
  border-collapse: collapse;
}

.print-page-signature__table tbody tr td {
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  height: 100px;
}

.print-page-signature__table tbody tr td:last-child {
  border-right: 1px solid black;
  width: 55%;
}

@media print {
  .print-container {
    padding: 0;
  }

  .print-action {
    display: none;
  }

  .print-page {
    box-shadow: none;
    margin: 0;
  }

  /* .print-page.print-page--landscape {
    transform: rotate(270deg) translate(-297mm, 0);
    transform-origin: 0 0;
  } */
}

</style>
