<template>
  <div id="app">
    <dataTable v-bind:data="rows">
        <dataColumn field='FMID__c' label='Market Id'></dataColumn>
        <dataColumn field='Name' label='Name' editable></dataColumn>
        <dataColumn field='City__c' label='City' editable></dataColumn>
        <dataColumn field='Twitter__c' label='Twitter' editable></dataColumn>
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
    data: function () {
        return {
            rows: [
                { id: 0, FMID__c: '0', Name: 'Ferry Building Market', City__c: 'San Francisco', Twitter__c: undefined },
                { id: 1, FMID__c: '1', Name: 'Weekend Market', City__c: 'Alameda', Twitter__c: '@market' }
            ]
        }
    },
    components: {
        dataTable, dataColumn
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
