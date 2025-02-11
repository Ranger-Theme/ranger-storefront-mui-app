/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    emotion: {
      sourceMap: false,
      autoLabel: "dev-only",
      labelFormat: "[local]",
      importMap: {
        "@mui/system": {
          styled: {
            canonicalImport: ["@emotion/styled", "default"],
            styledBaseImport: ["@mui/system", "styled"],
          },
        },
        "@mui/material/styles": {
          styled: {
            canonicalImport: ["@emotion/styled", "default"],
            styledBaseImport: ["@mui/material/styles", "styled"],
          },
        },
      },
    },
  },
};

export default nextConfig;
