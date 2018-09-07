<template>
  <div id="app">
    <!-- <router-view/> -->
    <dataTable page-size="20" object-name="Market">
      <div class="column" name="FMID__c" display-name="Market ID" data-editable="false"></div>
      <div class="column" name="Name" display-name="Market Name" data-editable="true"></div>
      <div class="column" name="City__c" display-name="City" data-editable="true"></div>
      <div class="column" name="Twitter__c" display-name="Twitter" data-editable="true"></div>
    </dataTable>

    <dataRow
      v-for="row in rows"
      v-bind:key="row.id"
      v-bind:cells="row">
    </dataRow>

  </div>
</template>

<script>
import dataTable from './components/dataTable'
import dataRow from './components/dataRow'

export default {
  name: 'App',
  data: function () {
    return { rows: [
      {id: 0, name: '@KevinJHill', city: 'Bellevue'},
      {id: 1, name: '@Salesforce', city: 'San Francisco'}
    ],
    colData: [

    ],
    rowsData: [
      {id: 0, values: {FMID__c: 123, Name: 'Market 1', City__c: 'Bellevue'}},
      {id: 1, values: {FMID__c: 124, Name: 'Market 2', City__c: 'San Francisco'}}
    ]}
  },
  components: {
    dataTable, dataRow
  },
  beforeCreate: function () {
    console.log('beforeCreate')
  },
  created: function () {
    console.log('created')
  },
  beforeMount: function () {
    console.log('beforeMount')
  },
  mounted: function () {
    console.log('mounted')
  },
  beforeUpdate: function () {
    console.log('beforeUpdate')
  },
  updated: function () {
    console.log('updated')
  },
  beforeDestroy: function () {
    console.log('beforeDestroy')
  },
  destroyed: function () {
    console.log('destroyed')
  },
  methods: {
    childMounted () {
      console.log('Child was mounted')
    }
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
