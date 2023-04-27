const withPWA = require("next-pwa")({
  dest: "public",
  runtimeCaching,
});

module.exports = withPWA({
  // next.js config
});
