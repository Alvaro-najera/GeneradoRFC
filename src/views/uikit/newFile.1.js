import { ref } from 'vue';
import axios from 'axios';
import { defineComponent } from 'vue';

export default await (async () => {
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const id_emp = ref('');
const loading = ref(false);
const tablaEmpleados = ref([]);
const productoItem = ref(null);

async function load() {
loading.value = true;
try {
const response = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
tablaEmpleados.value = response.data.data;
loading.value = false;
} catch (error) {
console.error('Error al cargar datos:', error);
loading.value = false;
}

const __VLS_componentsOption = {};

let __VLS_name!: 'FloatLabel';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'InputNumber', typeof __VLS_localComponents, "InputNumber", "InputNumber", "InputNumber"> &
__VLS_WithComponent<'Button', typeof __VLS_localComponents, "Button", "Button", "Button"> &
__VLS_WithComponent<'InputText', typeof __VLS_localComponents, "InputText", "InputText", "InputText"> &
__VLS_WithComponent<'DataTable', typeof __VLS_localComponents, "DataTable", "DataTable", "DataTable"> &
__VLS_WithComponent<'Column', typeof __VLS_localComponents, "Column", "Column", "Column">;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.h5; __VLS_intrinsicElements.h5;
__VLS_components.InputNumber; __VLS_components.InputNumber;
// @ts-ignore
[InputNumber, InputNumber,];
__VLS_components.Button;
// @ts-ignore
[Button,];
__VLS_components.InputText; __VLS_components.InputText; __VLS_components.InputText; __VLS_components.InputText; __VLS_components.InputText; __VLS_components.InputText;
// @ts-ignore
[InputText, InputText, InputText, InputText, InputText, InputText,];
__VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3;
__VLS_components.DataTable; __VLS_components.DataTable;
// @ts-ignore
[DataTable, DataTable,];
__VLS_components.Column; __VLS_components.Column; __VLS_components.Column; __VLS_components.Column; __VLS_components.Column; __VLS_components.Column;
// @ts-ignore
[Column, Column, Column, Column, Column, Column,];
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, class: ("card"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("card"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["h5"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
(__VLS_8.slots!).default;
}
{
const __VLS_10 = __VLS_intrinsicElements["div"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, class: ("grid p-fluid mt-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, class: ("grid p-fluid mt-3"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = __VLS_intrinsicElements["div"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{}, class: ("field col-12 md:col-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, class: ("field col-12 md:col-2"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
let __VLS_20!: 'InputNumber' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.InputNumber : (typeof __VLS_resolvedLocalAndGlobalComponents)['InputNumber'];
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, id: ("number-input"), modelValue: ((__VLS_ctx.id_emp)), size: ("40"), placeholder: ("ID del empleado"), style: ({}), }));
({} as { InputNumber: typeof __VLS_20; }).InputNumber;
({} as { InputNumber: typeof __VLS_20; }).InputNumber;
const __VLS_22 = __VLS_21({ ...{}, id: ("number-input"), modelValue: ((__VLS_ctx.id_emp)), size: ("40"), placeholder: ("ID del empleado"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, id: ("number-input"), modelValue: ((__VLS_ctx.id_emp)), size: ("40"), placeholder: ("ID del empleado"), style: ({}), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
}
(__VLS_18.slots!).default;
}
{
const __VLS_25 = __VLS_intrinsicElements["div"];
const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
const __VLS_27 = __VLS_26({ ...{}, class: ("field col-12 md:col-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, class: ("field col-12 md:col-2"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
{
let __VLS_30!: 'Button' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Button : (typeof __VLS_resolvedLocalAndGlobalComponents)['Button'];
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ onClick: {} as any, }, type: ("button"), class: ("mr-2 mb-2"), label: ("Buscar"), icon: ("pi pi-search"), loading: ((__VLS_ctx.loading[0])), }));
({} as { Button: typeof __VLS_30; }).Button;
const __VLS_32 = __VLS_31({ ...{ onClick: {} as any, }, type: ("button"), class: ("mr-2 mb-2"), label: ("Buscar"), icon: ("pi pi-search"), loading: ((__VLS_ctx.loading[0])), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, type: ("button"), class: ("mr-2 mb-2"), label: ("Buscar"), icon: ("pi pi-search"), loading: ((__VLS_ctx.loading[0])), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
let __VLS_35 = { 'click': __VLS_pickEvent(__VLS_34['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_31, typeof __VLS_32>).onClick) };
__VLS_35 = {
click: $event => {
__VLS_ctx.load(0);
// @ts-ignore
[id_emp, id_emp, id_emp, loading, loading, loading, load,];
}
};
}
(__VLS_28.slots!).default;
}
{
const __VLS_36 = __VLS_intrinsicElements["div"];
const __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36);
const __VLS_38 = __VLS_37({ ...{}, class: ("field col-12 md:col-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_36, typeof __VLS_38> & Record<string, unknown>) => void)({ ...{}, class: ("field col-12 md:col-3"), });
const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38)!;
let __VLS_40!: __VLS_NormalizeEmits<typeof __VLS_39.emit>;
{
let __VLS_41!: 'InputText' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.InputText : (typeof __VLS_resolvedLocalAndGlobalComponents)['InputText'];
const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({ ...{}, id: ("nombre"), type: ("text"), size: ("40"), placeholder: ("Nombre del empleado"), style: ({}), }));
({} as { InputText: typeof __VLS_41; }).InputText;
({} as { InputText: typeof __VLS_41; }).InputText;
const __VLS_43 = __VLS_42({ ...{}, id: ("nombre"), type: ("text"), size: ("40"), placeholder: ("Nombre del empleado"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_41, typeof __VLS_43> & Record<string, unknown>) => void)({ ...{}, id: ("nombre"), type: ("text"), size: ("40"), placeholder: ("Nombre del empleado"), style: ({}), });
const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43)!;
let __VLS_45!: __VLS_NormalizeEmits<typeof __VLS_44.emit>;
}
(__VLS_39.slots!).default;
}
{
const __VLS_46 = __VLS_intrinsicElements["div"];
const __VLS_47 = __VLS_elementAsFunctionalComponent(__VLS_46);
const __VLS_48 = __VLS_47({ ...{}, class: ("field col-12 md:col-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_46, typeof __VLS_48> & Record<string, unknown>) => void)({ ...{}, class: ("field col-12 md:col-3"), });
const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48)!;
let __VLS_50!: __VLS_NormalizeEmits<typeof __VLS_49.emit>;
{
let __VLS_51!: 'InputText' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.InputText : (typeof __VLS_resolvedLocalAndGlobalComponents)['InputText'];
const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ ...{}, id: ("nombre"), type: ("text"), size: ("40"), placeholder: ("Sueldo del Empleado"), style: ({}), }));
({} as { InputText: typeof __VLS_51; }).InputText;
({} as { InputText: typeof __VLS_51; }).InputText;
const __VLS_53 = __VLS_52({ ...{}, id: ("nombre"), type: ("text"), size: ("40"), placeholder: ("Sueldo del Empleado"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_51, typeof __VLS_53> & Record<string, unknown>) => void)({ ...{}, id: ("nombre"), type: ("text"), size: ("40"), placeholder: ("Sueldo del Empleado"), style: ({}), });
const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53)!;
let __VLS_55!: __VLS_NormalizeEmits<typeof __VLS_54.emit>;
}
(__VLS_49.slots!).default;
}
{
const __VLS_56 = __VLS_intrinsicElements["div"];
const __VLS_57 = __VLS_elementAsFunctionalComponent(__VLS_56);
const __VLS_58 = __VLS_57({ ...{}, class: ("field col-12 md:col-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_56, typeof __VLS_58> & Record<string, unknown>) => void)({ ...{}, class: ("field col-12 md:col-2"), });
const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58)!;
let __VLS_60!: __VLS_NormalizeEmits<typeof __VLS_59.emit>;
{
let __VLS_61!: 'InputText' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.InputText : (typeof __VLS_resolvedLocalAndGlobalComponents)['InputText'];
const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ ...{}, id: ("nombre"), type: ("text"), size: ("40"), placeholder: ("Edad del Empleado"), style: ({}), }));
({} as { InputText: typeof __VLS_61; }).InputText;
({} as { InputText: typeof __VLS_61; }).InputText;
const __VLS_63 = __VLS_62({ ...{}, id: ("nombre"), type: ("text"), size: ("40"), placeholder: ("Edad del Empleado"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_61, typeof __VLS_63> & Record<string, unknown>) => void)({ ...{}, id: ("nombre"), type: ("text"), size: ("40"), placeholder: ("Edad del Empleado"), style: ({}), });
const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63)!;
let __VLS_65!: __VLS_NormalizeEmits<typeof __VLS_64.emit>;
}
(__VLS_59.slots!).default;
}
(__VLS_13.slots!).default;
}
(__VLS_3.slots!).default;
}
{
const __VLS_66 = __VLS_intrinsicElements["div"];
const __VLS_67 = __VLS_elementAsFunctionalComponent(__VLS_66);
const __VLS_68 = __VLS_67({ ...{}, class: ("grid"), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_66, typeof __VLS_68> & Record<string, unknown>) => void)({ ...{}, class: ("grid"), });
const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68)!;
let __VLS_70!: __VLS_NormalizeEmits<typeof __VLS_69.emit>;
{
const __VLS_71 = __VLS_intrinsicElements["div"];
const __VLS_72 = __VLS_elementAsFunctionalComponent(__VLS_71);
const __VLS_73 = __VLS_72({ ...{}, class: ("col-12"), }, ...__VLS_functionalComponentArgsRest(__VLS_72));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_71, typeof __VLS_73> & Record<string, unknown>) => void)({ ...{}, class: ("col-12"), });
const __VLS_74 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73)!;
let __VLS_75!: __VLS_NormalizeEmits<typeof __VLS_74.emit>;
{
const __VLS_76 = __VLS_intrinsicElements["div"];
const __VLS_77 = __VLS_elementAsFunctionalComponent(__VLS_76);
const __VLS_78 = __VLS_77({ ...{}, class: ("card"), }, ...__VLS_functionalComponentArgsRest(__VLS_77));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_76, typeof __VLS_78> & Record<string, unknown>) => void)({ ...{}, class: ("card"), });
const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_76, __VLS_78)!;
let __VLS_80!: __VLS_NormalizeEmits<typeof __VLS_79.emit>;
{
const __VLS_81 = __VLS_intrinsicElements["h3"];
const __VLS_82 = __VLS_elementAsFunctionalComponent(__VLS_81);
const __VLS_83 = __VLS_82({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_82));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_81, typeof __VLS_83> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_84 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83)!;
let __VLS_85!: __VLS_NormalizeEmits<typeof __VLS_84.emit>;
(__VLS_84.slots!).default;
}
{
let __VLS_86!: 'DataTable' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.DataTable : (typeof __VLS_resolvedLocalAndGlobalComponents)['DataTable'];
const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ ...{}, value: ((__VLS_ctx.tablaEmpleados)), selection: ((__VLS_ctx.productoItem)), class: ("p-datatable-gridlines"), rows: ((5)), paginatorTemplate: ("FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"), rowsPerPageOptions: (([5, 10, 25])), currentPageReportTemplate: ("Visualizando {last} de {totalRecords} productos"), style: ({}), paginator: ((true)), responsiveLayout: ("scroll"), }));
({} as { DataTable: typeof __VLS_86; }).DataTable;
({} as { DataTable: typeof __VLS_86; }).DataTable;
const __VLS_88 = __VLS_87({ ...{}, value: ((__VLS_ctx.tablaEmpleados)), selection: ((__VLS_ctx.productoItem)), class: ("p-datatable-gridlines"), rows: ((5)), paginatorTemplate: ("FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"), rowsPerPageOptions: (([5, 10, 25])), currentPageReportTemplate: ("Visualizando {last} de {totalRecords} productos"), style: ({}), paginator: ((true)), responsiveLayout: ("scroll"), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_86, typeof __VLS_88> & Record<string, unknown>) => void)({ ...{}, value: ((__VLS_ctx.tablaEmpleados)), selection: ((__VLS_ctx.productoItem)), class: ("p-datatable-gridlines"), rows: ((5)), paginatorTemplate: ("FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"), rowsPerPageOptions: (([5, 10, 25])), currentPageReportTemplate: ("Visualizando {last} de {totalRecords} productos"), style: ({}), paginator: ((true)), responsiveLayout: ("scroll"), });
const __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88)!;
let __VLS_90!: __VLS_NormalizeEmits<typeof __VLS_89.emit>;
{
let __VLS_91!: 'Column' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Column : (typeof __VLS_resolvedLocalAndGlobalComponents)['Column'];
const __VLS_92 = __VLS_asFunctionalComponent(__VLS_91, new __VLS_91({ ...{}, field: ("employee_name"), sortable: ((true)), header: ("Nombre"), }));
({} as { Column: typeof __VLS_91; }).Column;
({} as { Column: typeof __VLS_91; }).Column;
const __VLS_93 = __VLS_92({ ...{}, field: ("employee_name"), sortable: ((true)), header: ("Nombre"), }, ...__VLS_functionalComponentArgsRest(__VLS_92));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_91, typeof __VLS_93> & Record<string, unknown>) => void)({ ...{}, field: ("employee_name"), sortable: ((true)), header: ("Nombre"), });
const __VLS_94 = __VLS_pickFunctionalComponentCtx(__VLS_91, __VLS_93)!;
let __VLS_95!: __VLS_NormalizeEmits<typeof __VLS_94.emit>;
}
{
let __VLS_96!: 'Column' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Column : (typeof __VLS_resolvedLocalAndGlobalComponents)['Column'];
const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({ ...{}, field: ("employee_salary"), header: ("Salario"), }));
({} as { Column: typeof __VLS_96; }).Column;
({} as { Column: typeof __VLS_96; }).Column;
const __VLS_98 = __VLS_97({ ...{}, field: ("employee_salary"), header: ("Salario"), }, ...__VLS_functionalComponentArgsRest(__VLS_97));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_96, typeof __VLS_98> & Record<string, unknown>) => void)({ ...{}, field: ("employee_salary"), header: ("Salario"), });
const __VLS_99 = __VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98)!;
let __VLS_100!: __VLS_NormalizeEmits<typeof __VLS_99.emit>;
}
{
let __VLS_101!: 'Column' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Column : (typeof __VLS_resolvedLocalAndGlobalComponents)['Column'];
const __VLS_102 = __VLS_asFunctionalComponent(__VLS_101, new __VLS_101({ ...{}, field: ("employee_age"), header: ("Edad"), }));
({} as { Column: typeof __VLS_101; }).Column;
({} as { Column: typeof __VLS_101; }).Column;
const __VLS_103 = __VLS_102({ ...{}, field: ("employee_age"), header: ("Edad"), }, ...__VLS_functionalComponentArgsRest(__VLS_102));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_101, typeof __VLS_103> & Record<string, unknown>) => void)({ ...{}, field: ("employee_age"), header: ("Edad"), });
const __VLS_104 = __VLS_pickFunctionalComponentCtx(__VLS_101, __VLS_103)!;
let __VLS_105!: __VLS_NormalizeEmits<typeof __VLS_104.emit>;
}
(__VLS_89.slots!).default;
}
(__VLS_79.slots!).default;
}
(__VLS_74.slots!).default;
}
(__VLS_69.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[tablaEmpleados, productoItem, tablaEmpleados, productoItem, tablaEmpleados, productoItem,];
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
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
}).catch((error) => {
console.log(error);
});
},
methods: {
Consultar() {
if (this.id_emp === null) {
this.$toast.add({
severity: 'warn',
summary: 'Favor de ingresar el ID del empleado',
detail: 'No has Ingresado su ID del empleado',
life: 5000
});
} else {
axios.get(`https://dummy.restapiexample.com/api/v1/employee/${this.id_emp}`, {
headers: {
'Access-Control-Allow-Origin': '*',
}
}).then((response) => {
this.empleado = response.data.data;
}).catch((error) => {
this.$toast.add({
severity: 'warn',
summary: 'Error interno de la API',
detail: 'LA API GENERA UN "TIPO ERROR" AL BUSCAR LOS DATOS DE UN EMPLEADO EN ESPECIFICO!',
life: 3000
});
console.log(error);
});
}
}
},
setup() {
return {
id_emp: id_emp as typeof id_emp,
loading: loading as typeof loading,
tablaEmpleados: tablaEmpleados as typeof tablaEmpleados,
productoItem: productoItem as typeof productoItem,
load: load as typeof load,
loading: loading as typeof loading,
load: load as typeof load,
};
},
});
return defineComponent({
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
}).catch((error) => {
console.log(error);
});
},
methods: {
Consultar() {
if (this.id_emp === null) {
this.$toast.add({
severity: 'warn',
summary: 'Favor de ingresar el ID del empleado',
detail: 'No has Ingresado su ID del empleado',
life: 5000
});
} else {
axios.get(`https://dummy.restapiexample.com/api/v1/employee/${this.id_emp}`, {
headers: {
'Access-Control-Allow-Origin': '*',
}
}).then((response) => {
this.empleado = response.data.data;
}).catch((error) => {
this.$toast.add({
severity: 'warn',
summary: 'Error interno de la API',
detail: 'LA API GENERA UN "TIPO ERROR" AL BUSCAR LOS DATOS DE UN EMPLEADO EN ESPECIFICO!',
life: 3000
});
console.log(error);
});
}
}
},
setup() {
return {};
},
});
} ();
});
