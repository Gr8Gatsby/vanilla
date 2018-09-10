<template>
  <div id="app">
    <h1>Vue App</h1>
    <!-- <router-view/> -->
    <dataTable page-size="20" object-name="Market">
      <div class="column" name="FMID__c" display-name="Market ID" data-editable="false"></div>
      <div class="column" name="Name" display-name="Market Name" data-editable="true"></div>
      <div class="column" name="Id" display-name="Salesforce Id" data-editable="false"></div>
      <!-- <div class="column" name="Twitter__c" display-name="Twitter" data-editable="true"></div> -->
    </dataTable>

    <dataRow
      v-for="row in rowsData"
      v-bind:key="row._props.Id"
      v-bind:cells="row._props">{{ row }}
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
    // eslint-disable-next-line
    rowsData:[{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1018261,"Name":"Caledonia Farmers Market Association - Danville","Id":"a00R00000012ZKhIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1018318,"Name":"Stearns Homestead Farmers&#39; Market","Id":"a00R00000012ZKiIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1009364,"Name":"106 S. Main Street Farmers Market","Id":"a00R00000012ZKjIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1010691,"Name":"10th Steet Community Farmers Market","Id":"a00R00000012ZKkIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1002454,"Name":"112st Madison Avenue","Id":"a00R00000012ZKlIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1011100,"Name":"12 South Farmers Market","Id":"a00R00000012ZKmIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1009845,"Name":"125th Street Fresh Connect Farmers&#39; Market","Id":"a00R00000012ZKnIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1005586,"Name":"12th &amp; Brandywine Urban Farm Market","Id":"a00R00000012ZKoIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1008071,"Name":"14&amp;U Farmers&#39; Market","Id":"a00R00000012ZKpIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1012710,"Name":"14th &amp; Kennedy Street Farmers Market","Id":"a00R00000012ZKqIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1019157,"Name":"16th Ave Farmers Market","Id":"a00R00000012ZKrIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1018792,"Name":"170 Farm Stand","Id":"a00R00000012ZKsIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1016782,"Name":"175th Street Greenmarket","Id":"a00R00000012ZKtIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1003877,"Name":"17th Ave Market","Id":"a00R00000012ZKuIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1016784,"Name":"17th Street Farmers Market","Id":"a00R00000012ZKvIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1010968,"Name":"18th and Christian Farmers&#39; Market","Id":"a00R00000012ZKwIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1009994,"Name":"18th Street Farmer&#39;s Market","Id":"a00R00000012ZKxIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1018365,"Name":"18th Street Farmers Market","Id":"a00R00000012ZKyIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1012790,"Name":"19/27 Community Farmers Market","Id":"a00R00000012ZKzIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1012158,"Name":"21 Acres Farm Market","Id":"a00R00000012ZL0IAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}}] }
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
