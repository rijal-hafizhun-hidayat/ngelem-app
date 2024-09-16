<script setup lang="ts">
definePageMeta({
  layout: false,
  middleware: "auth",
});

const router = useRouter();

const showProfile = () => {
  return router.push({
    name: "profile-show",
  });
};
</script>
<template>
  <NuxtLayout name="auth-layout">
    <template #header>
      <div class="flex justify-between">
        <div>
          <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            My Profile
          </h2>
        </div>
      </div>
    </template>

    <ProfileUser />
    <DashboardPost :isUserPost="true" />
  </NuxtLayout>
</template>
