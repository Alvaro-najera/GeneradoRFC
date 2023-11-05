/* __placeholder__ */
export default (await import('vue')).defineComponent({
data() {
return {
tablaCompras: [
{ cns: 1, nomProducto: 'Impresora LaserJet Color', cantidad: 2, precioUnitario: 5200, precioParcial: 10400 },
{ cns: 2, nomProducto: 'Monitor LED 31 plg.', cantidad: 3, precioUnitario: 1700, precioParcial: 5100 }
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
///this.productoItem.precioUnitario = parseFloat(this.productoItem.precioUnitario);
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
});
