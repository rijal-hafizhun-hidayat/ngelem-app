<script setup lang="ts">
import ErrorLabel from "~/components/ErrorLabel.vue";

definePageMeta({
  layout: false,
});

interface Form {
  name: string;
  email: string;
  password: string;
}

const auth = authStore();
const router = useRouter();
const validation: any = ref([]);
const form: Form = reactive({
  name: "",
  email: "",
  password: "",
});

const send = async () => {
  try {
    const res = await useCostumeFetch("register", {
      method: "post",
      body: {
        name: form.name,
        email: form.email,
        password: form.password,
      },
    });

    const token: any = useCookie("token");
    token.value = res.data.token;
    auth.token = res.data.token;
    auth.isAuth = true;

    router.push({
      name: "dashboard",
    });
  } catch (error: any) {
    validation.value = error.data;
  }
};
</script>
<template>
  <NuxtLayout name="login-layout">
    <ErrorLabel
      v-if="validation.statusCode == 404"
      :message="validation.errors"
    />
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
            v-if="validation.errors?.name"
            :message="validation.errors?.name?._errors[0]"
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
            v-if="validation.errors?.email"
            :message="validation.errors?.email?._errors[0]"
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
            v-if="validation.errors?.password"
            :message="validation.errors?.password?._errors[0]"
          />
        </div>
      </div>

      <div class="flex justify-end mt-4">
        <PrimaryButton type="submit">Simpan</PrimaryButton>
      </div>
    </form>
  </NuxtLayout>
</template>
