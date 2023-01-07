<template>
  <div
    class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
  >
    <DetailHero></DetailHero>

    <DetailAttributes></DetailAttributes>

    <DetailDescription></DetailDescription>

    <DetailContact></DetailContact>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

useHead({
  title: `${[...route.params.name].join('').toUpperCase()}`,
});
</script>

<style scoped></style>
