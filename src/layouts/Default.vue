<template>
  <div class=" flex flex-col justify-between h-screen">

    <Nav />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue'

import Nav from '@/components/nav/Nav.vue'
</script>

<style lang="scss" scoped></style>
