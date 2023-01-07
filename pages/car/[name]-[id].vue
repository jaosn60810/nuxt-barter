<template>
  <div>
    <DetailHero></DetailHero>

    <DetailAttributes></DetailAttributes>

    <DetailDescription></DetailDescription>

    <DetailContact></DetailContact>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { toTitleCase } = useUtilities();

definePageMeta({ layout: 'custom' });

useHead({
  title: `${toTitleCase(route.params.name)}`,
});
</script>

<style scoped></style>
