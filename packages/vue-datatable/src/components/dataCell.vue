<template>
    <span>
        <input
            v-bind:class="classList"
            v-bind:readonly="readOnly"
            v-model.lazy.trim="modelValue"
            v-on:dblclick="handleDoubleClick"
            v-on:blur="handleBlur"
            v-on:keydown="handleKeyDown">
    </span>
</template>

<script>
export default {
    name: 'DataCell',
    props: {
        id: [String, Number],
        field: String,
        value: [String, Number],
        editable: Boolean
    },
    data: function () {
        return {
            classList: 'view',
            readOnly: true,
            modelValue: this.value
        }
    },
    methods: {
        setEditMode: function (enabled) {
            this.readOnly = !enabled
            this.classList = enabled ? 'edit' : 'view'
        },
        handleDoubleClick: function (evt) {
            if (this.editable) {
                this.setEditMode(true)
            }
        },
        handleKeyDown: function (evt) {
            if (evt.key === 'Enter' && this.editable) {
                this.setEditMode(false)
                this.dispatchSave()
            }
        },
        handleBlur: function (evt) {
            if (this.editable) {
                this.setEditMode(false)
                this.dispatchSave()
            }
        },
        dispatchSave: function () {
            if (this.value !== this.modelValue) {
                console.warn('UPDATE', this.id, this.field, this.value, this.modelValue)
                this.$emit('update:value', this.modelValue)
            }
        }
    }
}
</script>

<style>
.view {
	margin-left: 5px;
	padding: 2px;
	border: none;
	flex: 5;
}
.edit {
	margin-left: 5px;
	padding: 2px;
	border: none;
	color: white;
	border-bottom: 2px #ff3f91 solid;
	flex: 5;
	background-color: hotpink;
}
</style>
