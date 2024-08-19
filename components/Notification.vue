<script setup>
const showNotification = () => {
  console.log(true);
};
</script>
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-white mt-10 px-4 py-6 rounded shadow-md overflow-x-auto">
      <div
        @click="showNotification()"
        v-for="index in 10"
        :key="index"
        class="flex flex-row space-x-4 mb-5 active:bg-gray-400 p-3 sm:p-5 transition ease-in-out duration-150 hover:bg-gray-200 hover:cursor-pointer rounded"
      >
        <div class="w-1/6 sm:w-1/12">
          <NuxtImg
            loading="lazy"
            :src="'/images/falling-into-darkness.png'"
            class="w-20 object-cover rounded"
            alt=""
          />
        </div>
        <div class="w-5/6 sm:w-6/12">
          <p class="my-0 sm:my-5">
            Rijal Hafizhun hidayat mengomentari postingan mu di grup kami
            depresi
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
