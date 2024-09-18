import type { UseFetchOptions } from "nuxt/app";

export async function useCustomUseFetch<T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {}
) {
  return await useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$customUseFetch,
  });
}
