<!-- <script setup>
import { ref, onMounted } from 'vue';
import CountryService from '@/service/CountryService';
import NodeService from '@/service/NodeService';

const floatValue = ref(null);
const autoValue = ref(null);
const selectedAutoValue = ref(null);
const autoFilteredValue = ref([]);
const calendarValue = ref(null);
const inputNumberValue = ref(null);
const chipsValue = ref(null);
const sliderValue = ref(50);
const ratingValue = ref(null);
const colorValue = ref('#1976D2');
const radioValue = ref(null);
const checkboxValue = ref([]);
const switchValue = ref(false);
const listboxValues = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
const listboxValue = ref(null);
const dropdownValues = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
const dropdownValue = ref(null);
const multiselectValues = ref([
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
]);

const multiselectValue = ref(null);
const toggleValue = ref(false);
const selectButtonValue1 = ref(null);
const selectButtonValues1 = ref([{ name: 'Option 1' }, { name: 'Option 2' }, { name: 'Option 3' }]);
const selectButtonValue2 = ref(null);
const selectButtonValues2 = ref([{ name: 'Option 1' }, { name: 'Option 2' }, { name: 'Option 3' }]);
const knobValue = ref(50);
const inputGroupValue = ref(false);
const treeSelectNodes = ref(null);
const selectedNode = ref(null);
const countryService = new CountryService();
const nodeService = new NodeService();

onMounted(() => {
    countryService.getCountries().then((data) => (autoValue.value = data));
    nodeService.getTreeNodes().then((data) => (treeSelectNodes.value = data));
});

