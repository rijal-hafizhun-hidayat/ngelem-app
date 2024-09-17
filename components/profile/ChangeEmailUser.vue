<script setup lang="ts">
interface Form {
  oldEmail: string;
  newEmail: string;
  codeOtp: number | string;
}
const props = defineProps<{
  email: string;
}>();
const token: any = useCookie("token");
const response: any = ref([]);
const form: Form = reactive({
  oldEmail: props.email,
  newEmail: "",
  codeOtp: "",
});

const send = () => {
  $fetch("http://localhost:8000/api/profile/update-email", {
    method: "patch",
    body: {
      newEmail: form.newEmail,
      otp: parseInt(form.codeOtp as string),
    },
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  })
    .then((res: any) => {
      response.value = res;
      form.oldEmail = res.data.email;
    })
    .catch((err: any) => {
      response.value = err.data;
      console.log(err.data);
    });
};

const sendOtp = () => {
  $fetch("http://localhost:8000/api/profile/send-otp-email", {
    method: "post",
    body: {
      email: form.oldEmail,
    },
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  })
    .then((res: any) => {
      response.value = res;
    })
    .catch((err: any) => {
      response.value = err.data;
    });
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
      <ErrorLabel
        class="mb-2"
        v-if="response.statusCode == 401 || response.statusCode == 404"
        :message="response.errors"
      />
      <SuccessLabel
        class="mb-2"
        v-if="response.statusCode == 200"
        :message="response.message"
      />
      <div class="whitespace-nowrap">
        <form @submit.prevent="send()" class="space-y-4">
          <div>
            <InputLabel>Email lama</InputLabel>
            <TextInput
              class="mt-1 block w-full"
              v-model="form.oldEmail"
              type="email"
              disabled
            />
            <InputError
              v-if="response.oldEmail"
              :message="response.oldEmail._errors[0]"
            />
          </div>
          <div class="flex justify-start space-x-4">
            <div class="grow">
              <InputLabel>Email baru</InputLabel>
              <TextInput
                class="mt-1 block w-full"
                v-model="form.newEmail"
                type="email"
              />
              <InputError
                v-if="response.newEmail"
                :message="response.newEmail._errors[0]"
              />
            </div>
            <div>
              <PrimaryButton type="button" @click="sendOtp()" class="mt-7"
                >Kirim OTP</PrimaryButton
              >
            </div>
          </div>
          <div>
            <InputLabel>Kode OTP</InputLabel>
            <TextInput
              class="mt-1 block w-full"
              v-model="form.codeOtp"
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
