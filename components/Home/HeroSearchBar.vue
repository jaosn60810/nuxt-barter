<template>
  <div
    class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto"
    :class="isCityError ? 'border-red-500 border' : ''"
  >
    <input
      type="text"
      class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
      placeholder="Search by city..."
      v-model="city"
    />
    <button class="bg-sky-500 px-10 text-white" @click="handlerSearch">
      Search
    </button>
  </div>
</template>

<script setup lang="ts">
const city = ref('');
const isCityError = ref(false);

function handlerSearch() {
  if (!city.value) {
    isCityError.value = true;
    return;
  }

  navigateTo(`/city/${city.value}/car`);
}
</script>

<style scoped></style>
