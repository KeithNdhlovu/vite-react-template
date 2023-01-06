import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  e2e: {
    baseUrl: 'https://web-local.d6.co.za',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
