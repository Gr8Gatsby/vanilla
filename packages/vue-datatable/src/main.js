// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// define the columns of the table
/*
const COLUMNS = [
    { field: 'FMID__c', label: 'Market ID', editable: false },
    { field: 'Name', label: 'Market Name', editable: true },
    { field: 'City__c', label: 'City', editable: true },
    { field: 'Twitter__c', label: 'Twitter', editable: true },
]
*/

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    propsData: {
        data: [
            { id: 0, FMID__c: '0', Name: 'Ferry Building Market', City__c: 'San Francisco', Twitter__c: undefined },
            { id: 1, FMID__c: '1', Name: 'Weekend Market', City__c: 'Alameda', Twitter__c: '@market' }
        ]
    }
})
