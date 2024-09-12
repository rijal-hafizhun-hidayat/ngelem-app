<script setup lang="ts">
import { authStore } from "~/stores/authStore";

definePageMeta({
  layout: false,
});

interface Form {
  email: string;
  password: string;
}
const auth: any = authStore();
const router = useRouter();
const form: Form = reactive({
  email: "",
  password: "",
});
const validation: any = ref([]);

const login = () => {
  $fetch("http://localhost:8000/api/login", {
    method: "post",
    body: {
      email: form.email,
      password: form.password,
    },
  })
    .then((res: any) => {
      const token = useCookie("token");
      token.value = res.data.token;
      auth.token = res.data.token;
      auth.isAuth = true;

      return router.push({
        name: "dashboard",
      });
    })
    .catch((err: any) => {
      if (err.data.statusCode == 400) {
        validation.value = err.data.errors;
      } else if (err.data.statusCode == 404) {
        validation.value = err.data;
      }
    });
};
</script>
<template>
  <NuxtLayout name="login-layout">
    <ErrorLabel
      v-if="validation.statusCode == 404"
      :message="validation.errors"
      class="mb-3"
    />
    <form @submit.prevent="login()">
      <div class="space-y-4">
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

      <div class="flex items-center justify-between mt-4">
        <p class="text-sm">
          Belum memiliki akun? klik
          <NuxtLink
            class="text-blue-500 underline cursor-pointer"
            to="/register"
            >register</NuxtLink
          >
        </p>
        <PrimaryButton type="submit">Masuk</PrimaryButton>
      </div>
    </form>
  </NuxtLayout>
</template>
