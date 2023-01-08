<template>
  <div class="w-full">
    <CityCard v-for="city in cities" :key="city.id" :city="city"></CityCard>
  </div>
</template>

<script setup lang="ts">
const { cities } = useCities();
</script>

<style scoped></style>
