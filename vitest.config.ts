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
    // environmentOptions: { nuxt: { dotenv: { fileName: ".env" } } },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./", import.meta.url)),
      "~": fileURLToPath(new URL("./", import.meta.url)),
    },
  },
});
