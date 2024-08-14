<script setup>
const validation = ref([]);
const user = reactive({
  oldPassword: "",
  newPassword: "",
});

const send = () => {
  console.log(form);
};
</script>
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-white mt-10 px-4 py-6 rounded shadow-md overflow-x-auto">
      <h1 class="font-bold py-2 text-xl">Ubah Password</h1>
      <div class="whitespace-nowrap">
        <form @submit.prevent="send()" class="space-y-4">
          <div>
            <InputLabel>Password Baru</InputLabel>
            <TextInput
              class="mt-1 block w-full"
              v-model="user.newPassword"
              type="password"
            />
            <InputError
              v-if="validation.newPassword"
              :message="validation.newPassword._errors[0]"
            />
          </div>
          <div>
            <InputLabel
              >Konfirmasi password <span class="text-red-500">(menggunakan password lama)</span></InputLabel
            >
            <TextInput
              class="mt-1 block w-full"
              v-model="user.oldPassword"
              type="password"
            />
            <InputError
              v-if="validation.oldPassword"
              :message="validation.oldPassword._errors[0]"
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
