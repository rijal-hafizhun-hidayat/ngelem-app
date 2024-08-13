<script setup>
definePageMeta({
  layout: false,
});

const file = ref(null);
const showModalCreatePost = ref(false);
const form = reactive({
  content: "",
  filename: "",
  file: "",
});

const isShowModalCreatePost = () => {
  showModalCreatePost.value = true;
};

const closeModal = () => {
  showModalCreatePost.value = false;
};

const isClickUploadFile = () => {
  return file.value.click();
};

const appendFile = (name, files) => {
  form.filename = name;
  form.file = files[0];
};

const send = () => {
  console.log(form);
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
      <form @submit.prevent="send()">
        <input
          type="file"
          @change="appendFile($event.target.files[0].name, $event.target.files)"
          class="hidden"
          ref="file"
          accept="image/*"
        />
        <div class="p-6">
          <h2 class="text-lg font-medium text-gray-900">
            Mau ngeluh apa hari ini rijal ?
          </h2>

          <div class="mt-6">
            <AreaText class="block w-full" v-model="form.content" />
          </div>

          <div class="mt-6 flex justify-between">
            <div>
              <PrimaryButton @click="isClickUploadFile()"
                ><font-awesome icon="fa-image"
              /></PrimaryButton>
            </div>
            <div>
              <SecondaryButton @click="closeModal()"> Cancel </SecondaryButton>

              <PrimaryButton type="submit" class="ms-3"> Kirim </PrimaryButton>
            </div>
          </div>
        </div>
      </form>
    </Modal>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white mt-10 px-4 py-6 rounded shadow-md overflow-x-auto">
        <div class="flex justify-between mb-2">
          <div><p class="font-bold">rijal hafizhun hidayat</p></div>
          <div>
            <font-awesome-layers
              class="cursor-pointer rounded p-3 transition ease-in-out duration-150 hover:bg-gray-200 active:bg-gray-400"
            >
              <font-awesome icon="fa-xmark" />
            </font-awesome-layers>
          </div>
        </div>
        <p>hello world</p>
      </div>
    </div>
  </NuxtLayout>
</template>
