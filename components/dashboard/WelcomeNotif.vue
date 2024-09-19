<script setup lang="ts">
const props = defineProps<{
  message: string;
}>();

console.log(props);
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-white mt-10 px-4 py-6 rounded shadow-md overflow-x-auto">
      <p>selamat datang</p>
    </div>
  </div>
</template>
