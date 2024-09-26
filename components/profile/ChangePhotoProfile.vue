<script setup lang="ts">
import SuccessLabel from "../SuccessLabel.vue";

const token: any = useCookie("token");
const validation: any = ref([]);
const file: Ref<File | null> = ref(null);

const appendFile = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files) {
    file.value = target.files[0];
  }
};

const send = async () => {
  const formData = new FormData();
  formData.append("file", file.value!);

  try {
    const response = await useCostumeFetch("profile/update-image", {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
      method: "patch",
      body: formData,
    });

    validation.value = response;
    file.value = null;
  } catch (error) {
    console.log(error);
  }
};
</script>
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-white mt-10 px-4 py-6 rounded shadow-md overflow-x-auto">
      <SuccessLabel
        v-if="validation.statusCode == 200"
        :message="validation.message"
        class="mb-2"
      />
      <h1 class="font-bold py-2 text-xl">Ubah Photo Profile</h1>
      <div class="whitespace-nowrap">
        <form
          class="space-y-4"
          @submit.prevent="send()"
          enctype="multipart/form-data"
        >
          <div>
            <FileInput
              type="file"
              id="file"
              @change="appendFile"
              accept="image/*"
            />
            <InputError
              v-if="validation.name"
              :message="validation.name._errors[0]"
            />
          </div>
          <div>
            <PrimaryButton type="submit">Simpan</PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
