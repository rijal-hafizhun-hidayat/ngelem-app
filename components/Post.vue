<script setup>
const props = defineProps({
  isUserPost: Boolean,
});
</script>
<template>
  <div
    v-for="index in 5"
    :key="index"
    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  >
    <div class="bg-white mt-10 px-4 py-6 rounded shadow-md overflow-x-auto">
      <div class="space-y-4">
        <div class="flex justify-between">
          <div class="flex space-x-4">
            <div>
              <p class="font-bold capitalize">rijal hafizhun hidayat</p>
            </div>
            <div>
              <p class="text-green-500 font-bold">online</p>
            </div>
          </div>
          <div>
            <font-awesome-layers
              class="cursor-pointer rounded p-3 transition ease-in-out duration-150 hover:bg-gray-200 active:bg-gray-400"
            >
              <font-awesome icon="fa-xmark" />
            </font-awesome-layers>
          </div>
        </div>
        <div>
          <Swiper
            :modules="[SwiperAutoplay, SwiperEffectCreative]"
            :slides-per-view="1"
            :loop="true"
            :effect="'creative'"
            :creative-effect="{
              prev: {
                shadow: false,
                translate: ['-20%', 0, -1],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }"
          >
            <SwiperSlide v-for="slide in 5" :key="slide">
              <strong>{{ slide }}</strong>
            </SwiperSlide>
            <SwiperControls />
          </Swiper>
        </div>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            exercitationem architecto a, hic facere consectetur ullam magnam
            voluptatum animi nostrum, distinctio deleniti minima labore ducimus
            fugiat assumenda? Odit, tempora nulla.
          </p>
        </div>
        <div class="flex justify-end space-x-3">
          <LikeShareCount />
        </div>
        <FooterPost v-model="isShowComment" class="mt-5" />
      </div>
    </div>
  </div>
</template>
