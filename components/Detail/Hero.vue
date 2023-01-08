<template>
  <div class="mt-10">
    <img :src="city?.url" class="w-full" alt="" />
    <h1 class="mt-10 text-4xl">{{ city?.name }}</h1>
    <div class="text-slate-500 flex text-lg mt-3 border-b pb-5 justify-between">
      <div class="flex">
        <p class="mr-2">{{ city?.seats }} seats</p>
        <p class="mr-2">|</p>
        <p class="mr-2">{{ city?.miles }} miles</p>
      </div>
      <div>
        <p class="font-bold text-2xl">${{ city?.price }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const prop = defineProps({ city: Object });
</script>

<style scoped></style>
