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
      <p class="font-bold">rijal hafizhun hidayat</p>
    </div>
  </div>
</template>
