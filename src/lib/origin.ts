export function siteOrigin(input: string = "http://localhost:3000") {
  const url = new URL(input);
  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error("SITE_URL must contain only an HTTP or HTTPS origin");
  }
  return url.origin;
}
