export const resetPasswordStore = defineStore("resetPassword", () => {
  const isResetPassword: Ref<boolean> = ref(false);
  const message: Ref<string> = ref("");

  return {
    isResetPassword,
    message,
  };
});
