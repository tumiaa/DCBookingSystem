import { joinURL } from "ufo";
import { useProxy } from "~/composables/useProxy.server";

export default defineEventHandler(async (event) => {
//general catchall api
  return await useProxy(event)
});
