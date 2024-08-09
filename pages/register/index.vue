<script setup>
definePageMeta({
  layout: false,
});

const validation = ref([]);
const form = reactive({
  name: null,
  email: null,
  username: null,
  password: null
});

const send = () => {
  console.log(form);
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
