<script setup lang="ts">
interface User {
  name: string;
  avatar: string;
}

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
}
console.log(error);

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
            class="w-7/12 sm:w-5/12 mx-auto rounded-full"
            src="/images/falling-into-darkness.png"
            alt=""
            srcset=""
          />
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