const searchCountry = (event) => {
    setTimeout(() => {
        if (!event.query.trim().length) {
            autoFilteredValue.value = [...autoValue.value];
        } else {
            autoFilteredValue.value = autoValue.value.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
        }
    }, 250);
};
</script>
<template>
    <div class="grid p-fluid">
        <div class="col-12 md:col-6">
            <div class="card">
                <h5>InputText</h5>
                <div class="grid formgrid">
                    <div class="col-12 mb-2 lg:col-4 lg:mb-0">
                        <InputText type="text" placeholder="Default"></InputText>
                    </div>
                    <div class="col-12 mb-2 lg:col-4 lg:mb-0">
                        <InputText type="text" placeholder="Disabled" :disabled="true"></InputText>
                    </div>
                    <div class="col-12 mb-2 lg:col-4 lg:mb-0">
                        <InputText type="text" placeholder="Invalid" class="p-invalid" />
                    </div>
                </div>

                <h5>Icons</h5>
                <div class="grid formgrid">
                    <div class="col-12 mb-2 lg:col-4 lg:mb-0">
                        <span class="p-input-icon-left">
                            <i class="pi pi-user" />
                            <InputText type="text" placeholder="Username" />
                        </span>
                    </div>
                    <div class="col-12 mb-2 lg:col-4 lg:mb-0">
                        <span class="p-input-icon-right">
                            <InputText type="text" placeholder="Search" />
                            <i class="pi pi-search" />
                        </span>
                    </div>
                    <div class="col-12 mb-2 lg:col-4 lg:mb-0">
                        <span class="p-input-icon-left p-input-icon-right">
                            <i class="pi pi-user" />
                            <InputText type="text" placeholder="Search" />
                            <i class="pi pi-search" />
                        </span>
                    </div>
                </div>

                <h5>Float Label</h5>
                <span class="p-float-label">
                    <InputText id="username" type="text" v-model="floatValue" />
                    <label for="username">Username</label>
                </span>

                <h5>Textarea</h5>
                <Textarea placeholder="Your Message" :autoResize="true" rows="3" cols="30" />

                <h5>AutoComplete</h5>
                <AutoComplete placeholder="Search" id="dd" :dropdown="true" :multiple="true" v-model="selectedAutoValue" :suggestions="autoFilteredValue" @complete="searchCountry($event)" field="name" />

                <h5>Calendar</h5>
                <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue"></Calendar>

                <h5>Spinner</h5>
                <InputNumber v-model="inputNumberValue" showButtons mode="decimal"></InputNumber>

                <h5>Chips</h5>
                <Chips v-model="chipsValue" />
            </div>

            <div class="card">
                <div class="grid">
                    <div class="col-12">
                        <h5>Slider</h5>
                        <InputText v-model.number="sliderValue" />
                        <Slider v-model="sliderValue" />
                    </div>
                    <div class="col-12 md:col-6">
                        <h5>Rating</h5>
                        <Rating v-model="ratingValue" />
                    </div>
                    <div class="col-12 md:col-6">
                        <h5>ColorPicker</h5>
                        <ColorPicker style="width: 2rem" v-model="colorValue" />
                    </div>
                    <div class="col-12">
                        <h5>Knob</h5>
                        <Knob v-model="knobValue" :step="10" :min="-50" :max="50" valueTemplate="{value}%" />
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 md:col-6">
            <div class="card">
                <h5>RadioButton</h5>
                <div class="grid">
                    <div class="col-12 md:col-4">
                        <div class="field-radiobutton mb-0">
                            <RadioButton id="option1" name="option" value="Chicago" v-model="radioValue" />
                            <label for="option1">Chicago</label>
                        </div>
                    </div>
                    <div class="col-12 md:col-4">
                        <div class="field-radiobutton mb-0">
                            <RadioButton id="option2" name="option" value="Los Angeles" v-model="radioValue" />
                            <label for="option2">Los Angeles</label>
                        </div>
                    </div>
                    <div class="col-12 md:col-4">
                        <div class="field-radiobutton mb-0">
                            <RadioButton id="option3" name="option" value="New York" v-model="radioValue" />
                            <label for="option3">New York</label>
                        </div>
                    </div>
                </div>

                <h5>Checkbox</h5>
                <div class="grid">
                    <div class="col-12 md:col-4">
                        <div class="field-checkbox mb-0">
                            <Checkbox id="checkOption1" name="option" value="Chicago" v-model="checkboxValue" />
                            <label for="checkOption1">Chicago</label>
                        </div>
                    </div>
                    <div class="col-12 md:col-4">
                        <div class="field-checkbox mb-0">
                            <Checkbox id="checkOption2" name="option" value="Los Angeles" v-model="checkboxValue" />
                            <label for="checkOption2">Los Angeles</label>
                        </div>
                    </div>
                    <div class="col-12 md:col-4">
                        <div class="field-checkbox mb-0">
                            <Checkbox id="checkOption3" name="option" value="New York" v-model="checkboxValue" />
                            <label for="checkOption3">New York</label>
                        </div>
                    </div>
                </div>

                <h5>Input Switch</h5>
                <InputSwitch v-model="switchValue" />
            </div>

            <div class="card">
                <h5>Listbox</h5>
                <Listbox v-model="listboxValue" :options="listboxValues" optionLabel="name" :filter="true" />

                <h5>Dropdown</h5>
                <Dropdown v-model="dropdownValue" :options="dropdownValues" optionLabel="name" placeholder="Select" />

                <h5>MultiSelect</h5>
                <MultiSelect v-model="multiselectValue" :options="multiselectValues" optionLabel="name" placeholder="Select Countries" :filter="true">
                    <template #value="slotProps">
                        <div class="inline-flex align-items-center py-1 px-2 bg-primary text-primary border-round mr-2" v-for="option of slotProps.value" :key="option.code">
                            <span :class="'mr-2 flag flag-' + option.code.toLowerCase()" style="width: 18px; height: 12px" />
                            <div>{{ option.name }}</div>
                        </div>
                        <template v-if="!slotProps.value || slotProps.value.length === 0">
                            <div class="p-1">Select Countries</div>
                        </template>
                    </template>
                    <template #option="slotProps">
                        <div class="flex align-items-center">
                            <span :class="'mr-2 flag flag-' + slotProps.option.code.toLowerCase()" style="width: 18px; height: 12px" />
                            <div>{{ slotProps.option.name }}</div>
                        </div>
                    </template>
                </MultiSelect>

                <h5>TreeSelect</h5>
                <TreeSelect v-model="selectedNode" :options="treeSelectNodes" placeholder="Select Item"></TreeSelect>
            </div>

            <div class="card">
                <h5>ToggleButton</h5>
                <ToggleButton v-model="toggleValue" onLabel="Yes" offLabel="No" :style="{ width: '10em' }" />

                <h5>SelectButton</h5>
                <SelectButton v-model="selectButtonValue1" :options="selectButtonValues1" optionLabel="name" />

                <h5>SelectButton - Multiple</h5>
                <SelectButton v-model="selectButtonValue2" :options="selectButtonValues2" optionLabel="name" :multiple="true" />
            </div>
        </div>

        <div class="col-12">
            <div class="card">
                <h5>Input Groups</h5>
                <div class="grid p-fluid">
                    <div class="col-12 md:col-6">
                        <div class="p-inputgroup">
                            <span class="p-inputgroup-addon">
                                <i class="pi pi-user"></i>
                            </span>
                            <InputText placeholder="Username" />
                        </div>
                    </div>

                    <div class="col-12 md:col-6">
                        <div class="p-inputgroup">
                            <span class="p-inputgroup-addon"><i class="pi pi-shopping-cart"></i></span>
                            <span class="p-inputgroup-addon"><i class="pi pi-globe"></i></span>
                            <InputText placeholder="Price" />
                            <span class="p-inputgroup-addon">$</span>
                            <span class="p-inputgroup-addon">.00</span>
                        </div>
                    </div>

                    <div class="col-12 md:col-6">
                        <div class="p-inputgroup">
                            <Button label="Search" />
                            <InputText placeholder="Keyword" />
                        </div>
                    </div>

                    <div class="col-12 md:col-6">
                        <div class="p-inputgroup">
                            <span class="p-inputgroup-addon p-inputgroup-addon-checkbox">
                                <Checkbox v-model="inputGroupValue" :binary="true" />
                            </span>
                            <InputText placeholder="Confirm" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> -->

