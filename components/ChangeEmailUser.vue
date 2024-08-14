<script setup>
const validation = ref([]);
const user = reactive({
  email: "",
});

const send = () => {
  console.log(form);
};
</script>
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-white mt-10 px-4 py-6 rounded shadow-md overflow-x-auto">
      <h1 class="font-bold py-2 text-xl">Ubah email</h1>
      <div class="whitespace-nowrap">
        <form @submit.prevent="send()" class="space-y-4">
          <div>
            <InputLabel>Email baru</InputLabel>
            <TextInput
              class="mt-1 block w-full"
              v-model="user.email"
              type="email"
            />
            <InputError
              v-if="validation.email"
              :message="validation.email._errors[0]"
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
