<script setup>
const validation = ref([]);
const image = ref('')

const appendFile = (nameFile, file) => {
  console.log(nameFile);
  console.log(file);
};
</script>
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-white mt-10 px-4 py-6 rounded shadow-md overflow-x-auto">
      <h1 class="font-bold py-2 text-xl">Ubah Photo Profile</h1>
      <div class="whitespace-nowrap">
        <form class="space-y-4">
          <div>
            <FileInput
              type="file"
              id="file"
              @change="
                appendFile($event.target.files[0].name, $event.target.files)
              "
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
