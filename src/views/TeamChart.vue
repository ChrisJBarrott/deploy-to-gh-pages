<template>
  <v-container
      id="regular-charts-view"
      fluid
      tag="section"
    >
      <v-tabs
        v-model="tab"
        background-color="#EEEEEE"
        color="black"
        grow
      >
        <v-tab
          v-for="item in items"
          :key="item"
        >
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in series"
          :key="item"
        >
          <v-card
            color="#EEEEEE"
            flat
          >
            <div class="chart-wrapper">
              <apexchart
              width="100%"
              height="650"
              type="line"
              responsive="true"
              :options="options"
              :series="item">
              </apexchart>
            </div>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
  </v-container>
</template>

<script>
  import iRData from '@/assets/iRData.json'
  export default {
  name: 'boxplot',
  data: () => ({
          options: {
              chart: {
                  id: 'vuechart-example',
                  animations: {enabled: false},
                  background: '#EEEEEE'
              },
              xaxis: {
                  type: 'datetime',
              },
              stroke: {
                width: 3,
                curve: 'smooth'
              },
              legend: {
                  show: true,
                  showForSingleSeries: true
              },
              theme: {
                mode: 'light',
                palette: 'palette6',
                monochrome: {
                    enabled: false,
                    color: '#255aee',
                    shadeTo: 'light',
                    shadeIntensity: 0.65
                },
              },
              yaxis: {
                title: {
                  text: 'iRating'
                }
              },
              responsive: [{
                  breakpoint: 800,
                  options: {},
              }],
          },
          series: iRData,
          tab: null,
          items: [
            'Pro', 'Team', 'Beer',
          ],
          tabletext: 'Some text here'
  })
}
</script>

<style scoped>
div.chart-wrapper {
  display: block;
  align-items: center;
  justify-content: center
}
</style>
