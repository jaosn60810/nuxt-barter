<template>
  <div class="mt-32 flex">
    <CitySideBar></CitySideBar>
    <NuxtPage></NuxtPage>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { toTitleCase } = useUtilities();

definePageMeta({ layout: 'custom' });

useHead({
  title: `${
    route.params.make ? toTitleCase(route.params.make) : 'NuxtBarter'
  } | ${toTitleCase(route.params.city)}`,
});
</script>

<style scoped></style>
