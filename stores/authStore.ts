export const authStore = defineStore("authStore", () => {
  const isAuth: Ref<boolean> = ref(false);
  const token: Ref<string> = ref("");

  const reset = () => {
    token.value = "";
  };

  return {
    isAuth,
    token,
    reset,
  };
});
