export const useCostumeFetch = async (url: string, options: {}) => {
  const config = useRuntimeConfig();
  return await $fetch(`${config.public.apiBase}/${url}`, options);
};
