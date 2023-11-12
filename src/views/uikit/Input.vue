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
                            <InputText type="text" placeholder="$ " v-model="subtotal" readonly  />
                        </template>
                        <template v-slot:end>
                            <label for="total">IVA(16%): </label>
                            <InputText type="text" placeholder="$ " v-model="iva" readonly />
                            <label for="total">Total: </label>
                            <InputText type="text" placeholder="$ " v-model="totalCompra" readonly />
                        </template>
                    </Toolbar>
                </Panel>

                <Toast />
            </div>
        </div>
    </div>
</template>
