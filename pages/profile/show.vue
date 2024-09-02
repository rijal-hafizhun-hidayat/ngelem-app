<script setup>
definePageMeta({
  layout: false,
});
</script>
<template>
  <NuxtLayout name="auth-layout">
    <template #header>
      <div class="flex justify-between">
        <div>
          <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Edit Profile
          </h2>
        </div>
      </div>
    </template>

    <ChangeProfileUser />
    <ChangePasswordUser />
    <ChangeEmailUser />
    <ChangePhotoProfile />
  </NuxtLayout>
</template>
