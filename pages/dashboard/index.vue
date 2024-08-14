<script setup>
definePageMeta({
  layout: false,
});

const file = ref(null);
const showModalCreatePost = ref(false);
const selectedFile = ref([]);
const selectedFileName = ref([]);
const fileSrc = ref([]);
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
  console.log(files);

  form.filename = name;
  form.file = files[0];

  for (let index = 0; index < files.length; index++) {
    selectedFile.value.push(files[index]);
    selectedFileName.value.push(files[index].name);
    const src = URL.createObjectURL(files[index]);
    fileSrc.value.push(src);
  }

  file.value.value = ''
};

const removeImage = (index) => {
  selectedFile.value.splice(index, 1);
  fileSrc.value.splice(index, 1);
  selectedFileName.value.splice(index, 1);
};

const send = () => {
  console.log(form);
  console.log(selectedFile);
  console.log(selectedFileName);
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
          id="file"
          @change="appendFile($event.target.files[0].name, $event.target.files)"
          class="hidden"
          ref="file"
          accept="image/*, video/*"
          multiple
        />
        <div class="p-6">
          <h2 class="text-lg font-medium text-gray-900">
            Mau ngeluh apa hari ini rijal ?
          </h2>

          <div class="mt-6">
            <AreaText class="block w-full" v-model="form.content" />

            <div class="mt-3 flex flex-row space-x-3">
              <div
                v-for="(src, index) in fileSrc"
                :key="index"
                class="relative"
              >
                <div>
                  <video
                  class="w-36 h-36 sm:w-32 sm:h-32"
                    controls
                    v-if="selectedFile[index].type === 'video/mp4'"
                  >
                    <source :src="src" type="video/mp4" />
                  </video>
                  <img
                    v-else
                    :src="src"
                    class="w-24 h-24 object-cover rounded sm:w-32 sm:h-32"
                    alt=""
                  />
                </div>
                <div>
                  <font-awesome
                    @click="removeImage(index)"
                    class="absolute top-0 right-0 transition cursor-pointer ease-in-out bg-gray-400 active:bg-gray-600 p-1 rounded-full text-white"
                    icon="fa-xmark"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 flex justify-between">
            <div>
              <PrimaryButton type="button" @click="isClickUploadFile()">
                <div class="space-x-1">
                  <font-awesome icon="fa-plus" />
                  <font-awesome icon="fa-image" />
                </div>
              </PrimaryButton>
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
