export default defineNuxtRouteMiddleware((to, form) => {
  const { isAuth } = storeToRefs(authStore());
  const token = sessionStorage.getItem("token");

  if (token) {
    isAuth.value = true;
  }

  if (!token) {
    abortNavigation();
    return navigateTo("/login");
  }
});
