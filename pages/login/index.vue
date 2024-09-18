<script setup lang="ts">
definePageMeta({
  layout: false,
});

interface Form {
  email: string;
  password: string;
}
const resetPassword: any = resetPasswordStore();
const auth: any = authStore();
const router = useRouter();
const form: Form = reactive({
  email: "",
  password: "",
});
const response: any = ref([]);

const login = async () => {
  try {
    const res: any = await useCostumeFetch("login", {
      method: "post",
      body: {
        email: form.email,
        password: form.password,
      },
    });

    const token = useCookie("token");
    token.value = res.data.token;
    auth.token = res.data.token;
    auth.isAuth = true;

    router.push({
      name: "dashboard",
    });
  } catch (error: any) {
    console.log(error.data);
    response.value = error.data;
  }
};
</script>
<template>
  <NuxtLayout name="login-layout">
    <ErrorLabel
      v-if="response.statusCode == 404"
      :message="response.errors"
      class="mb-3"
    />
    <SuccessLabel
      v-if="resetPassword.isResetPassword == true"
      :message="resetPassword.message"
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
            v-if="response.errors?.email"
            :message="response.errors?.email?._errors[0]"
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
            v-if="response.errors?.password"
            :message="response.errors?.password?._errors[0]"
          />
        </div>
      </div>

      <div class="flex items-center justify-between mt-4">
        <div class="flex flex-col space-y-4">
          <div>
            <p class="text-sm">
              Belum memiliki akun? klik
              <NuxtLink
                class="text-blue-500 underline cursor-pointer"
                to="/register"
                >register</NuxtLink
              >
            </p>
          </div>
          <div>
            <p class="text-sm">
              Lupa password? klik
              <NuxtLink
                class="text-blue-500 underline cursor-pointer"
                to="/reset"
                >reset password</NuxtLink
              >
            </p>
          </div>
        </div>

        <PrimaryButton type="submit">Masuk</PrimaryButton>
      </div>
    </form>
  </NuxtLayout>
</template>
