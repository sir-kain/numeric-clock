// vite.config.js
const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/components/stop-watch.ts"),
      name: 'MyLib',
      // fileName: (format) => `my-lib.${format}.js`
    },
    rollupOptions: {
      input: {
        demo: resolve(__dirname, "demo/index.html"),
      },
    },
  },
});
