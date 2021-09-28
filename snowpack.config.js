// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration
/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: "/dist",
    public: { url: "/", static: true, resolve: false },
    /* ... */
  },
  plugins: [
    "@snowpack/plugin-react-refresh",
    // "@snowpack/plugin-webpack"
    /* ... */
  ],
  optimize: {
    // bundle: true,
    minify: true,
    splitting: true,
    target: 'es2018',
  },
  packageOptions: {
    source: "local",
    polyfillNode: true,
    env: {NODE_ENV: 'production'}
  },
  alias: {
    components: "./src/components",
    api: "./src/api",
    pages: "./src/pages",
    ducks: "./src/ducks",
    common: "./src/common"
  },
  devOptions: {
    // open: 'chrome',
    /* ... */
  },
  routes: [
    {"match": "routes", "src": ".*", "dest": "/index.html"}
  ],
  buildOptions: {
    /* ... */
    baseUrl: "http://localhost:8080/",
  }
};
