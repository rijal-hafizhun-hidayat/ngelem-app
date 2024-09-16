export const resetPasswordStore = defineStore("resetPassword", () => {
  const isResetPassword: Ref<boolean> = ref(false);

  return {
    isResetPassword,
  };
});
