<template>
  <v-container
      id="regular-charts-view"
      fluid
      tag="section"
    >
    <div>

      <div class="chart-wrapper">
        <apexchart
        width="100%"
        height="650"
        type="line"
        responsive="true"
        :options="options"
        :series="series">
        </apexchart>
        <!--
        <apexchart
          width="800"
          type="boxPlot"
          :options="options"
          :series="series"
          >
        </apexchart> -->
      </div>

    </div>
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
          series: iRData
              /*
              [
                  [1486684800000, 34],
                  [1486771200000, 43],
                  [1486857600000, 31],
                  [1486944000000, 43],
                  [1487030400000, 33],
                  [1487116800000, 52]
              ]
              */

    /*
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
              ], */
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
