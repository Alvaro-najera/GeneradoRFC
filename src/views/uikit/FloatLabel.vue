<script setup>
import { ref, onBeforeMount, onMounted, computed } from 'vue';
import CountryService from '@/service/CountryService';

const countryService = new CountryService();
const loading = ref([false, false, false]);
onMounted(() => {
    countryService.getCountries().then((data) => (countries.value = data));
});

const load = (index) => {
    loading.value[index] = true;
    setTimeout(() => (loading.value[index] = false), 1000);
};
</script>

<script>
import axios from "axios";
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            empleados: [],
            id_emp: null,
            message: "No has ingresado su ID del empleado",
            empleado: {}
        };

    },
    mounted() {
        axios.get("https://dummy.restapiexample.com/api/v1/employees", {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }).then((response) => {
            this.empleados = response.data.data;
        })
            .catch((error) => {
                console.log(error);
            });
    },

    methods: {
        Consultar() {

            if (this.id_emp === null) {
                this.$toast.add({ severity: 'warn', summary: 'UPS!!!', detail: 'No has Ingresado su ID del empleado', life: 5000 });

            } else {
                axios.get(`https://dummy.restapiexample.com/api/v1/employee/${this.id_emp}`, {

                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    }
                }).
                    then((response) => {
                        this.empleado = response.data.data;
                        this.id_emp = null;
                    }).catch((error) => {
                        //alert("Error: " + error.response.status + " " + error.response.statusText);
                        this.$toast.add({ severity: 'warn', summary: 'Error interno de la API', detail: 'LA API GENERA UN "TIPO ERROR 429" !', life: 4000 });
                        this.id_emp = null;
                        console.log(error);
                    });
            }


        }
    }
});
</script>

<template>
    <div class="p-grid">
        <Toast />
        <div class="p-col-12">
            <div class="card">
                <Panel header="Consumir una API" style="height: 100%">
                  <h3>Buscar Empleado por su ID</h3>
                    <Toolbar class="p-mb-4">
                        <template v-slot:start && #body="slotProps">
                            <InputNumber id="number-input" v-model="id_emp" size="40" placeholder="ID del empleado" style="margin-right: 10px;"></InputNumber>
                            <Button type="button" class="p-float-label" label="  Buscar" icon="pi pi-search" iconPos="right" :loading="loading[1]" @click="load(1) & Consultar()" style="margin-right: 50px" />
                            <InputText id="nombre" type="text" :value="empleado.employee_name" size="40" placeholder="Nombre del empleado" style="margin-right: 10px"></InputText>
                            <InputText id="salario" type="text" :value="empleado.employee_salary" size="40" placeholder="Edad del empleado" style="margin-right: 10px"></InputText>
                            <InputText id="edad" type="text" :value="empleado.employee_age" size="40" placeholder="Sueldo del empleado" style="margin-right: 10px"></InputText>
                          </template>
                        <br>
                    </Toolbar>
                   <hr>
                    <div class="grid">
                        <div class="col-12">
                            <div class="card">
                                <div>
                                    <h3>Lista de empleados</h3>
                                    <DataTable v-bind="value" :value="empleados" showGridlines paginator :rows="5"
                                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" 
                                        :rowsPerPageOptions="[5,10,15,20,25]" 
                                        tableStyle="min-width: 50rem" 
                                        currentPageReportTemplate="Visualizando {last} de {totalRecords} empleados!">
                                        <Column field="employee_name" :sortable="true" header="Nombre"></Column>
                                        <Column field="employee_salary" header="Salario"></Column>
                                        <Column field="employee_age" header="Edad"></Column>
                                    </DataTable>
                                </div>
                            </div>
                        </div>
                    </div>
                </Panel>
            </div>
        </div>
    </div>
</template>