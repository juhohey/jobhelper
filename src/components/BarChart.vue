<script>
import { Bar } from 'vue-chartjs';

export default {
    extends: Bar,
    name: 'BarChart',
    props: ['chartData'],
    mounted() {
        const data = this.chartData;
        console.log('get', data, this.chartData);
        this.renderChart(data);
    }
}
</script>

<style scope>

</style>
