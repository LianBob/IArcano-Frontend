<template>

<div v-for="item in routes" :key="item.name">
   
    <p v-if="item.children ==0">{{ item.name }}</p>
</div>
</template>
<script setup>
import {  useRouter } from 'vue-router';

let routes = useRouter().getRoutes()
</script>