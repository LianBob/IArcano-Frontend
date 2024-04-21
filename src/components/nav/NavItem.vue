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
defineProps(['route'])
</script>