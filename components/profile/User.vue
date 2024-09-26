<script setup lang="ts">
interface User {
  name: string;
  avatar: string;
}

const imageUrl: Ref<string> = ref("");
const router = useRouter();
const user: User = reactive({
  name: "",
  avatar: "",
});

const { data: response, error } = await useCustomUseFetch<[]>("profile");

console.log(response);
if (response.value) {
  const data: any = response.value;
  user.name = data.data.name;
  user.avatar = data.data.avatar;
} else if (error.value) {
  console.log(error.value);
}

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
          <NuxtImg :src="user.avatar" sizes="100vw sm:50vw md:400px" />
        </div>
        <div class="my-auto text-center sm:text-left">
          <div class="space-y-4">
            <p class="font-bold text-2xl capitalize">{{ user.name }}</p>
            <PrimaryButton @click="showProfile()" class="mr-auto"
              >edit profile</PrimaryButton
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
