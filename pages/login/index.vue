<script setup>
const form = reactive({
  email: null,
  password: null,
});
const validation = ref([]);
</script>
<template>
  <div>
    <NuxtLayout name="login-layout">
      <form>
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
              v-if="validation.username"
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
            <span class="text-blue-500 underline cursor-pointer">register</span>
          </p>
          <PrimaryButton type="submit">Masuk</PrimaryButton>
        </div>
      </form>
    </NuxtLayout>
  </div>
</template>
