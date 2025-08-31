<script setup lang="ts"></script>

<template>
  <nav class="flex justify-between items-center h-15 p-5 bg-secondary text-white">
    <div class="flex bg-primary p-2 rounded-full font-bold">Tracker</div>
    <div class="flex justify-between items-center text-secondary-foreground">
      <RouterLink to="/" class="m-2 italic">Home</RouterLink>
      <RouterLink to="/read" class="m-2 italic">Tracks</RouterLink>
      <RouterLink to="/create" class="m-2 italic">Create</RouterLink>
    </div>
  </nav>
</template>

<style scoped></style>
