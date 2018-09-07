<template>
    <div>
      <slot></slot>
      <slot name="table">
        <div class="dataTable"></div>
      </slot>
    </div>
</template>

<script>
export default {
  name: 'DataTable',
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
