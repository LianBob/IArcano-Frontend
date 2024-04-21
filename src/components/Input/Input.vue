<template>
  <component :is="inputType" :place="$props.place"> <slot /> </component>
</template>

<script setup>
import { computed } from 'vue'
import TextInput from './TextInput.vue'
import FileInput from './FileInput.vue'
import SearchInput from './SearchInput.vue'
import NumberInput from './NumberInput.vue'
import PhoneInput from './PhoneInput.vue'
import TextAreaInput from './TextAreaInput.vue'
import CheckBox from './CheckBox.vue'
import Radio from './Radio.vue'
import Toggle from './Toggle.vue'
let props = defineProps(['type', 'place'])
const shcemaInput = {
  text: TextInput,
  file: FileInput,
  search: SearchInput,
  number: NumberInput,
  phone: PhoneInput,
  area: TextAreaInput,
  check: CheckBox,
  radio: Radio,
  toggle: Toggle
}

let inputType = computed(() => {
  return shcemaInput[props.type]
})
</script>

<style lang="scss" scoped></style>
