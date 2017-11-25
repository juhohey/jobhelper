<template>
    <div class="result">
      <h1>Here's the results!</h1>
        <bar-chart :chart-data="chartData"></bar-chart>
    </div>
</template>

<script>
    import { Bar } from 'vue-chartjs';
    const chart = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
              {
                  label: 'GitHub Commits',
                  backgroundColor: '#f87979',
                  data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
              }
        ]
    }
    export default {
        name: 'Result',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                chartData: chart
            };
        },
        components: {

        },
    }
</script>

<style scoped>

</style>
