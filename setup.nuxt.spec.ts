import { describe, it, expect } from "vitest";
// import { getConfig } from './config';

import App from "@/app.vue";

describe("Environment Variables", () => {
  it("should get the correct values from environment variables", async () => {
    const config = useRuntimeConfig();
    expect(config.NUXT_AAD_ENDPOINT_BASE).toBeDefined();
    expect(config.NUXT_CLIENT_ID).toBeDefined();
    expect(config.NUXT_CLIENT_SECRET).toBeDefined();
    expect(config.NUXT_TENANT_ID).toBeDefined();
    expect(config.public.NUXT_PUBLIC_ENV_URL).toBeDefined();

    expect(config.NUXT_AAD_ENDPOINT_BASE).toMatch(/(https:\/\/(.*)\.com\/)/);
    expect(config.NUXT_CLIENT_ID).not.toEqual("");
    expect(config.NUXT_CLIENT_SECRET).not.toEqual("");
    expect(config.NUXT_TENANT_ID).not.toEqual("");
    expect(config.public.NUXT_PUBLIC_ENV_URL).toMatch(
      /(https:\/\/(.*)\.com\/api\/)/
    );

  });
});
