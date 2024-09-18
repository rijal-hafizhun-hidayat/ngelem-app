export default defineNuxtPlugin(() => {
  const userAuth = useCookie("token");
  const config = useRuntimeConfig();

  const $customUseFetch = $fetch.create({
    baseURL: config.public.apiBase ?? "http://localhost:8000/api",
    onRequest({ request, options, error }) {
      if (userAuth.value) {
        // Add Authorization header
        const headersInit: HeadersInit = {};
        options.headers = headersInit;
        options.headers.Authorization = `Bearer ${userAuth.value}`;
      }
    },
    onResponse({ response }) {
      console.log(response);
      // response._data = new myBusinessResponse(response._data)
    },
    onResponseError({ response }): any {
      if (response.status === 401) {
        return navigateTo("/login");
      }
    },
  });
  // Expose to useNuxtApp().$customFetch
  return {
    provide: {
      customUseFetch: $customUseFetch,
    },
  };
});
