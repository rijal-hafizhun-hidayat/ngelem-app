<script setup lang="ts">
const props = defineProps<{
  message: string;
}>();
</script>
<template>
  <div class="bg-red-500 p-2 rounded">
    <p class="text-white">{{ props.message }}</p>
  </div>
</template>
