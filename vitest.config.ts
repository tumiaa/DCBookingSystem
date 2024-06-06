import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "node:url";

// export default defineConfig({
//   plugins: [vue()],
//   test: {
//     environment: 'happy-dom',
//   },
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./', import.meta.url)),
//       '~': fileURLToPath(new URL('./', import.meta.url)),
//     },
//   },
// });

import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
  // any custom Vitest config you require
  // plugins: [vue()],
  test: {
    environment: "happy-dom",
    //FIXME: make it so that this env file it given per test, not globally !important
    environmentOptions: { nuxt: { dotenv: { fileName: ".env" } } },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./", import.meta.url)),
      "~": fileURLToPath(new URL("./", import.meta.url)),
    },
  },
});
