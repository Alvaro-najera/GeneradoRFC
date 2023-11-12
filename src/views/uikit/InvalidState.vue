<script setup>
import { ref, watch } from 'vue';
import { useLayout } from '@/layout/composables/layout';
</script>

<script>
import axios from "axios";
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            aapl: [],
            opciones: [],
            datos: [],
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: 'Datos de cambio porcentual trimestral',
                        data: [],
                        fill: false,
                        backgroundColor: '#2f4860',
                        borderColor: '#2f4860',
                        tension: .8
                    }
                ]
            },
            options: {
                responsive: true
            }
        };

    },
    async mounted() {
        axios.get("https://eodhistoricaldata.com/api/eod/MCD.US?from=2017-01-05&to=2017-02-05&period=d&fmt=json&api_token=OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX", {
        }).then((response) => {
            this.aapl = response.data;
            for (var i = 0; i < this.aapl.length; i++) {
                var counter = this.aapl[i];
                this.opciones.push(counter.date),
                    this.datos.push(counter.close)
            }
            this.chartData.labels = this.opciones;
            this.chartData.datasets[0].data = this.datos;

        }).catch((error) => {
            console.log(error);
        });
    }
});
</script>
<template>
    <div class="grid p-fluid">
        <Panel header="API de datos históricos del mercado de valores de Lyon, Francia" style="height: 100%">
            <div class="col-12">
                <div class="card">
                    <Chart type="line" :data="chartData" :options="options" class="h-40rem"></Chart>
                </div>
            </div>
            <div class="grid col-12">
                <div class="col-12">
                    <div class="card">
                        <h5>Cambio porcentual por dia de acciones AAPL (2017-01-05 / 2017-02-05)</h5>
                        <DataTable v-bind="value" :value="aapl" showGridlines paginator :rows="6"
                            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                            :rowsPerPageOptions="[3, 10, 15, 24]" tableStyle="min-width: 80rem"
                            currentPageReportTemplate="Visualizando {last} de {totalRecords} registros!">
                            <Column field="date" :sortable="true" header="FECHA REGISTRADA"></Column>
                            <Column field="open" header="VALOR INICIAL"></Column>
                            <Column field="close" header="VALOR FINAL"></Column>
                        </DataTable>
                    </div>
                </div>
            </div>
        </Panel>
    </div>
</template>