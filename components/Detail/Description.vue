<template>
  <div class="mt-5">
    <p class="mb-10">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
const prop = defineProps<{ description: string }>();
</script>

<style scoped></style>
