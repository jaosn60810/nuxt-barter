<template>
  <div
    class="shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]"
    @click="navigateTo(`/car/${city?.name}-${city?.id}`)"
  >
    <div class="flex h-full">
      <img :src="city?.url" alt="" class="w-[300px] h-full" />
      <div class="p-4 flex flex-col">
        <div>
          <h1 class="text-2xl text-blue-700">{{ city?.name }}</h1>
          <p class="text-gray-700">
            {{ city?.description }}
          </p>
        </div>
        <h1 class="mt-auto text-xl">${{ city?.price }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const prop = defineProps({ city: Object });
</script>

<style scoped></style>
