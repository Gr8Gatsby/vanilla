<template>
    <div>
      {{ colData }}
      <dataCell v-for="col in colData"
        v-bind:key="col.data.attrs.name"
        v-bind:val="col.data.attrs.name"
        v-bind:label="col.data.attrs.name"></dataCell>
      <slot></slot>
      <slot name="table">
        <div class="dataTable"></div>
      </slot>
    </div>
</template>

<script>
import dataCell from './dataCell'

export default {
  name: 'DataTable',
  components: { dataCell },
  props: ['page-size', 'object-name'],
  data: function () {
    return {
      colData: [],
      rowData: []
    }
  },
  mounted: function () {
    let cols = this.$slots.default

    for (let i = 0; i < cols.length; i++) {
      if (cols[i].tag === 'div') {
        this.colData.push(cols[i].data.attrs)
      }
    }
  }
}
</script>
