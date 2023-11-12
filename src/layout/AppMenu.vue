<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'UNIVERSIDAD AUTONOMA DE CHIAPAS',
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
    },
    {
        label: 'MODULOS',
        items: [
            { label: 'Demo Clientes', icon: 'pi pi-fw pi-id-card', to: '/uikit/formlayout' },
            { label: 'Punto de Venta', icon: 'pi pi-fw pi-check-square', to: '/uikit/input' },
            { label: 'Demo Empleados API REST', icon: 'pi pi-fw pi-check-square', to: '/uikit/floatlabel' },
            { label: 'Demo Generacion Graficas ApiRes', icon: 'pi pi-fw pi-chart-bar', to: '/uikit/invalidstate' },
        ]
    },
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
        <li>
            <a href="https://www.primefaces.org/primeblocks-vue/#/" target="_blank">
            </a>
        </li>
    </ul>
</template>

<style lang="scss" scoped></style>
