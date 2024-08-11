<script setup>
definePageMeta({
  layout: false,
});
const showModalCreatePost = ref(false);
const isShowModalCreatePost = () => {
  showModalCreatePost.value = true;
};

const closeModal = () => {
  showModalCreatePost.value = false;
};
</script>
<template>
  <NuxtLayout name="auth-layout">
    <template #header>
      <div class="flex justify-between">
        <div>
          <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Beranda
          </h2>
        </div>
        <div>
          <PrimaryButton @click="isShowModalCreatePost()"
            >Buat Postingan</PrimaryButton
          >
        </div>
      </div>
    </template>

    <Modal :show="showModalCreatePost" @close="closeModal()">
      <div class="p-6">
        <h2 class="text-lg font-medium text-gray-900">
          Are you sure you want to delete your account?
        </h2>

        <p class="mt-1 text-sm text-gray-600">
          Once your account is deleted, all of its resources and data will be
          permanently deleted. Please enter your password to confirm you would
          like to permanently delete your account.
        </p>

        <div class="mt-6">
          <InputLabel for="password" value="Password" class="sr-only" />

          <TextInput
            id="password"
            ref="passwordInput"
            type="password"
            class="mt-1 block w-3/4"
            placeholder="Password"
          />
        </div>

        <div class="mt-6 flex justify-end">
          <SecondaryButton @click="closeModal()"> Cancel </SecondaryButton>

          <DangerButton class="ms-3"> Delete Account </DangerButton>
        </div>
      </div>
    </Modal>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white mt-10 px-4 py-6 rounded shadow-md overflow-x-auto">
        <p>hello world</p>
      </div>
    </div>
  </NuxtLayout>
</template>
