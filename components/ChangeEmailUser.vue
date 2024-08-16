<script setup>
const validation = ref([]);
const user = reactive({
  oldEmail: "",
  newEmail: "",
  codeOtp: "",
});

const send = () => {
  console.log(form);
};
</script>
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-white mt-10 px-4 py-6 rounded shadow-md overflow-x-auto">
      <h1 class="font-bold py-2 text-xl">Ubah email</h1>
      <div class="bg-yellow-300 rounded p-2 mb-2">
        <h1 class="text-yellow-700 font-bold">warning</h1>
        <p class="text-yellow-700">
          email yang lama akan digunakan untuk mengirim kode otp
        </p>
      </div>
      <div class="whitespace-nowrap">
        <form @submit.prevent="send()" class="space-y-4">
          <div>
            <InputLabel>Email lama</InputLabel>
            <TextInput
              class="mt-1 block w-full"
              v-model="user.oldEmail"
              type="email"
              disabled
            />
            <InputError
              v-if="validation.oldEmail"
              :message="validation.oldEmail._errors[0]"
            />
          </div>
          <div class="flex justify-start space-x-4">
            <div class="grow">
              <InputLabel>Email baru</InputLabel>
              <TextInput
                class="mt-1 block w-full"
                v-model="user.newEmail"
                type="email"
              />
              <InputError
                v-if="validation.newEmail"
                :message="validation.newEmail._errors[0]"
              />
            </div>
            <div>
              <PrimaryButton type="button" class="mt-7"
                >Kirim OTP</PrimaryButton
              >
            </div>
          </div>
          <div>
            <InputLabel>Kode OTP</InputLabel>
            <TextInput
              class="mt-1 block w-full"
              v-model="user.codeOtp"
              type="number"
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
