<script>
import { Bar, HorizontalBar } from 'vue-chartjs';

export default {
    // extends: Bar,
    extends: HorizontalBar,
    name: 'BarChart',
    props: ['chartData'],
    mounted() {
        const data = this.chartData;
        const options = {};
        console.log('get', data, this.chartData);
        this.renderChart(data, options);
    }
}
</script>

<style scope>

</style>
