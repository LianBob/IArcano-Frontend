<template>
  <div>{{ userId ? 'user con id ' + userId : 'user' }}</div>
</template>

<script setup>
import { useRoute } from 'vue-router'

let userId = useRoute().params.id
</script>

<style lang="scss" scoped></style>
