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
const token = useCookie("token");

const { data: response, error } = await useFetch(
  "http://localhost:8000/api/profile",
  {
    method: "get",
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  }
);

if (response.value) {
  const data: any = response.value;
  profile.email = data.data.email;
  profile.name = data.data.name;
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
