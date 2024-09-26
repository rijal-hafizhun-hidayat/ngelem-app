<script setup lang="ts">
definePageMeta({
  layout: false,
  middleware: "auth",
});
interface Profile {
  name: string;
  email: string;
}
const imageUrl: Ref<string> = ref("");
const profile: Profile = reactive({
  name: "",
  email: "",
});
const { data: res, error } = await useCustomUseFetch<[]>("profile");

if (res.value) {
  const data: any = res.value;
  profile.email = data.data.email;
  profile.name = data.data.name;
  imageUrl.value = data.data.avatar;
} else if (error.value != null) {
  console.log(error.value);
}
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

    <ProfileChangeProfileUser :name="profile.name" />
    <ProfileChangePasswordUser />
    <ProfileChangeEmailUser :email="profile.email" />
    <ProfileChangePhotoProfile />
  </NuxtLayout>
</template>
