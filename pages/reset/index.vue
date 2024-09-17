<script setup lang="ts">
definePageMeta({
  layout: false,
});

interface Form {
  email: string;
}

const router = useRouter();
const validation: any = ref([]);
const form: Form = reactive({
  email: "",
});

const send = () => {
  $fetch("http://localhost:8000/api/reset-password", {
    method: "post",
    body: {
      email: form.email,
    },
  })
    .then((res: any) => {
      return router.push({
        name: "reset-confirmation",
        query: {
          token: res.data.token,
        },
      });
    })
    .catch((err: any) => {
      console.log(err.data);
      validation.value = err.data;
    });
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
          <InputLabel>Masukkan Email</InputLabel>
          <TextInput
            class="mt-1 block w-full"
            type="email"
            v-model="form.email"
            autofocus
          />
          <InputError
            v-if="validation.statusCode == 400 && validation.errors.email"
            :message="validation.errors.email._errors[0]"
          />
        </div>
        <div class="flex justify-end">
          <PrimaryButton type="submit">Submit</PrimaryButton>
        </div>
      </div>
    </form>
  </NuxtLayout>
</template>
