<script setup>
const router = useRouter();

const showProfile = () => {
  return router.push({
    name: "profile-show",
  });
};
</script>
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-white mt-10 px-4 py-6 rounded shadow-md overflow-x-auto">
      <div class="grid grid-rows-1 sm:grid-cols-2 gap-4">
        <div>
          <NuxtImg
            class="w-7/12 sm:w-6/12 mx-auto rounded"
            src="/images/falling-into-darkness.png"
            alt=""
            srcset=""
          />
        </div>
        <div class="my-auto text-center sm:text-left">
          <div class="space-y-4">
            <p class="font-bold text-2xl capitalize">rijal hafizhun hidayat</p>
            <PrimaryButton @click="showProfile()" class="mr-auto"
              >edit profile</PrimaryButton
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
