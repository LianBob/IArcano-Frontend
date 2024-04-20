<template>
  <Suspense>
    <template #default>
        <Default>
          <RouterView />
        </Default>
        
    </template>
    <template #fallback>
        <div>
     saas
      </div>
    </template>
  </Suspense>
</template>
<script setup>
import Default from './layouts/Default.vue'
</script>
