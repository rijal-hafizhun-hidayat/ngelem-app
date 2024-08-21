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
        class="flex justify-between active:bg-gray-400 p-3 sm:p-3 transition ease-in-out duration-150 hover:bg-gray-200 hover:cursor-pointer rounded"
      >
        <div class="flex flex-row space-x-3 sm:space-x-0">
          <div class="my-auto w-1/6 sm:w-1/6">
            <NuxtImg
              loading="lazy"
              :src="'/images/falling-into-darkness.png'"
              class="w-16 object-cover rounded"
              alt=""
            />
          </div>
          <div class="w-5/6 sm:w-5/6">
            <p class="my-0 sm:my-5">
              Rijal Hafizhun hidayat mengomentari postingan mu di grup kami
              depresi
            </p>
          </div>
        </div>
        <div class="my-auto">
          <span class="flex w-3 h-3 bg-cyan-500 rounded-full"></span>
        </div>
      </div>
    </div>
  </div>
</template>
