import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// define the columns of the table
const COLUMNS = [
    { field: 'FMID__c', label: 'Market ID', editable: false },
    { field: 'Name', label: 'Market Name', editable: true },
    { field: 'City__c', label: 'City', editable: true },
    { field: 'Twitter__c', label: 'Twitter', editable: true }
]

function render (data) {
    const AppRoot = Vue.extend(App)
    const app = new AppRoot({ // eslint-disable-line no-new
        el: '#app',
        propsData: {
            data
        }
    })
    app.$on('change', function (event) {
        console.info('Received change event', event)
        // NOTE - here we'd use Remote Objects to perform the save
    })
}

// initial render (no data)
render([])

// load data: if remote objects are available, use them
if (typeof SObjectModel !== 'undefined') { // eslint-disable-line no-undef
    const market = new SObjectModel.Market() // eslint-disable-line no-undef
        market.retrieve({ limit: 50 }, (err, records) => {
            if (err) {
                alert(err.message)
            } else {
                // convert from Remote Objects to JS objects
                const rows = records.map(record => {
                    const row = COLUMNS.reduce((row, column) => {
                        row[column.field] = record.get(column.field)
                        return row
                    }, {})
                    row.id = record.get('FMID__c')
                    return row
                })

                // update the react app with the data
                render(rows)
            }
        })
} else {
    // localhost development
    fetch('/static/Market__cs0.json')
        .then(response => response.json())
        .then(
            (json) => {
                const data = json.records.map(record => Object.assign(record, { id: record.FMID__c }))
                render(data)
            },
            (error) => {
                alert('Error loading sample data: ' + JSON.stringify(error))
            })
}
