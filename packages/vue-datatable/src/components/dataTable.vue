<template>
    <div class="table">
        <slot></slot>
        <div v-for="row in data" v-bind:key="row.id">
            <dataCell v-for="column in columns"
                v-bind:key="column.field"
                v-bind:id="row.id"
                v-bind:field="column.field"
                v-bind:value="row[column.field]"
                v-bind:editable="column.editable"
                v-on:change="$emit('change', $event)"
                />
        </div>
    </div>
</template>

<script>
import dataCell from './dataCell'

export default {
    name: 'DataTable',
    components: { dataCell },
    props: {
        data: Array
    },
    data: function () {
        return {
            columns: []
        }
    },
    mounted: function () {
        const columns = this.$children.map(column => {
            const field = column.$props.field
            const label = column.$props.label
            const editable = column.$props.editable
            return { field, label, editable }
        })
        this.columns = columns
    }
}
</script>

<style>
  dataTable {
    border: 1px solid red;
    padding: 5px;
    text-align: center;
  }
</style>
