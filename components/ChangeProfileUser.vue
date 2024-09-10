<script setup lang="ts">
interface User {
  name: string;
}
const validation: any = ref([]);
const user: User = reactive({
  name: "",
});

const send = () => {
  console.log(user);
};
</script>
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-white mt-10 px-4 py-6 rounded shadow-md overflow-x-auto">
      <h1 class="font-bold py-2 text-xl">Ubah Profile</h1>
      <div class="whitespace-nowrap">
        <form @submit.prevent="send()" class="space-y-4">
          <div>
            <InputLabel>Nama</InputLabel>
            <TextInput
              class="mt-1 block w-full"
              v-model="user.name"
              type="text"
            />
            <InputError
              v-if="validation.name"
              :message="validation.name._errors[0]"
            />
          </div>
          <div>
            <PrimaryButton type="submit">Simpan</PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
