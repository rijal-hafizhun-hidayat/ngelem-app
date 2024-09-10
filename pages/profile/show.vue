<script setup lang="ts">
definePageMeta({
  layout: false,
  middleware: "auth",
});
interface Profile {
  name: string;
  email: string;
}
const profile: Profile = reactive({
  name: "",
  email: "",
});

onMounted(() => {
  $fetch("http://localhost:8000/api/profile", {
    method: "get",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  })
    .then((res: any) => {
      profile.name = res.data.name;
      profile.email = res.data.email;
    })
    .catch((err) => {
      console.log(err);
    });
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
