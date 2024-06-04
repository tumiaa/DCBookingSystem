export const useRepoStore = defineStore("repo", () => {
  const api = ref();
  const repo = ref();

  async function getApi() {
    if (!api.value) {
      api.value = useNuxtApp().$api;
    }
    return api.value;
  }

  async function getRepo() {
    const api = await getApi();
    if (!repo.value) {
      repo.value = repository(api);
    }
    return repo.value;
  }

  async function callAPI(apiName: string, ...params:any) {
    const repo = await getRepo();

    return await useAsyncData(async () => await repo[apiName](...params));
  }
  return { getRepo, callAPI };
});
