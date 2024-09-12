export default defineNuxtRouteMiddleware((to, form) => {
  const { isAuth } = storeToRefs(authStore());
  const token = useCookie("token");

  if (token.value) {
    isAuth.value = true;
  }

  if (!token.value) {
    //abortNavigation();
    return navigateTo("/login");
  }
});
