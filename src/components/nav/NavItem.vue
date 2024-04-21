<template>
  <RouterLink 
  
  :active-class="'dark:text-green-500 text-green-500'"
  :exact-active-class="'dark:text-indigo-500 text-indigo-500'"
  class="block px-3 py-2 text-white rounded dark:text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
  :to="$props.route">
    <slot />
  </RouterLink>
</template>

<script setup>
//class="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
defineProps(['route'])
</script>