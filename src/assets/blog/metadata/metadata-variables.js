export function metadataHost() {
  const host = process.env.URL_BASE_WITH_PROTOCOLE ?? "no url";
  return host;
}
