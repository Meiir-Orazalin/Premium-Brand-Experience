import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { siteOrigin } from "./src/lib/origin";
siteOrigin(process.env.SITE_URL);
const config: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [{ source: "/", destination: "/ru", permanent: false }];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};
export default createNextIntlPlugin()(config);
