export const authStore = defineStore("authStore", () => {
  const token: Ref<string> = ref("");

  return {
    token,
  };
});
