<template>
  <v-container
    id="regular-tables-view"
    fluid
    tag="section"
  >
    <!--<view-intro
      heading="Simple Tables"
      link="components/simple-tables"
    />
    <section class="mb-12 text-center">
      <h1
        class="mb-2 text-h3"
        v-text="titleText"
      />
    </section>-->

    <v-data-table
      :headers="headers"
      :items="drivers"
      :items-per-page="-1"
      :dense="true"
      class="elevation-1"
      hide-default-footer
      group-by="category"
      sort-by="roadrating"
      sort-desc= "true"
    >

      <!-- Customise the categories -->
      <template v-slot:group.header="{items, isOpen, toggle}">
        <th colspan="5">
          <v-icon @click="toggle"
            >{{ isOpen ? 'mdi-minus' : 'mdi-plus' }}
          </v-icon>
          {{ items[0].category }}
        </th>
      </template>
      <!--
      <template v-slot:item="{ item }">
        <tr>
          <td><strong>{{ item.name }}</strong></td>
          <td>{{ item.power }} HP</td>
        </tr>
      </template>-->

      <!-- Colour the licences -->
      <template v-slot:item.roadlicence="{ item }">
        <v-chip
          :color= "getColor(item.roadlicence)"
          small
        >
          {{ item.roadlicence }}
        </v-chip>
      </template>

      <!-- Draw the iR history chart -->
      <template v-slot:item.chart="{ item }">
        <v-sparkline
          :value="item.value"
          :gradient="gradient"
          :smooth="true"
          :padding="padding"
          :line-width="width"
          :stroke-linecap="lineCap"
          :gradient-direction="gradientDirection"
          :fill="fill"
          :type="type"
          :auto-line-width="autoLineWidth"
          auto-draw
        ></v-sparkline>
      </template>
    </v-data-table>
    <div class="py-3" />
  </v-container>
</template>

<script>
import driverData from '@/assets/driverData.json'
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#36f720"],
];
export default {
   data () {
     return {
      width: 4,
      radius: 1,
      padding: 20,
      lineCap: "round",
      gradient: gradients[5],
      // value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradientDirection: "bottom",
      gradients: gradients,
      fill: false,
      type: "trend",
      autoLineWidth: false,
      titleText: "Team Dashboard",
      //categoryOrder: ["Pro", "Team", "Beer"],
      headers: [
         {
           text: 'Drivers',
           align: 'start',
           sortable: false,
           value: 'name',
         },
         { text: 'iRacing ID', value: 'irid' },
         { text: 'Category', value: 'category'},
         { text: 'iRating', value: 'roadrating' },
         { text: 'Licence', value: 'roadlicence' },
         { text: 'iR (90 Days)', sortable: false, value: 'chart' },
       ],
       drivers: driverData,
     }
   },
   methods: {
    getColor (licence) {
      if (licence.includes("P")) return 'black'
      else if (licence.includes("A")) return '#4570DB'
      else if (licence.includes("B")) return '#00C505'
      else if (licence.includes("C")) return '#FDED02'
      else if (licence.includes("D")) return '#F0A20B'
      else return '#F0A20B'
    },
  },
 }
</script>
