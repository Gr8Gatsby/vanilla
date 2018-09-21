<template>
  <div id="app">
    <dataTable v-bind:data="data" v-on:change="$emit('change', $event)">
        <dataColumn field='FMID__c' label='Market Id'></dataColumn>
        <dataColumn field='Name' label='Name' editable></dataColumn>
        <dataColumn field='City__c' label='City' editable></dataColumn>
    </dataTable>
  </div>
</template>

<script>
import dataTable from './components/dataTable'
import dataColumn from './components/dataColumn'

export default {
    name: 'App',
    props: {
        data: Array
    },
    components: {
        dataTable, dataColumn
    }
}
</script>

<style>
.table {
    border: 1px solid red;
    padding: 5px;
    text-align: center;
}
</style>
