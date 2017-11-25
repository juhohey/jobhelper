<script>
import { Bar } from 'vue-chartjs';

export default {
    extends: Bar,
    name: 'BarChart',
    mounted() {
        const data = window.store.get('chartData');
        console.log('get', data);
        this.renderChart(data);
    }
}
</script>

<style scope>

</style>