<script>
export default {
    data() {
        return {
            tablaCompras: [
                { cns: 1, nomProducto: 'Impresora LaserJet Color', cantidad: 2, precioUnitario: 5200.0, precioParcial: 10400.0 },
                { cns: 2, nomProducto: 'Monitor LED 31 plg.', cantidad: 3, precioUnitario: 1700.0, precioParcial: 5100.0 }
            ],
            productoItem: {
                cns: null,
                nomProducto: null,
                cantidad: null,
                precioUnitario: null,
                precioParcial: null
            },
            subtotal: 0,
            iva: 0,
            totalCompra: 0
        };
    },
    created() {
        this.calcularSubtotal();
    },
    methods: {
        formatoMoneda(value) {
            if (value) return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
            return;
        },
        registrarCompra() {
            if (!this.productoItem.cns) {
                // Calcular el nuevo valor de cns basado en el último registro
                const maxCns = Math.max(...this.tablaCompras.map((item) => item.cns), 0);
                this.productoItem.cns = maxCns + 1;
            }

            this.productoItem.precioUnitario = parseFloat(this.productoItem.precioUnitario);
            this.productoItem.precioParcial = this.productoItem.precioUnitario * this.productoItem.cantidad;
            this.tablaCompras.push({ ...this.productoItem });
            this.productoItem = {}; // Limpiar campos

            this.$toast.add({ severity: 'success', summary: 'Confirmación', detail: 'Nueva compra registrada', life: 3000 });
            this.calcularSubtotal();
        },
        modificarProductos() {
            if (this.productoItem.cns !== null) {
                // Buscar el índice del producto seleccionado
                const index = this.tablaCompras.findIndex((producto) => producto.cns === this.productoItem.cns);
                if (index !== -1) {
                    // Actualizar los campos
                    this.tablaCompras[index].nomProducto = this.productoItem.nomProducto;
                    this.tablaCompras[index].cantidad = this.productoItem.cantidad;
                    this.productoItem.precioUnitario = parseFloat(this.productoItem.precioUnitario);
                    this.tablaCompras[index].precioUnitario = this.productoItem.precioUnitario;
                    this.tablaCompras[index].precioParcial = this.productoItem.precioUnitario * this.productoItem.cantidad;
                    // Limpiar campos de edición
                    this.productoItem = {};
                    this.$toast.add({ severity: 'success', summary: 'Confirmación', detail: 'Producto modificado', life: 3000 });
                    this.calcularSubtotal();
                }
            }
        },
        //rellena los campos en los inpumText para editar
        editarProductos(data) {
            this.productoItem = { ...data };
        },
        confirmaEliminarProductos(data) {
            // Encontrar el índice del producto a eliminar
            const index = this.tablaCompras.findIndex((producto) => producto.cns === data.cns);
            if (index !== -1) {
                // Eliminar el producto de la tabla
                this.tablaCompras.splice(index, 1);
                this.$toast.add({ severity: 'success', summary: 'Confirmación', detail: 'Producto eliminado', life: 3000 });
                this.calcularSubtotal();
            }
        },
        calcularSubtotal() {
            this.subtotal = this.tablaCompras.reduce((total, producto) => total + producto.precioParcial, 0);
            this.iva = this.subtotal * 0.16;
            this.totalCompra = this.subtotal + this.iva;

            // Aplicar formato de moneda mexicana (MXN) a las variables
            this.subtotal = this.formatoMoneda(this.subtotal);
            this.iva = this.formatoMoneda(this.iva);
            this.totalCompra = this.formatoMoneda(this.totalCompra);
        }
    }
};
</script>

