const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        GOOGLE_CLIENT_ID:
          "599057677858-3868rgqao3dh8kja5n1qqs1p1pk9n8l5.apps.googleusercontent.com",
        GOOGLE_CLIENT_SECRET: "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",
        SECRET: "my_secret_ms",
        MONGODB_URL:
          "mongodb+srv://audtlr:B4Qj8N5qqPQLnJHa@cluster0.6rtatpt.mongodb.net/?retryWrites=true&w=majority",
      },
    };
  }
  return {
    env: {
      GOOGLE_CLIENT_ID:
        "599057677858-3868rgqao3dh8kja5n1qqs1p1pk9n8l5.apps.googleusercontent.com",
      GOOGLE_CLIENT_SECRET: "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",
      SECRET: "my_secret_ms",
      MONGODB_URL:
        "mongodb+srv://audtlr:B4Qj8N5qqPQLnJHa@cluster0.6rtatpt.mongodb.net/?retryWrites=true&w=majority",
    },
  };
};
