<script setup lang="ts">
import { Navbar } from './widgets/navbar'
</script>

<template>
  <div class="flex flex-col h-screen">
    <Navbar />
    <RouterView />
  </div>
</template>

<style scoped></style>
