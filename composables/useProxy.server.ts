import { joinURL } from "ufo";
import { type H3Event, type EventHandlerRequest } from "h3";

/**
 * Takes an event and calls a proxied request, rewriting to the appropriate env api url
 * @param event
 * @returns
 */
export const useProxy = async (event: H3Event<EventHandlerRequest>) => {
  const config = useRuntimeConfig();
  const proxyUrl = `${config.public.NUXT_PUBLIC_ENV_URL}${config.NUXT_API_PATH}`;

  const path = event.path.replace(/^\/api\//, "");
  const target = joinURL(proxyUrl, path);
  console.log(`mapped ${event.path} to ${target}`);

  return await proxyRequest(event, target, { fetch })
};
