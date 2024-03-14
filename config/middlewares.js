module.exports = ({ env }) => [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::poweredBy",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      headers: "*",
      origin: env("CORS_ORIGINS")
        ? env("CORS_ORIGINS").split(",")
        : [
            "https://oraidex.io",
            "https://develop-v3.oraiswap-frontend.pages.dev",
            "http://localhost:3000",
            "https://oraidex-landingpage.pages.dev",
          ],
    },
  },
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
