export default function metadataHost() {
  const host =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.URL_BASE_WITH_PROTOCOLE ?? "no url";
  return host;
}
