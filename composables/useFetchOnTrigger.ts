import type { $Fetch } from "nitropack";

export function useFetchOnTrigger<T>(
    url: string | (() => string),
    options: Omit<$Fetch<T>, 'default'> & { default: () => T | Ref<T> },
  ) {
    return $fetch(url, options)
  }
  