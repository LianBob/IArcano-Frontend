<template>
  <div class="flex items-center align-middle  w-full ">
    <input
      :id="$props.place"
      type="checkbox"
      value=""
      class="md:w-5 md:h-5 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <label :for="$props.place" class="ms-2 text-sm md:text-md font-medium text-gray-900 dark:text-gray-300">
      <slot />
    </label>
  </div>
</template>

<script setup>


defineProps(['place'])

</script>

<style lang="scss" scoped></style>
