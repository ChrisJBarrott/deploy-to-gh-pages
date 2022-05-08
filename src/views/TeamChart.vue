<template>
  <v-container
      id="regular-charts-view"
      fluid
      tag="section"
    >
    <div>
      <hr>
      <div class="chart-wrapper">
        <apexchart
          width="800"
          type="boxPlot"
          :options="options"
          :series="series"
          >
        </apexchart>
      </div>
      <hr>
    </div>
  </v-container>
</template>

<script>
  export default {
  name: 'boxplot',
  data: () => ({
    options: {
        chart: {
          id: 'vuechart-example',
        },
        plotOptions: {
          bar: {
            //horizontal: true,
            barHeight: '50%'
          },
          boxPlot: {
            colors: {
              upper: '#e9ecef',
              lower: '#f8f9fa'
            }
          }
        },

        title: {
          text: 'Test Chart - Please Ignore',
          align: 'center',
          style: {
            fontSize:  '20px',
          },
        },

        xaxis: {
          type: 'datetime',
          min: new Date('2016-12-01').getTime(),
          max: new Date('2021-01-01').getTime(),
          tooltip: {
            formatter: function(val) {
              return new Date(val).getFullYear()
            }
          }
        },

        tooltip: {
          shared: false,
          intersect: true,
          enabledOnSeries: [0]
        },

      },
      series: [
                {
                  name: 'box',
                  type: 'boxPlot',
                  data: [
                    {
                      x: new Date('2017-01-01').getTime(),
                      y: [54, 66, 69, 75, 88]
                    },
                    {
                      x: new Date('2018-01-01').getTime(),
                      y: [43, 65, 69, 76, 81]
                    },
                    {
                      x: new Date('2019-01-01').getTime(),
                      y: [31, 39, 45, 51, 59]
                    },
                    {
                      x: new Date('2020-01-01').getTime(),
                      y: [39, 46, 55, 65, 71]
                    },
                    {
                      x: new Date('2021-01-01').getTime(),
                      y: [29, 31, 35, 39, 44]
                    }
                  ]
                },
                {
                  name: 'outliers',
                  type: 'scatter',
                  data: [
                    {
                      x: new Date('2017-01-01').getTime(),
                      y: 32
                    },
                    {
                      x: new Date('2018-01-01').getTime(),
                      y: 25
                    },
                    {
                      x: new Date('2019-01-01').getTime(),
                      y: 64
                    },
                    {
                      x: new Date('2020-01-01').getTime(),
                      y: 27
                    },
                    {
                      x: new Date('2020-01-01').getTime(),
                      y: 78
                    },
                    {
                      x: new Date('2021-01-01').getTime(),
                      y: 15
                    }
                  ]
                }
              ],


  })
}
</script>

<style scoped>
div.chart-wrapper {
  display: flex;
  align-items: center;
  justify-content: center
}
</style>
