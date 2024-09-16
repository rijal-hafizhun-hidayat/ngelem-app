<script setup lang="ts">
interface Password {
  confirmationPassword: string;
  newPassword: string;
}
const token: any = useCookie("token");
const response: any = ref([]);
const password: Password = reactive({
  confirmationPassword: "",
  newPassword: "",
});

const send = async () => {
  try {
    const patchPassword: any = await $fetch(
      "http://localhost:8000/api/profile/password",
      {
        method: "patch",
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        body: {
          newPassword: password.newPassword,
          confirmationPassword: password.confirmationPassword,
        },
      }
    );

    response.value = patchPassword;
  } catch (error: any) {
    if (error.data.statusCode == 400) {
      response.value = error.data.errors;
    } else if (error.data.statusCode == 404) {
      response.value = error.data;
    }
  }
};
</script>
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-white mt-10 px-4 py-6 rounded shadow-md overflow-x-auto">
      <h1 class="font-bold py-2 text-xl">Ubah Password</h1>
      <ErrorLabel
        v-if="response.statusCode == 404"
        :message="response.errors"
        class="mb-3"
      />

      <SuccessLabel
        v-else-if="response.statusCode == 200"
        :message="response.message"
        class="mb-3"
      />
      <div class="whitespace-nowrap">
        <form @submit.prevent="send()" class="space-y-4">
          <div>
            <InputLabel>Password Baru</InputLabel>
            <TextInput
              class="mt-1 block w-full"
              v-model="password.newPassword"
              type="password"
            />
            <InputError
              v-if="response.newPassword"
              :message="response.newPassword._errors[0]"
            />
          </div>
          <div>
            <InputLabel
              >Konfirmasi password
              <span class="text-red-500"
                >(menggunakan password lama)</span
              ></InputLabel
            >
            <TextInput
              class="mt-1 block w-full"
              v-model="password.confirmationPassword"
              type="password"
            />
            <InputError
              v-if="response.confirmationPassword"
              :message="response.confirmationPassword._errors[0]"
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
