<script setup>
const model = defineModel();
</script>
<template>
  <div class="overflow-y-auto max-h-60">
    <div
      v-for="index in 5"
      :key="index"
      class="flex justify-start mt-3 space-x-4"
    >
      <div>
        <NuxtImg
          class="w-48 lg:w-10 sm:w-20 rounded-full"
          src="/images/falling-into-darkness.png"
          alt=""
          srcset=""
        />
      </div>
      <div class="grid grid-rows-1 gap-1 max-w-3xl overflow-x-auto">
        <div class="bg-gray-500 p-2 rounded-md">
          <div>
            <p class="font-bold capitalize text-white">
              rijal hafizhun hidayat
            </p>
          </div>
          <div>
            <p class="text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odit
              repellat minus iure, eos quam ipsum praesentium quae, natus optio
              earum quo dolorem numquam ipsam, molestias quia quisquam aliquid
              laborum?
            </p>
          </div>
        </div>
        <div>
          <p>pada kamis</p>
        </div>
      </div>
    </div>
  </div>
</template>
