<template>
  <div v-if="city">
    <DetailHero :city="city"></DetailHero>

    <DetailAttributes :features="city.features"></DetailAttributes>

    <DetailDescription :description="city.description"></DetailDescription>

    <DetailContact></DetailContact>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { toTitleCase } = useUtilities();

const { cities } = useCities();
const city = computed(() =>
  cities.find((city) => city.id === parseInt(route.params.id as string))
);

definePageMeta({ layout: 'custom' });

useHead({
  title: `${toTitleCase(route.params.name)}`,
});
</script>

<style scoped></style>
