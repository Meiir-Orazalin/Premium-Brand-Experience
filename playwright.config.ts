import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "tests/e2e",
  use: {
    channel: process.env.PLAYWRIGHT_CHANNEL || undefined,
    baseURL: "http://127.0.0.1:3017",
    trace: "retain-on-failure",
  },
  reporter: [["list"], ["html", { open: "never" }]],
  webServer: {
    command: "pnpm exec next start -H 127.0.0.1 -p 3017",
    url: "http://127.0.0.1:3017/ru",
    reuseExistingServer: false,
  },
});
