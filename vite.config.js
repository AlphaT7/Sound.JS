// import mkcert from "vite-plugin-mkcert";

export default {
  // plugins: [mkcert()],
  root: "./src/",
  publicDir: "../public/",
  build: {
    outDir: "../page/",
    assetsDir: "static/",
    emptyOutDir: true,
    reportCompressedSize: true,
  },
  server: {
    https: false,
    port: 3000,
    host: true,
    // open: true,
  },
};
