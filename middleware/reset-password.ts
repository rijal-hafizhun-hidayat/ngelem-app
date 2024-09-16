export default defineNuxtRouteMiddleware((to, from) => {
  const { isResetPassword } = storeToRefs(resetPasswordStore());
  
});
