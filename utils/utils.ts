export function getUrl() {
  return process.env.STRAPI_URL ?? "http://localhost:1337";
}
