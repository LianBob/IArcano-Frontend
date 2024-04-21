<template>
  <Suspense>
    <template #default>
      <div class="flex flex-col justify-between h-screen">
        
        <div>
          <Nav />
          <div id="toTeleport"></div>
        </div>
        <slot />

        <Footer />
      </div>
    </template>

    <template #fallback>
      <Loader />
    </template>
  </Suspense>
</template>

<script setup>
import Footer from '@/components/footer/Footer.vue';
import Nav from '@/components/nav/Nav.vue'
import Loader from '@/components/Loader.vue';
</script>

<style lang="scss" scoped></style>
