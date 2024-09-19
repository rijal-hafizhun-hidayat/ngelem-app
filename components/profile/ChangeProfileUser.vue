<script setup lang="ts">
interface Form {
  name: string;
}
const props = defineProps<{
  name: string;
}>();
const response: any = ref([]);
const token: any = useCookie("token");
const form: Form = reactive({
  name: props.name,
});

const send = async () => {
  try {
    const profile = await useCostumeFetch("profile/name", {
      method: "patch",
      body: {
        name: form.name,
      },
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });

    response.value = profile;
  } catch (error: any) {
    response.value = error.data;
  }
};
</script>
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-white mt-10 px-4 py-6 rounded shadow-md overflow-x-auto">
      <h1 class="font-bold py-2 text-xl">Ubah Profile</h1>
      <SuccessLabel
        v-if="response.statusCode == 200"
        :message="response.message"
        class="mb-3"
      />
      <div class="whitespace-nowrap">
        <form @submit.prevent="send()" class="space-y-4">
          <div>
            <InputLabel>Nama</InputLabel>
            <TextInput
              class="mt-1 block w-full"
              v-model="form.name"
              type="text"
            />
            <InputError
              v-if="response.errors?.name"
              :message="response.errors?.name?._errors[0]"
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
