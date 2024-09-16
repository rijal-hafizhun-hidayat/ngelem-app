<script setup lang="ts">
definePageMeta({
  layout: false,
});

interface Form {
  otp: string;
  password: string;
}

const route = useRoute();
const validation: any = ref([]);
const form: Form = reactive({
  otp: "",
  password: "",
});

const send = async () => {
  const { data: resetPassword, error } = await useFetch(
    "http://localhost:8000/api/reset-password/update",
    {
      method: "patch",
      body: {
        token: route.query.token,
        otp: parseInt(form.otp),
        password: form.password,
      },
    }
  );

  console.log(resetPassword);
  console.log(error);
  if (error.value) {
    const errors = error.value;
    validation.value = errors.data;
  }
};
</script>
<template>
  <NuxtLayout name="login-layout">
    <SuccessLabel
      class="mb-3"
      v-if="route.query.token"
      :message="'silahkan cek email terkait'"
    />
    <ErrorLabel
      class="mb-4"
      v-if="validation.statusCode == 404"
      :message="validation.errors"
    />
    <form @submit.prevent="send()">
      <div class="space-y-4">
        <div>
          <InputLabel>Masukkan Password</InputLabel>
          <TextInput
            class="mt-1 block w-full"
            type="password"
            v-model="form.password"
            autofocus
          />
          <InputError
            v-if="validation.statusCode == 400 && validation.errors.password"
            :message="validation.errors.password._errors[0]"
          />
        </div>
        <div>
          <InputLabel>Masukkan OTP</InputLabel>
          <TextInput
            class="mt-1 block w-full"
            type="number"
            v-model="form.otp"
            autofocus
          />
          <InputError
            v-if="validation.statusCode == 400 && validation.errors.otp"
            :message="validation.errors.otp._errors[0]"
          />
        </div>
        <div class="flex justify-end">
          <PrimaryButton type="submit">Submit</PrimaryButton>
        </div>
      </div>
    </form>
  </NuxtLayout>
</template>
