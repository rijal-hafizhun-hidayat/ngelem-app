<script setup lang="ts">
definePageMeta({
  layout: false,
});

interface Form {
  name: string;
  email: string;
  username: string;
  password: string;
}
const auth = authStore();
const router = useRouter();
const validation: any = ref([]);
const isEmailAlreadyExist: any = ref("");
const form: Form = reactive({
  name: "",
  email: "",
  username: "",
  password: "",
});

const send = () => {
  $fetch("http://localhost:8000/api/register", {
    method: "post",
    body: {
      name: form.name,
      email: form.email,
      username: form.username,
      password: form.password,
    },
  })
    .then((res: any) => {
      auth.token = res.data.token;
      sessionStorage.setItem("token", res.data.token);

      return router.push({
        name: "dashboard",
      });
    })
    .catch((err: any) => {
      if (err.data.statusCode == 400) {
        validation.value = err.data.errors;
      }

      if (err.data.statusCode == 404) {
        isEmailAlreadyExist.value = err.data.errors;
      }
    });
};
</script>
<template>
  <NuxtLayout name="login-layout">
    <form @submit.prevent="send()">
      <div class="space-y-4">
        <div>
          <InputLabel>Nama lengkap</InputLabel>
          <TextInput
            class="mt-1 block w-full"
            type="text"
            v-model="form.name"
            autofocus
          />
          <InputError
            v-if="validation.name"
            :message="validation.name._errors[0]"
          />
        </div>
        <div>
          <InputLabel>Email</InputLabel>
          <TextInput
            class="mt-1 block w-full"
            type="email"
            v-model="form.email"
            autofocus
          />
          <InputError
            v-if="validation.email"
            :message="validation.email._errors[0]"
          />
          <InputError
            v-else-if="isEmailAlreadyExist"
            :message="isEmailAlreadyExist"
          />
        </div>
        <div>
          <InputLabel>Username</InputLabel>
          <TextInput
            class="mt-1 block w-full"
            type="text"
            v-model="form.username"
            autofocus
          />
          <InputError
            v-if="validation.username"
            :message="validation.username._errors[0]"
          />
        </div>
        <div>
          <InputLabel>Password</InputLabel>
          <TextInput
            class="mt-1 block w-full"
            type="password"
            v-model="form.password"
            autofocus
          />
          <InputError
            v-if="validation.password"
            :message="validation.password._errors[0]"
          />
        </div>
      </div>

      <div class="flex justify-end mt-4">
        <PrimaryButton type="submit">Simpan</PrimaryButton>
      </div>
    </form>
  </NuxtLayout>
</template>
