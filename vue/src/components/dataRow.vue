<template>
    <div>
      <dataCell
        v-for="cell in cells"
        v-bind:key="cell"
        v-bind:val="cell"
        v-bind:label="cell">
      </dataCell>
    </div>
</template>

<script>
import dataCell from './dataCell'

export default {
  name: 'DataRow',
  components: { dataCell },
  props: ['cells'],
  mounted: function () {

  }
}
</script>
