<template>
    <span>
      <slot></slot>
      <input class="value"
             readonly
             v-bind:label="label"
             v-bind:value="val"
             v-on:dblclick="handleDoubleClick"
             v-on:blur="handleBlur"
             v-on:keydown="handleKeyDownInput"/>
    </span>
</template>

<script>
export default {
  name: 'DataCell',
  props: ['val', 'label'],
  mounted: function () {

  },
  methods: {
    handleDoubleClick: function (evt) {
      evt.target.readOnly = false
      evt.target.setAttribute('class', 'edit')
    },
    handleBlur: function (evt) {
      if (evt.target.readOnly === false) {
        this.saveChanges(evt.target, evt.target.value.trim())
      }
    },
    saveChanges: function (obj, value) {
      // reset the HTML input to be readOnly
      obj.setAttribute('class', 'value')
      obj.readOnly = true
    },
    handleKeyDownInput: function (evt) {
      if (evt.key === 'Enter' && evt.target.readOnly === false) {
        this.saveChanges(evt.target, evt.target.value.trim())
      }
    }
  }
}
</script>

<style>
.value {
  margin-left: 5px;
  padding: 2px;
  border:none;
  flex: 5;
}

.edit {
  margin-left: 5px;
  padding: 2px;
  border: none;
  color: white;
  border-bottom: 2px #FF3F91 solid;
  flex: 5;
  background-color: hotpink;
}
</style>
