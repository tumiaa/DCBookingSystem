import { useProxy } from "~/composables/useProxy.server";
import type { H3Event, EventHandlerRequest } from "h3";

export default defineEventHandler(
  async (event: H3Event<EventHandlerRequest>) => {
    const type = getRouterParam(event, "type");

    const typeMap = {
      school: "School Tour",
      community: "Community Tour",
    };

    const toursTable = "mbrm_dc_tourses";
    const selectValues = "mbrm_tourname,mbrm_tournumber";
    const filterValues = `statuscode eq 1 and mbrm_tourtype eq '${typeMap[type as keyof typeof typeMap]}'`;

    //TODO: figure out a better way to do this, this is janky
    const moddedEvent: H3Event<EventHandlerRequest> = {
      ...event,
      path: `/${toursTable}?$select=${selectValues}&$filter=${filterValues}`,
      method: "GET",
      headers: event.headers,
      handled: event.handled,
      respondWith: event.respondWith,
      toJSON: event.toJSON,
      req: event.req,
      res: event.res,
    };
    console.log(`mapped ${event.path} to ${moddedEvent.path}`);

    return await useProxy(moddedEvent);
    
  }
);

