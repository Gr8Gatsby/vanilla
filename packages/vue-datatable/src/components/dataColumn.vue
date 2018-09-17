<template>
    <dataCell v-bind:field="field" v-bind:value="label"/>
</template>

<script>
import dataCell from './dataCell'
export default {
    name: 'DataColumn',
    props: {
        field: String,
        label: String,
        editable: Boolean
    },
    components: {
        dataCell
    }
}
</script>