<template>
    <div class="p-grid">
        <div class="p-col-12">
            <div class="card">
                <Panel header="PUNTO DE VENTA (POS)" style="height: 100%">
                    <Toolbar class="p-mb-4">
                        <template v-slot:start>
                            <InputText type="text" size="40" placeholder="Nombre del producto..." v-model="productoItem.nomProducto" />
                            <InputText type="text" placeholder="Cant" v-model="productoItem.cantidad" />
                            <InputText type="text" placeholder="$ Precio U." v-model="productoItem.precioUnitario" />
                        </template>
                        <template v-slot:end>
                            <Button label="Registrar" icon="pi pi-plus" class="p-button-success p-mr-2" @click="registrarCompra" />
                            <Button label="Modificar" icon="pi pi-pencil" class="p-button-success p-mr-2" @click="modificarProductos" />
                        </template>
                    </Toolbar>
                    <br />

                    <DataTable
                        :value="tablaCompras"
                        v-model:selection="productoItem"
                        class="p-datatable-gridlines"
                        dataKey="cns"
                        :rows="5"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        :rowsPerPageOptions="[5, 10, 25]"
                        currentPageReportTemplate="Visualizando {last} de {totalRecords} productos"
                        style="margin-bottom: 20px"
                        :paginator="true"
                        responsiveLayout="scroll"
                    >
                        <Column field="cns" header="Cns" :sortable="true" style="width: 50px"></Column>
                        <Column field="nomProducto" header="Nombre del Producto" style="width: 370px"></Column>
                        <Column field="precioUnitario" header="Precio U." dataType="numeric" style="width: 80px">
                            <template #body="slotProps">
                                {{ formatoMoneda(slotProps.data.precioUnitario) }}
                            </template>
                        </Column>
                        <Column field="cantidad" header="Cant." style="width: 60px; text-align: center"></Column>
                        <Column field="precioParcial" header="Precio P." style="width: 80px">
                            <template #body="slotProps">
                                {{ formatoMoneda(slotProps.data.precioParcial) }}
                            </template></Column
                        >
                        <Column style="width: 140px">
                            <template #header> Acciones </template>
                            <template #body="slotProps">
                                <Button icon="pi pi-pencil" type="button" class="p-button-success p-mr-2 p-mb-1" @click="editarProductos(slotProps.data)"></Button>
                                <Button icon="pi pi-trash" type="button" class="p-button-danger p-mb-1" @click="confirmaEliminarProductos(slotProps.data)"></Button>
                            </template>
                        </Column>
                    </DataTable>

                    <br />
                    <Toolbar class="p-mb-4">
                        <template v-slot:start>
                            <label for="total">Subtotal: </label>
                            <InputText type="text" placeholder="$ " v-model="subtotal" />
                        </template>
                        <template v-slot:end>
                            <label for="total">IVA(16%): </label>
                            <InputText type="text" placeholder="$ " v-model="iva" />
                            <label for="total">Total: </label>
                            <InputText type="text" placeholder="$ " v-model="totalCompra" />
                        </template>
                    </Toolbar>
                </Panel>

                <Toast />
            </div>
        </div>
    </div>
</template>
