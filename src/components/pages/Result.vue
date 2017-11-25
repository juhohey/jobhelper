<template>
    <div class="result">
      <h1>Here's the results!</h1>
        <bar-chart :chart-data="chartData"></bar-chart>
    </div>
</template>

<script>
    import { Bar } from 'vue-chartjs';
    const fieldsOfInterest = [
        'Agriculture/Food',
        'Animals/Wildlife',
        'Arts/Humanities',
        'Civil Rights',
       'Community development',
        'Crime/Law enforcement',
        'Education',
        'Employment',
        'Environment',
        'Health care',
        'Health organizations',
        'Housing/Shelter',
        'Human services',
        'International affairs',
        'International giving',
        'Medical research',
        'Mental health/Crisis',
        'Services',
        'Mutual aid societies',
        'Philanthropy/Voluntarism',
        'Population groups',
        'Public affairs',
        'Recreation',
        'Religion',
        'Safety/disasters',
        'Science',
        'Social sciences',
        'Unknown/not classified',
        'Youth development'
    ];

    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    const chart = {
          labels: shuffle(fieldsOfInterest).slice(0,4),
          datasets: [
              {
                  label: 'GitHub Commits',
                  backgroundColor: '#f87979',
                  data: [40, 20, 12, 39, 10]
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
