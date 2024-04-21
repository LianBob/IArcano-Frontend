<template>
  <div class="flex flex-col justify-between h-screen">
    <Nav />
    <Suspense>
      <template #default>
        <slot />
      </template>
      <template #fallback>
        <Loader />
      </template>
    </Suspense>
    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue'

import Nav from '@/components/nav/Nav.vue'
</script>

<style lang="scss" scoped></style>
