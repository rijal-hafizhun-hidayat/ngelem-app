<script setup>
const swiper = useSwiper();
</script>

<template>
  <div class="space-x-4">
    <button @click="swiper.slidePrev()">Previous</button>
    <button @click="swiper.slideNext()">Next</button>
  </div>
</template>
